import React, { Component } from 'react';
import './Contact.css';
import HeadForm from  './BannerContact.js';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      message: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        Nom: ${this.state.firstName}
        Prénom: ${this.state.lastName}
        Email: ${this.state.email}
        Message: ${this.state.message}
      `);
    } else {
      console.error("invalid form");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Nom invalide" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Prénom invalide" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Email invalide";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="contactContent">
        <HeadForm></HeadForm>
        <div className="contactForm">
          <h1>Contactez nous !</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Nom:</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Nom"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Prénom: </label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Prénom"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="message">
              <label htmlFor="message">Message:</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Message"
                type="textarea"
                name="message"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
           
           
              <button type="submit">Envoyer</button>
          
          </form>
        </div>
      </div>
    );
  }
}

export default Form;