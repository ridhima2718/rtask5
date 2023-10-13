import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    
    setAge(age);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>Enter your date of birth </label>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p><b>You are {age} years old</b></p>}
    </div>
  );
}

export default AgeCalculator;
