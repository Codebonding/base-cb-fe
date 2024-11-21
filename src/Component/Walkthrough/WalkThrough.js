import React, { useState } from "react";
// import "./Walkthrough.css";

const walkthroughData = [
  {
    title: "Product Intro Walkthrough",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    media: (
      <div className="media logo">
        <img
          className="logo"
          src="https://s3.amazonaws.com/jebbles-codepen/icon.png"
          alt="logo"
        />
      </div>
    ),
  },
  {
    title: "Data and File Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    media: (
      <div className="media books">
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/book_icon_1.png"
          alt="book 1"
        />
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/book_icon_2.png"
          alt="book 2"
        />
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/book_icon_3.png"
          alt="book 3"
        />
      </div>
    ),
  },
  {
    title: "Analytics and Metrics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    media: (
      <div className="media bars">
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_axis.png"
          alt="bar axis"
        />
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_3.png"
          alt="bar 3"
        />
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_2.png"
          alt="bar 2"
        />
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_1.png"
          alt="bar 1"
        />
      </div>
    ),
  },
  {
    title: "Reporting and Insights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    media: (
      <div className="media files">
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/file_icon_1.png"
          alt="file 1"
        />
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/file_icon_2.png"
          alt="file 2"
        />
        <img
          className="icon"
          src="https://s3.amazonaws.com/jebbles-codepen/file_icon_3.png"
          alt="file 3"
        />
      </div>
    ),
  },
];

const Walkthrough = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScreen = () => {
    if (currentIndex < walkthroughData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevScreen = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="walkthrough">
      <div className="walkthrough-body">
        <button
          className="prev-screen"
          onClick={prevScreen}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <div className="screen">
          {walkthroughData[currentIndex].media}
          <h3>{walkthroughData[currentIndex].title}</h3>
          <p>{walkthroughData[currentIndex].description}</p>
        </div>
        <button
          className="next-screen"
          onClick={nextScreen}
          disabled={currentIndex === walkthroughData.length - 1}
        >
          &gt;
        </button>
      </div>
      <div className="walkthrough-footer">
        <button
          className="button next-screen"
          onClick={nextScreen}
          disabled={currentIndex === walkthroughData.length - 1}
        >
          Next
        </button>
        <button
          className="button finish"
          disabled={currentIndex !== walkthroughData.length - 1}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Walkthrough;
