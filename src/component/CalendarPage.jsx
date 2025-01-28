import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // to navigate to next page
import './CalendarPage.css';  // Import the CSS specific to this component

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save selected date to the state and navigate to next page
    const data = { date: selectedDate };
    navigate('/food', { state: data });
  };

  return (
    <div className="calendar-page">
      <h1>When are you free...?</h1>
      <div className="calendar-input-container">
        <input 
          type="date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)} 
        />
        <button className="styled-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CalendarPage;
