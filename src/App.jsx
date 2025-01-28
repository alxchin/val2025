import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import CalendarPage from './component/CalendarPage';
import FoodPage from './component/FoodPage';
import DessertPage from './component/DessertPage';
import SummaryPage from './component/SummaryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wrong-answer" element={<WrongAnswer />} />
        <Route path="/happy" element={<HappyPage />} />
        <Route path="/calendar" element={<CalendarPage />} />  {/* New route for calendar page */}
        <Route path="/food" element={<FoodPage/>} />
        <Route path="/dessert" element={<DessertPage/>} />
        <Route path="/summary" element={<SummaryPage/>} />
      </Routes> 
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/happy"); // Redirect to the happy page when "Yes" is clicked
  };

  return (
    <div>
      <h1>Will you be my valentine?</h1>
      <div className="button-container">
        <button className="styled-button" onClick={handleYesClick}>
          <strong> Yes 💗 </strong>
        </button>
        <Link to="/wrong-answer">
          <button className="styled-button"> NO! I don't wanna be your valentine (╯°□°)╯︵ ┻━┻ </button>
        </Link>
      </div>

      <div className="gif-gallery">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFpZjI4aGlhdmZnbnNvdHdwNzdsbm5ueDBvM282M2FwYW9jeXNhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oxHQfvDzo7VhSRy8M/giphy.gif"
          alt="yescat1"
          className="styled-gif"
        />
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmdhYnV5MHZwb2Q1eGJ5amVzNGU2OWhyMWZmdWp5dDE3YTRweTIyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NkjMuxGZkziUMZnBHW/giphy.gif"
          alt="yescat2"
          className="styled-gif"
        />
      </div>
    </div>
  );
}

function WrongAnswer() {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = '/';  // Redirect back to the main page after 5 seconds
    }
  }, [counter]);

  return (
    <>
      <div className="wrong-answer-page">
        <h1><strong className='strong-wrong'>WRONG answer! </strong> Let's try again...</h1>
        <p>Redirecting you {counter} seconds... :3 </p>
      </div>
      <div className="gif-gallery">
        <img
          src="https://media1.tenor.com/m/AtNfSMzsPdEAAAAd/bubu-bubu-dudu.gif"
          alt="yescat3"
          className="styled-gif"
        />
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXAxYW96dzd6bXZmazdqczZhbzNiNHBlNGZ0a3N3dnE3OWQ4cnBpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q0JdIJiVSyV9Gccoln/giphy.gif"
          alt="yescat3"
          className="styled-gif"
        />
        <img
          src="https://media.tenor.com/rwZ1KmV8ZAoAAAAi/bubu-dudu-sseeyall.gif"
          alt="yescat3"
          className="styled-gif"
          />
        <img
          src="https://media1.tenor.com/m/FJYXjsubH58AAAAd/kitty-kitten.gif"
          alt="yescat3"
          className="styled-gif"
        />
      </div>
    </>
  );
}

function HappyPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/calendar'); // Redirect to the calendar page when button is clicked
  };

  return (
    <div>
      <h1>Yay! I love you :3 💖</h1>
      <div className="gif-gallery">
        <img
          src="https://media1.tenor.com/m/X52rk1vf28QAAAAC/dancing-cat-dance.gif"
          alt="happy valentine"
          className="styled-gif"
        />
      </div>
      <h2> don't go yet</h2>
      <button className="styled-button2" onClick={handleClick}>
        CLICK ME
      </button>
    </div>
  );
}



export default App;
