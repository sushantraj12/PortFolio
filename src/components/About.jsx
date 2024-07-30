import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        Hello,I'm SUSHANT RAJ, a passionate and dedicated web developer with a keen interest in creating dynamic and user-friendly applications. 
        With a solid background in  React-js, I'm constantly exploring new technologies to enhance my 
        expertise and deliver innovative solutions.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
       <li>Haldia Institue of Technology, Haldia </li>  
         2021 — 2025<br></br>
        Bachelor of Technology in Information Technology.<br></br>
        Secured 8.1 cgpa.
        <br></br>
        <br></br>
        <li>A.N COLLEGE, PATNA</li> 
         2018 — 2020<br></br>
        Higher Secondary- BSEB<br></br>
        Secured 80.4%
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          <li> Proficient in C , C++ ,javascript</li> <li>Experienced with React-js ,Node-js</li> 
          <li> Excellent problem-solving skills Effective communicator and
          collaborator</li>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
        Completed an internship at Tech Solutions Inc., where
         I assisted in developing a web application and collaborated on debugging 
         and testing software. Developed an e-commerce platform as an academic 
         project using React and Node.js, implementing secure user authentication. 
         Volunteered at Code for Good, contributing to the development of a community outreach platform and organizing coding workshops.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
           200+ question solved on Leetcode
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
