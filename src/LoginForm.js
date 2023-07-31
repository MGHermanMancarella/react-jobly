import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./forms.css";

/** Loads login form page
 *
 * Props:
 * - Login function
 *
 * Login -> LoginForm
 */

function LoginForm({ login }) {
  const navigate = useNavigate();

  const initialState = { username: "TestUser", password: "" };
  const [formData, setFormData] = useState(initialState);
  const [flashMessage, setFlashMessage] = useState(null);

  /** Send {formData: username} to parent
   *    & clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await login(formData);
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
    <Form className='col-md-4 mt-5 container'>
      <div className="text-center">
        <h3>Log in</h3>
      </div>
      <FormGroup>
        <Label htmlFor='username'>Username</Label>
        <Input
        className="input"
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
        ></Input>
      </FormGroup>

      <div>
        <Label htmlFor='password'>Password</Label>
        <Input
        className="input"
          id='password'
          type='password'
          name='password'
          placeholder='type "password"'
          value={formData.password}
          onChange={handleChange}
        ></Input>
      </div>

      {flashMessage && (
        <div>
          {flashMessage.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}

      <button onClick={handleSubmit}>Submit</button>
    </Form>
  );
}

export default LoginForm;
