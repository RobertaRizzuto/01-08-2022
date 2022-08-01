import './index.css';

const Button = ({textContent, onBtnClick}) => {
  return (
    <button onClick={onBtnClick}  className="Button">{ textContent }</button>
  )
}

export default Button;