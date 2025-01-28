import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // for receiving data and navigation
import './DessertPage.css';


function DessertPage() {
  const { state } = useLocation(); // Get data passed from FoodPage
  const navigate = useNavigate();
  const [selectedDessert, setSelectedDessert] = useState("");
  const [selectDessertURL, setSelectedDessertURL] = useState("");
  const [selectedDessertItem, setSelectedDessertItem] = useState(null); // Track the selected dessert item

  const [userData, setUserData] = useState(state || {});

  const handleDessertSelection = (dessert, index) => {
    setSelectedDessert(dessert.name);
    setSelectedDessertURL(dessert.imgSrc);
    setSelectedDessertItem(index); // Highlight selected dessert
    setUserData({...userData, dessert,});
  };
  console.log(userData)
  const handleSubmit = () => {
    navigate('/summary', { state: userData });
  };

  const dessertList = [
    { name: "Cake", imgSrc: "https://media.tenor.com/8iS1WR1je6sAAAAi/tortas-de-cumplea%C3%B1os.gif" },
    { name: "Ice Cream Sundae", imgSrc: "https://media1.tenor.com/m/f6gCNvQdhbAAAAAd/dairy-queen-brownie-and-oreo-cupfection.gif" },
    { name: "Cheesecake", imgSrc: "https://media1.tenor.com/m/I3XdasCXp7cAAAAd/national-cheesecake-day-cheesecake.gif" },
    { name: "Apple Pie", imgSrc: "https://media1.tenor.com/m/abfeMDz1w_EAAAAd/mcdonalds-baked-apple-pie.gif" },
    { name: "Tiramisu", imgSrc: "https://media1.tenor.com/m/29YUeXdw18EAAAAd/tiramisu-bread.gif" },
    { name: "Macarons", imgSrc: "https://media1.tenor.com/m/OIaMQEe7gvAAAAAd/macaroons-dessert.gif" },
    { name: "Brownies", imgSrc: "https://media1.tenor.com/m/zQ07Z-0QfYQAAAAC/m-and-m-brownies-brownies.gif" },
    { name: "Crème Brûlée", imgSrc: "https://media1.tenor.com/m/LJOWdD9cI5sAAAAd/creme-brulee-dessert.gif" },
    { name: "Tanghulu", imgSrc: "https://tse4.mm.bing.net/th?id=OIP.nBBlISBF2qwfQ6xegdEHsQHaLH&pid=Api" },
    { name: "Churros", imgSrc: "https://media1.tenor.com/m/qOVJwWHUB9UAAAAd/churros-dip.gif" },
    { name: "Mochi Donut", imgSrc: "https://media1.tenor.com/m/13Mf7NjOhzsAAAAd/mister-donuts.gif" },
    { name: "Mochi Ice Cream", imgSrc: "https://tastesbetterfromscratch.com/wp-content/uploads/2020/12/Mochi-Ice-Cream-8-150x150.jpg" }
  ];

  return (
    <div className="dessert-page">
      <h1>What dessert would you like to eat?</h1>
      <div className="dessert-options">
        {dessertList.map((dessert, index) => (
          <div
            key={index}
            className={`dessert-item ${selectedDessertItem === index ? 'selected' : ''}`}
            onClick={() => handleDessertSelection(dessert, index)}
          >
            <img
              src={dessert.imgSrc}
              alt={dessert.name}
            />
            <div className="dessert-title">{dessert.name}</div>
          </div>
        ))}
      </div>
      <button className="styled-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default DessertPage;
