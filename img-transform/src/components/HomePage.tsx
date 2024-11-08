import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Abbas Shikari. Engineer. Scientist. Builder</h1>
        <p>I've linked a series of my personal projects. Please check them out and get in touch if you're interested in working together.</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>I'm a Machine Learning engineer at Cruise, focusing on self-driving car planning. I develop closed-loop, GPU-based simulations to support pre- and post-training of foundational driving models, with a particular interest in post-training. My work also extends to multimodal generative modeling, where I’m exploring new ways to enhance autonomous vehicle capabilities. With a solid background in ML and robotics, along with experience in mechanical design, I aim to bridge advanced modeling with real-world, impactful applications..</p>
        </section>
        <section>
          <h2>My Projects</h2>
          <p>A showcase of projects goes here.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Abbas Shikari. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

