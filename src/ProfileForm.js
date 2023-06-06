import React, { useContext, useState } from "react";
import userContext from "./userContext";
import { Form, FormGroup, Label, Input, Alert } from 'reactstrap';
/** Renders signup or profile form
 *
 * Props:
 * - signup or editProfile function
 *
 * RoutesList -> SignupForm
 *
 */

function ProfileForm({ editProfile }) {
  const { currentUser } = useContext(userContext);

  const [flashMessage, setFlashMessage] = useState(null);
  const initialState = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  };
  const [formData, setFormData] = useState(initialState);

  /** Send {formData: username} to parent */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await editProfile(currentUser.username, formData);
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
  
      <Form style={
       { backgroundColor: 'black',
        color: 'rgba(255, 255, 255, 1)',
        opacity: '100%'}
      } 
      className='col-md-4 container'>

      <div className='title my-3'>
        <h3>Edit Profile</h3>
      </div>

        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input
          className="input"
            disabled
            id='username'
            name='username'
            value={currentUser.username}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
          className="input"
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
          className="input"
            id='lastName'
            type='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
          className="input"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          ></Input>
        </FormGroup>

        {flashMessage && flashMessage.map((message, index) => (
          <Alert color='danger' className='text-center ' key={index}>
            {message}
          </Alert>
        ))}

        <button onClick={handleSubmit}>Submit</button>
      </Form>

  );
}

export default ProfileForm;
