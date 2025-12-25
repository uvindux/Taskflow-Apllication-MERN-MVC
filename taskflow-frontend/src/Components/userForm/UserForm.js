import React, { useEffect, useState } from 'react';
import './UserForm.css';

function UserForm({ addUser, Submitted, data, IsEdite, UpdateUser }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!Submitted) {
      setId('');
      setName('');
      setErrors({});
    }
  }, [Submitted]);

  useEffect(() => {
    if (data && data.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  const validateForm = () => {
    const newErrors = {};

    if (!id || id <= 0) {
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
    if (validateForm()) {
      if (IsEdite) {
        UpdateUser({ id, name: name.trim() });
      } else {
        addUser({ id, name: name.trim() });
      }
    }
  };

  return (
    <div className="user-form-container">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-title">
            {IsEdite ? 'Edit User Details' : 'Add User Details'}
          </h1>
          <p className="form-subtitle">
            {IsEdite ? 'Update the information below' : 'Fill in the information below'}
          </p>
        </div>

        <div className="form-body">
          <div className="form-group">
            <label htmlFor="id" className="form-label">
              User ID
              <span className="required">*</span>
            </label>
            <input
              type="number"
              id="id"
              name="id"
              className={`form-input ${errors.id ? 'input-error' : ''}`}
              placeholder="Enter user ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {errors.id && <span className="error-message">{errors.id}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-actions">
            <button className="btn-submit" onClick={handleSubmit}>
              {IsEdite ? (
                <>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Update User
                </>
              ) : (
                <>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add User
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;