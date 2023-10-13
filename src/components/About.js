import React from 'react';
import './styles/aboutus.css'
function About() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>
        I am a highly adaptable and driven individual with a diverse range of skills and experiences.
        With a passion for continuous learning, I thrive in dynamic and challenging environments.
        Throughout my career, I have demonstrated exceptional problem-solving abilities and a strong attention to detail.
        Feel free to reach out to me for networking, collaboration, or any other professional inquiries.
      </p>
      <p>
        My skills are Python, C++ , C , Frontend-dev.
      </p>
      {/* <div className='cert'>
        <h3>My certifications</h3>
        <div className='cards'>
          <div className='item'>
            
            <table>
              <thead>
                <tr>
                  <th>Skills</th>
                  <th>Organization</th>
                </tr>
                <td>C++</td>
              </thead>
              <tbody>
                <tr>
                  <td>C++</td>
                  <td>HackerRank</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>

  );
}

export default About;