import React, { useState } from 'react';
import { AddCvButton } from './components/add-button';
import { CvForm } from './components/cv-form';

function App() {
  const [cvStatus, setCvStatus] = useState(false);
  const updateCvStatus = () => {
    setCvStatus(true);
  };

  return (
    <div>
      <header className="header">
        <span className="title"> Create a beautiful CV letter here!</span>
      </header>
      <div className="main-content">
        {!cvStatus ? (
          <AddCvButton updateCvStatus={updateCvStatus} />
        ) : (
          <CvForm />
        )}
      </div>
    </div>
  );
}

export default App;
