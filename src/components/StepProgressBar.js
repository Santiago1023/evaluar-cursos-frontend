import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StepProgressBar.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Dot = ({ active }) => {
  return (
    <FontAwesomeIcon
      className={`step_progress_bar_dot${active ? " active" : ""}`}
      icon={faCircle}
    />
  );
};

export const StepProgressBar = ({ currentStep, steps, style, className }) => {
  return (
    <div
      className={`step_progress_bar${className ? " " + className : ""}`}
      style={style}
    >
      <div className="background_line_placeholder">
        <div
          className="background_line"
          style={{ width: (100 * currentStep) / (steps - 1) + "%" }}
        />
      </div>
      {[...Array(steps)].map((e, i) => (
        <Dot key={i} active={currentStep === i} />
      ))}
    </div>
  );
};
