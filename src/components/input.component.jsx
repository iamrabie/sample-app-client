import { useState } from "react";

const InputField = ({ onInput }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onInput(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="please type something"
      value={value}
      className="w-[75%] py-2 border border-gray-300 px-1.5 rounded-lg"
      onChange={handleInputChange}
    />
  );
};

export default InputField;
