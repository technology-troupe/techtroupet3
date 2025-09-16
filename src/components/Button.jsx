import './button.css';

const Button = ({ children, onClick, type = "button" }) => (
  <button className="tt-btn" type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
