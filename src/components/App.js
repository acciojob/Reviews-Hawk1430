import React from 'react';
import Review from './Review';
import '../styles/App.css'

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h1 id="review-heading">Our Reviews</h1>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App