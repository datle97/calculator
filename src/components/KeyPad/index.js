import "./KeyPad.scss";
import clsx from "clsx";

const KeyPad = ({ value, label, handleClick, className }) => {
  return (
    <button
      value={value}
      onClick={(event) => handleClick(event.target.value)}
      className={clsx("button", className)}
    >
      {label ? label : value}
    </button>
  );
};

export default KeyPad;
