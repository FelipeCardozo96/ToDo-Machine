import { FaCheck } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import './TodoIcon.css';

const iconTypes = {
  "check": (color) => <FaCheck className="Icon-svg" fill={color} />,
  "delete": (color) => <FaRegWindowClose className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };