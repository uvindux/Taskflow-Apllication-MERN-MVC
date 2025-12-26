import React, { useEffect, useState } from 'react';
import './UserForm.css';

function UserForm({ addUser, Submitted, data, IsEdite, UpdateUser }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  // Populate form when editing
  useEffect(() => {
    if (IsEdite && data && data.id) {
      setId(data.id);
      setName(data.name);
    }
  }, [data, IsEdite]);

  // Clear form AFTER submit completes
  useEffect(() => {
    if (!Submitted && !IsEdite) {
      setId('');
      setName('');
      setErrors({});
    }
  }, [Submitted, IsEdite]);

  const validateForm = () => {
    const newErrors = {};

    if (!id || Number(id) <= 0) {
      newErrors.id = 'Please enter a valid ID';
    }

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const payload = {
      id: Number(id),
      name: name.trim()
    };

    if (IsEdite) {
      UpdateUser(payload);
    } else {
      addUser(payload);
    }
  };

  return (
    <div className="user-form-container">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-title">
            {IsEdite ? 'Edit Task Details' : 'Add Task Details'}
          </h1>
          <p className="form-subtitle">
            {IsEdite ? 'Update the information below' : 'Fill in the information below'}
          </p>
        </div>

        <div className="form-body">
          <div className="form-group">
            <label htmlFor="id" className="form-label">
              Task Number <span className="required">*</span>
            </label>
            <input
              type="number"
              id="id"
              className={`form-input ${errors.id ? 'input-error' : ''}`}
              placeholder="Enter task ID"
              value={id}
              onChange={(e) => setId(Number(e.target.value))}
            />
            {errors.id && <span className="error-message">{errors.id}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Task <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              placeholder="Enter task name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-actions">
            <button className="btn-submit" onClick={handleSubmit}>
              {IsEdite ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
