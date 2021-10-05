import { useState } from "react";

export const useData = (values) => {
  const [formValues, setFormValues] = useState({
    ...values
  });

  const handleFormValueChange = (key, value) => {
    setFormValues(
      {
        ...formValues,
        [key]: value
      }
    );
  };

  return [
    formValues,
    handleFormValueChange,
    setFormValues,
  ]
};