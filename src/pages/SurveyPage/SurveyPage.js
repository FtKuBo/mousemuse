
import React, { useState } from 'react';
import './SurveyPage.css';

const SurveyPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to a server
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="surveypage">
        <h2>Thank you for your feedback!</h2>
        <p>We appreciate you taking the time to help us improve.</p>
      </div>
    );
  }

  return (
    <div className="surveypage">
      <h2>Your Voice Matters!</h2>
      <p>We're constantly striving to make your MouseMuse experience exceptional. Please share your thoughts and help us improve!</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your feedback..."
          rows="5"
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default SurveyPage;
