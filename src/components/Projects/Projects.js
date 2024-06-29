import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ChatApp from "../../Assets/Projects/ChatApp.png";
import SnakeGame from "../../Assets/Projects/SnakeGame.png";
import MovieFinder from "../../Assets/Projects/MovieFinder.png";
import WeatherApp from "../../Assets/Projects/WeatherApp.png";
import QuizApp from "../../Assets/Projects/QuizApp.png";
import ToDoList from "../../Assets/Projects/ToDoList.png";
import NetflixClone from "../../Assets/Projects/netflix-clone.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetflixClone}
              isBlog={false}
              title="NetflixClone"
              description="Clone of Netflix's user interface and user experience, built using React.js for the frontend and Firebase for the backend. The project aims to replicate the look and feel of Netflix, providing a seamless experience across different devices."
              ghLink="https://github.com/ashutoshh-17/NetflixClone"
              demoLink="https://netflix-clone-81.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
           </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="WeatherApp"
              description="It provides real-time weather updates by integrating various technologies such as JSP, Servlets, the OpenWeather API, Apache Tomcat server, Java I/O, Jakarta EE, JSON, and Gson. Additionally, it features a user-friendly interface designed with HTML and CSS."
              ghLink="https://github.com/ashutoshh-17/WeatherApp"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieFinder}
              isBlog={false}
              title="MovieFinder"
              description="A site where you can search for any movie to get detailed information including plot summaries, cast and crew details, ratings, reviews, and much more, all powered by IMDb."
              ghLink="https://github.com/ashutoshh-17/MovieFinder"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SnakeGame}
              isBlog={false}
              title="SnakeGame"
              description="This project will guide you through creating a classic Snake game using Java. The Snake game is a popular arcade game where the player controls a snake, navigating it to eat food while avoiding collisions with walls or itself."
              ghLink="https://github.com/ashutoshh-17/SnakeGame"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoList}
              isBlog={false}
              title="To-Do-List"
              description="A simple and interactive TO DO List application built using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as complete, providing a streamlined way to manage daily tasks."
              ghLink="https://github.com/ashutoshh-17/To-Do-List"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatApp}
              isBlog={false}
              title="ChatApp"
              description="A real-time chat room application built using Java and Spring Boot WebSocket. This application allows users to log in with a username and communicate with each other in real-time through a modern, intuitive interface."
              ghLink="https://github.com/ashutoshh-17/ChatApp"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="QuizApp"
              description="A Java-based application designed to provide users with an engaging quiz experience. The application ensures that users register and log in before attempting quizzes, maintaining a personalized and secure environment for quiz-taking."
              ghLink="https://github.com/ashutoshh-17/QuizApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
