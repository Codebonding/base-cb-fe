import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Content />
      <Footer />

      
    </div>
  );
};

export default App;
