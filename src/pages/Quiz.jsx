import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../Style/StyleQuiz.css";

function TakenExam() {
  const [startQuiz, setStartQuiz] = useState([]);
  const url = "https://localhost:7225/api/Quiz/StartQuiz";
  async function handleStartQuiz() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
          // body: JSON.stringify(information),
        });
        resolve(res);
      }, 1000);
    });
  }

  const handleSubmit = async () => {
    //event.preventDefault();
    const data = await handleStartQuiz().then(function (result) {
      return result.json();
    });
    setStartQuiz(data.data);
    data.data.map((member) => console.log(member));
    // localStorage.setItem("jwtToken", data.data);
    // if (data && data.status == true) {
    //   setThis(true);
    // }
    //console.log(localStorage.getItem("jwtToken"));
  };

  useEffect(() => {
    handleSubmit();
    console.log(startQuiz);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>QUIZ PAGE</title>
      </Helmet>
      {startQuiz
        ? startQuiz.map((member, key) => (
            <div className="questions">
              <h2>Quesstion</h2>
              <div>
                <span className="timer">60:00</span>
              </div>
              <div className="lifeline-container">
                <div className="name-question">Câu 1</div>
              </div>
              <div className="question">Google was founded in what year?</div>
              <div className="options-container">
                <input className="name" type="radio"></input>
                <label className="Answer">Answer</label>
              </div>
              <br />
            </div>
          ))
        : null}
      {/* <div className="button-container">
            <button className="btn btn-primary  btn-nm">Submit</button>
          </div> */}
    </React.Fragment>
  );
}

export default TakenExam;
