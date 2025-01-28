import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // to receive passed data from previous page
import './FoodPage.css';
import { useNavigate } from 'react-router-dom'; // to navigate to next page


function FoodPage() {
  const { state } = useLocation();  // Get the data from CalendarPage
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedFoodURL, setSelectedFoodURL] = useState("")
  const [userData, setUserData] = useState({
    date: state?.date || "",
    food: {
      name: selectedFood,
      imgsrc: selectedFoodURL,
    },
    dessert: {
      name: "",
      imgsrc: "",
    }
  });
  const navigate = useNavigate();

  const [selectedFoodItem, setSelectedFoodItem] = useState(null); // Track the selected food item

  const handleFoodSelection = (food, index) => {
    setSelectedFood(food.name);
    setSelectedFoodURL(food.imgSrc)
    setSelectedFoodItem(index); // Store the index of the selected food
    setUserData({ ...userData, food });
  };

  const handleSubmit = () => {
    navigate("/dessert", { state: userData });
  };

  const foodList = [
    { name: "Pizza", imgSrc: "https://tse3.mm.bing.net/th?id=OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7&pid=Api" },
    { name: "Sushi", imgSrc: "https://tse3.mm.bing.net/th?id=OIP.2j5Nsiuwl_jUU9LFJ8JW5gHaHa&pid=Api" },
    { name: "Pasta", imgSrc: "https://tse2.mm.bing.net/th?id=OIP.fUV8cTmCx4JDtVjoUG_r3QHaLH&pid=Api" },
    { name: "Burgers", imgSrc: "https://tse4.mm.bing.net/th?id=OIP.8MJgw49NgTeBLs1BFzqS0gHaHa&pid=Api" },
    { name: "Hotdog", imgSrc: "https://tse3.mm.bing.net/th?id=OIP.-SQl_G7RcB51DITJy4ANWwHaE8&pid=Api" },
    { name: "Tacos", imgSrc: "https://tse1.mm.bing.net/th?id=OIP.Njy-lLsZNZEOaPu-sKcysAHaE8&pid=Api" },
    { name: "Steak", imgSrc: "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*" },
    { name: "Ramen", imgSrc: "https://tse2.mm.bing.net/th?id=OIP.KoxDguzaHlKCWcVvzpZSfQAAAA&pid=Api" },
    { name: "Poke Bowl", imgSrc: "https://tse3.mm.bing.net/th?id=OIP.P6GcZMJL8N_E1k5g6D0tQQHaLH&pid=Api" },
    { name: "Korean BBQ", imgSrc: "https://tse4.mm.bing.net/th?id=OIP.Bw9N1Q0-2tKJchOnqEDNKwHaFj&pid=Api" },
    { name: "Korean Chicken", imgSrc: "https://tse2.mm.bing.net/th?id=OIP.Li8pxx1mH1MnM7LYG83SeAHaHa&pid=Api" },
    { name: "Fish and Chips", imgSrc: "https://tse3.mm.bing.net/th?id=OIP._KSLE8PO2nJ1-yMzdl3U1QHaE1&pid=Api" },
    { name: "Wings", imgSrc: "https://www.thecookierookie.com/wp-content/uploads/2018/12/baked-chicken-wings-reshoot.jpg" },
    { name: "Shawarma", imgSrc: "https://tse4.mm.bing.net/th?id=OIP.5AT39p5w7-_Z36gsnaMcOgHaHa&pid=Api" },
    { name: "Peking Duck", imgSrc: "https://tse4.mm.bing.net/th?id=OIP.OWYLfzs7AWc6pbreO1qf8wHaEJ&pid=Api" }
  ];

  return (
    <div className="food-page">
      <h1>What would you like to eat?</h1>
      <div className="food-options">
        {foodList.map((food, index) => (
          <div
            key={index}
            className={`food-item ${selectedFoodItem === index ? 'selected' : ''}`}
            onClick={() => handleFoodSelection(food, index)}
          >
            <img
              src={food.imgSrc}
              alt={food.name}
            />
            <div className="food-title">{food.name}</div>
          </div>
        ))}
      </div>
      <button className="styled-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default FoodPage;
