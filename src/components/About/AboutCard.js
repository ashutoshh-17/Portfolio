import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashutosh </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently <span className="purple">Graduating in IT '26</span> from <span className="purple">RMD Sinhgad School of Engineering, Warje, Pune. </span>
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <p/> ⚡ Passionate about creating content 🎥
            </li>
            <li className="about-activity">
              <p/> 🚀 Absolutely love travelling ✈️
            </li>
            <li className="about-activity">
              <p/> 🔥Enjoy playing games 🎮
            </li>
          </ul>

          <p style={{ color: "#6098f0" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
