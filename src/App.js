import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "30px", background: "#0f172a", color: "white" }}>

      {/* HEADER */}
      <h1>Mathar Chikkandar</h1>
      <h3>Java Full Stack Developer</h3>
      <p>Email: aijthmathar@gmail.com | Phone: 916379295804 | Chennai</p>
      <p>
        LinkedIn: https://linkedin.com/in/mathar-chikkandar-2184093ab <br/>
        GitHub: https://github.com/aijthmathar-sys
      </p>

      <hr />

      {/* SUMMARY */}
      <section>
        <h2>Professional Summary</h2>
        <p>
          Motivated Java Full Stack Developer skilled in Java 21, Spring Boot, React.js, SQL, and MongoDB.
          Passionate about building scalable web applications and delivering efficient solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <p>
          Java 21 | HTML5 | CSS3 | Spring Boot | REST APIs | MySQL | MongoDB | Git | Postman | React.js | Team Collaboration
        </p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>
        <h3>Java Full Stack Developer Course – GUVI-HCL</h3>
        <p>Nov 2025 - Mar 2026 | Chennai</p>
        <p>
          Developed full-stack web applications including e-commerce, Hotel Booking, and Job Connect using Java 21 and Spring Boot.
          Built REST APIs and integrated MySQL and MongoDB databases.
          Designed responsive UI using React.js and used Git for version control.
        </p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <h3>Hotel Booking Application</h3>
        <p>
          Improved booking efficiency by implementing authentication, room availability search, and payment integration using Java 21 and Spring Boot.
          Built REST APIs with MySQL and designed responsive frontend using React.js.
        </p>
        <p>GitHub: https://github.com/aijthmathar-sys/hotelbookingback</p>

        <h3>Ecommerce Web Application</h3>
        <p>
          Developed full-stack e-commerce app using Spring Boot and React.
          Implemented JWT authentication, cart and order APIs, and Razorpay payment integration.
          Improved API performance by 30%.
        </p>
        <p>GitHub: https://github.com/aijthmathar-sys/ecommerce</p>

        <h3>JobConnect Job Portal</h3>
        <p>
          Developed job portal connecting job seekers and recruiters.
          Implemented secure authentication and job application modules with 100+ listings.
          Improved processing efficiency by 25%.
        </p>
        <p>GitHub: https://github.com/aijthmathar-sys/jobconnect</p>

      </section>

      {/* EDUCATION */}
      <section>
        <h2>Education</h2>
        <p>
          Electronics and Instrumentation <br/>
          Kongu Engineering College, Erode (2017)
        </p>
      </section>

      {/* CERTIFICATION */}
      <section>
        <h2>Certifications</h2>
        <p>
          Java Full Stack Developer Course (Nov 2025 - Feb 2026) <br/>
          GUVI-HCL
        </p>
      </section>

    </div>
  );
}

export default App;