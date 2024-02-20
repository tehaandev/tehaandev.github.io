import { PiSpinnerLight } from "react-icons/pi";
import "./Loading.css";

function Loading(props) {
  return (
    <div className={props.className}>
      <div className="spinner">
        <PiSpinnerLight />
      </div>
    </div>
  );
}

export default Loading;
