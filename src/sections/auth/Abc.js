import React, { useReducer } from 'react';
import { TextField, Button } from '@mui/material';

export default function Abc() {
  const [formInput, setFormInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
    name: '',
    email: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = { formInput };

    fetch('https://pointy-gauge.glitch.me/api/form', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch((error) => console.error('Error:', error));
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        id="margin-normal"
        name="name"
        defaultValue={formInput.email}
        helperText="Enter your full name"
        onChange={handleInput}
      />
      <TextField
        label="Email"
        id="margin-normal"
        name="email"
        defaultValue={formInput.name}
        helperText="e.g. name@gmail.com"
        onChange={handleInput}
      />
      <Button type="submit" variant="contained" color="primary">
        Subscribe
      </Button>
    </form>
  );
}
