import { useLocation } from "react-router-dom";
import "./SummaryPage.css";

function SummaryPage() {
  const { state } = useLocation(); // Get the data from DessertPage

  return (
    <div className="summary-page">
      <h1>Thank You for Being My Girlfriend & Valentine ❤️</h1>
      <p>
        We’re going to have an amazing time together! Here's the plan:
      </p>
      <div className="summary-details">
        <p><strong>Date:</strong> {state?.date || "N/A"}</p>
        <p>
          <strong>Main Course:</strong> {state?.food?.name || "N/A"}
        </p>
        {state?.food?.imgSrc && (
          <img
            src={state.food.imgSrc}
            alt={state.food.name}
            className="summary-image"
          />
        )}
        <p>
          <strong>Dessert:</strong> {state?.dessert?.name || "N/A"}
        </p>
        {state?.dessert?.imgSrc && (
          <img
            src={state.dessert.imgSrc}
            alt={state.dessert.name}
            className="summary-image"
          />
        )}
      </div>
      <p> I love you! ❤️ Hope you enjoyed this little site :3 </p>
    </div>
  );
}

export default SummaryPage;
