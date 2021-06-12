import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleInputChange,
    inputs,
  };
};

export default useForm;
