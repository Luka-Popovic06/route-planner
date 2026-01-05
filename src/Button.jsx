const Button = ({ children, btnType, variation, clickAction }) => {
  const baseClass = "btn";
  let btnClass;
  if (variation === "standard") btnClass = "btn-standard";
  if (variation === "standard-mini") btnClass = "btn-standard-mini";
  if (variation === "primary") btnClass = "btn-primary";
  return (
    <button
      type={btnType}
      onClick={clickAction}
      className={`${baseClass} ${btnClass}`}
    >
      {children}
    </button>
  );
};
export default Button;
