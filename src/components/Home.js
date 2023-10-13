import React from 'react';
import './styles/HomePage.css';
import Typed from 'typed.js';
import myImage from './me.jpg';


const HomePage = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coder', 'Frontend-dev', 'Designer'],
      typeSpeed: 50,
      backSpeed:50,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    
    <div className="home-page">
      <main>
        <div className="banner">
          <div className='content'>
            <h2 className='myname'>I'm Uttej Terlapu</h2>
            <section className="type">
              <h1>I'm a <span className="typed-text" ref={el} />.</h1>
            </section>
            <p className='para'>self motivated, self learning <br></br>& Passionated Coder</p>
          </div>
          <img src={myImage} className='myimage' alt='myimg'></img>
        </div>
        
        <div className="featured-content">
          <p className='explore-left'>Explore More about me</p>
          <a href="/About" className="cta-button">Explore</a>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

// CSS styles

