import { useState, useEffect } from "react";

const McqTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [examEnded, setExamEnded] = useState(false);
  const [examEndTime, setExamEndTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://tnpezvbw53.execute-api.us-east-1.amazonaws.com/api/questions/start", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await response.json();

        if (data.message === "Test started") {
          setQuestions(data.questions);
          setExamEndTime(new Date(data.endTime));
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (!examEndTime) return;
    const interval = setInterval(() => {
      const remainingTime = Math.max(0, Math.floor((examEndTime - new Date()) / 1000));
      setTimeRemaining(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(interval);
        setExamEnded(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [examEndTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleSubmit = async () => {
    const answers = questions.map((question, index) => ({
      questionId: question.id,
      userAnswer: selectedAnswers[index] || null,
    }));

    try {
      setSubmitting(true);
      await fetch("https://tnpezvbw53.execute-api.us-east-1.amazonaws.com/api/questions/submit", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });
      setExamEnded(true);
    } catch (error) {
      console.error("Error submitting exam:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const isSubmitEnabled = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {loading ? (
        <div className="text-center text-lg font-semibold">Loading questions...</div>
      ) : (
        <>
          <div className="text-right text-gray-600 font-semibold text-lg mb-4">
            ⏳ Time remaining: {formatTime(timeRemaining)}
          </div>

          {/* Conditionally render pagination only if the exam hasn't ended */}
          {!examEnded && (
            <div className="flex flex-wrap justify-center mb-4 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-lg border transition-all duration-200 ${
                    index === currentQuestionIndex ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          {questions.length > 0 && !examEnded ? (
            <>
              <p className="text-lg font-semibold mb-3">
                {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
              </p>

              <ul className="space-y-2">
                {Object.entries(questions[currentQuestionIndex].options).map(([key, option]) => (
                  <li
                    key={key}
                    className={`p-2 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedAnswers[currentQuestionIndex] === key ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleAnswerSelect(key)}
                  >
                    {option}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-4 w-full py-2 rounded-lg transition-all duration-200 ${
                  isSubmitEnabled ? "bg-[#195E6A] text-white hover:bg-[#164D5A]" : "bg-gray-400 text-white cursor-not-allowed"
                }`}
                onClick={handleSubmit}
                disabled={!isSubmitEnabled || submitting}
              >
                {submitting ? "Submitting..." : "Submit Answer"}
              </button>

              {/* Conditionally render navigation buttons only if the exam hasn't ended */}
              {!examEnded && (
                <div className="mt-4 flex justify-between flex-wrap gap-2">
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
                    className="bg-[#195E6A] text-white py-2 px-4 rounded-lg disabled:opacity-50"
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                    className="bg-[#195E6A] text-white py-2 px-4 rounded-lg disabled:opacity-50"
                    disabled={currentQuestionIndex === questions.length - 1}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-lg font-semibold text-center text-green-600">
              {examEnded ? (submitting ? "Submitting..." : "Your MCQ test has been completed") : "Already Your MCQ test has been completed"}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default McqTest;