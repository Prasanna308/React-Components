import React from "react";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main heading with highlight style */}
      <h1 className="bg-yellow-300 text-black text-4xl font-extrabold text-center p-4 shadow-md">
        🌟 Welcome to My Website 🌟
      </h1>

      <Content />
      <Footer />
    </div>
  );
}

export default App;
