import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import { fetchFormData } from "./Helpers/formApi";

function App() {
  const [formData, setFormData] = useState({});

  const loadFormData = async () => {
    const resData = await fetchFormData();
    setFormData(resData);
  };

  useEffect(() => {
    loadFormData();
  }, []);
  return (
    <div>
      {formData.view &&
        Object.keys(formData.view).map((formKey) => (
          <Form key={formKey} info={formData.view[formKey]} data={formData.data[formKey]} />
        ))}
    </div>
  );
}

export default App;
