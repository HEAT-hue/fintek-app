import { Link } from "react-router-dom";
import "./StartSavingToday.scss";
// Start saving today btton
export const StartSavingToday = () => {
  return (
    <div className="StartSavingToday">
      <Link to="/login" className="StartSavingToday__links">
        Start Saving Today
      </Link>
    </div>
  );
};
