import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>

      {/* Header */}
      <Header />

      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />

        {/* React-Router -> Chat screen */}
      </div>
    </div>
  );
}

export default App;
