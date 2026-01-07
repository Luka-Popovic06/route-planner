const Input = ({ text, inpType, variation, value, action }) => {
  let inputClass;
  if (variation === "standard") inputClass = "input-standard";
  return (
    <input
      type={inpType}
      value={value}
      onChange={(e) => action(e.target.value)}
      placeholder={text}
      className={inputClass}
    />
  );
};
export default Input;
