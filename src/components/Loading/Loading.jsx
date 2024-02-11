import "./Loading.css";
import { FaSpinner } from "react-icons/fa6";
import { PiSpinnerLight } from "react-icons/pi";

function Loading() {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <PiSpinnerLight />
      </div>
    </div>
  );
}

export default Loading;
