const Input = ({ text, inpType, variation }) => {
  let inputClass;
  if (variation === "standard") inputClass = "input-standard";
  return <input type={inpType} placeholder={text} className={inputClass} />;
};
export default Input;
