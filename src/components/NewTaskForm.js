import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  });

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.text && formData.category) {
      onTaskFormSubmit(formData);
      setFormData({
        text: "",
        category: ""
      });
    }
  }

  const categoryOptions = categories
    .filter(cat => cat !== 'All')
    .map(cat => (
      <option value={cat} key={cat}>{cat}</option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleFormData}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleFormData}
        >
          <option value="" disabled>Select category</option>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
