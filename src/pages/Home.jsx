import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Pagination } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { tienganh, tiengviet, toan } from "../Style/images/index";
import { useEffect, useState } from "react";

function Home() {
  const [quizType, setQuizType] = useState([]);

  const url = "https://localhost:7225/api/QuizType/GetAll";
  async function handleQuiz() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = fetch(url, {
          method: "GET",
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
    const data = await handleQuiz().then(function (result) {
      return result.json();
    });
    setQuizType(data.data);
    data.data.map((member) => console.log(member));
    // localStorage.setItem("jwtToken", data.data);
    // if (data && data.status == true) {
    //   setThis(true);
    // }
    //console.log(localStorage.getItem("jwtToken"));
  };

  useEffect(() => {
    handleSubmit();
    console.log(quizType);
  }, []);

  const checkTypeImg = (name) => {
    if (name == "Math") {
      return toan;
    } else if (name == "English") {
      return tienganh;
    } else {
      return tiengviet;
    }
  };

  return (
    <>
      <Container style={{ maxWidth: "1600px", marginTop: "20px" }}>
        <Row>
          {/* {console.log(quizType.length)} */}
          {quizType
            ? quizType.map((member, key) => (
                <Col md={3}>
                  <Card style={{ width: "18rem", height: "25rem" }}>
                    <Card.Img
                      variant="top"
                      src={checkTypeImg(member.quizTypeName)}
                      style={{ width: "286px", height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title>{member.quizTypeName}</Card.Title>
                      <Card.Text></Card.Text>
                      <Link className="btn btn-primary mt-5" to="/quiz">
                        Start
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : null}

          {/* <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Math 1</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Math 2</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Math 3</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Math 4</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Literature 1</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Literature 2</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Literature 3</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={checkTypeImg(member.quizTypeName)}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Literature 4</Card.Title>
                <Card.Text></Card.Text>
                <Link className="btn btn-primary mt-5" to="/quiz">
                  Start
                </Link>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
      <Outlet />
    </>
  );
}

export default Home;
