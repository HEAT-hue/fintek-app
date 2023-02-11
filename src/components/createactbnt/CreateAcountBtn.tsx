import { useNavigate } from "react-router-dom";
import "./CreateAccountBtn.scss";

export const CreateAccountBtn = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  }

  return (
    <div className="BtnCnt primary">
      <button className="CraeteAcBtn" onClick={handleClick}>Create free account</button>
    </div>
  );
};
