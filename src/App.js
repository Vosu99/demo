import React, { useState } from "react";
import "./App.css";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Paging from "./components/Paging";
import PageExam from "./pages/PageExame";
import Quiz from "./pages/Quiz";
import Logout from "./components/Logout";
import HistoryExample from "./pages/History";
import UpdateQuiz from "./pages/UpdateQuiz";
import UpdateAcount from "./pages/UpdateAcount";
import Subjects from "./pages/UpdateSubject";
import UpdateExams from "./pages/UpdateExam";
import { useEffect } from "react";

function App() {
  // const [currentForm, setCurrentForm] = useState("login");
  const [isLoReg, setThis] = useState(undefined);

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };
  useEffect(() => {
    const checkURL = () => {
      const url = window.location.href;
      if (url == "http://localhost:3000/login") {
        setThis(false);
      } else {
        setThis(true);
      }
    };
    checkURL();
  }, []);
  return (
    <div className="App">
      <div className="app-container">
        {isLoReg && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="login/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/subject" element={<Subjects />} />
          <Route path="/updateExams" element={<UpdateExams />} />
          <Route path="/historyExample" element={<HistoryExample />} />
          <Route path="/pageExam" element={<PageExam />} />
        </Routes>
        {/* <Login /> */}
        {/* <Logout /> */}
        {/* <UpdateExams /> */}
        {/* <Subjects /> */}
        {/* <UpdateAcount /> */}
        {/* <UpdateQuiz /> */}
        {/* <HistoryExample /> */}
        {/* <Quiz /> */}
        {/* <PageExam />  */}
        {/* <Home />  */}
        <Paging />
        {/*       
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes> */}

        {/* <header>
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} /> 
        )}
      </header>  */}
      </div>
    </div>
  );
}

export default App;
