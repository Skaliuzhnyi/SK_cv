import React from 'react';
import Typed from 'typed.js';

function NameTyped() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-end Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
    });
  }, []);

  return (
    <div
      className="hero-container"
      data-aos="fade-in"
    >
      <h1>Serhii Kaliuzhnyi</h1>
      <p>
        I'm{' '}
        <span
          className="typed"
          ref={el}
        ></span>
      </p>
    </div>
  );
}

export default NameTyped;
