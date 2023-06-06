import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forms.css"
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';



/** Renders signup or profile form
 * 
 * Props:
 * - signup or editProfile function
 * 
 * RoutesList -> SignupForm
 * 
 */

function SignUpForm({ signup }) {
  const navigate = useNavigate();

  const [flashMessage, setFlashMessage] = useState(null);
  const initialState = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(initialState);


  /** Send {formData: username} to parent
   *    & clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    
    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      setFlashMessage(err);
      return;
    }

    setFlashMessage([]);
}

  /** Update local state w/curr state of input*/
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  }


  return (
      <Form className='col-md-4 container'>
        <div className='title my-3'>
          <h3>Sign up</h3>
        </div>
  
        {flashMessage && flashMessage.map((message, index) => (
          <Alert color='danger' className='text-center ' key={index}>
            {message}
          </Alert>
        ))}
  
        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input
          className="input"
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>
  
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
          className="input"
            id='password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
  
        <FormGroup>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
          className="input"
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
  
        <FormGroup>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
          className="input"
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
  
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
          className="input"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
  
        <button onClick={handleSubmit}>Submit</button>
      </Form>
    );
  
}

export default SignUpForm;
