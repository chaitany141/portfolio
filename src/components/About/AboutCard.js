import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Chaitanya Pawar</span>{" "}
            from <span className="purple">Pune, India</span>.
            <br />
            I’m currently pursuing a Bachelor’s degree in Computer Engineering at 
            <span className="purple"> Pune Institute Of Computer Technology</span> {" "}
            and I'm passionate about 
                        <span className="purple"> full-stack development </span>
 and  <span className="purple">problem solving</span>.

      
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chaitanya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
