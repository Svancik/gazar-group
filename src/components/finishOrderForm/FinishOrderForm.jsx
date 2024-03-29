import React, { Component } from "react";
import Joi from "joi-browser";
import CheckIcon from "@mui/icons-material/Check";
import "./finishOrderForm.scss";
import { resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

export default class FinishOrderForm extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      zip: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.number().integer().min(100000000).required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
    zip: Joi.string().required(),
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null; //error není

    const errors = {};
    for (let error of result.error.details) {
      const key = error.path[0];
      const value = error.message;
      errors[key] = value;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return; //neprovedeme submit
    window.location = "/products?orderFinished";
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    return (
      <div className="finishOrderFormWrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row" id="myform">
            <div class="form-group">
              <label for="inputPassword4" className="label">
                Křestní jméno
              </label>
              <input
                type="text"
                class="form-control"
                className="nameInput"
                id="firstName"
                name="firstName"
                value={this.state.data.firstName}
                onChange={this.handleChange}
              />
              {this.state.errors.firstName && (
                <div className="alert alert-danger">Vyplňte jméno</div>
              )}
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4" className="label">
                Příjmení
              </label>
              <input
                type="text"
                class="form-control"
                className="nameInput2"
                id="lastName"
                name="lastName"
                value={this.state.data.lastName}
                onChange={this.handleChange}
              />
              {this.state.errors.lastName && (
                <div className="alert alert-danger">Vyplňte příjmení</div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="emailAddress" className="label">
                Emailová adresa
              </label>
              <input
                type="email"
                id="emailAddress"
                name="email"
                placeholder="@"
                className="form-control"
                value={this.state.data.email}
                onChange={this.handleChange}
              />
              {this.state.errors.email && (
                <div className="alert alert-danger">Vyplňte správně email</div>
              )}
            </div>
            <div class="form-group col-md-4">
              <label for="phonenumber" className="label">
                Telefonní číslo (+420){" "}
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phone"
                placeholder=""
                className="form-control"
                value={this.state.data.phone}
                onChange={this.handleChange}
              />
              {this.state.errors.phone && (
                <div className="alert alert-danger">
                  Vyplňte správně tel. číslo
                </div>
              )}
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">Město</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                name="city"
                value={this.state.data.city}
                onChange={this.handleChange}
              />
              {this.state.errors.city && (
                <div className="alert alert-danger">Vyplňte město</div>
              )}
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress2" className="label">
                Adresa bydliště
              </label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="inputAddress2"
                value={this.state.data.address}
                onChange={this.handleChange}
              />
              {this.state.errors.address && (
                <div className="alert alert-danger">
                  Vyplňte adresu bydliště
                </div>
              )}
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">PSČ</label>
              <input
                type="text"
                class="form-control"
                name="zip"
                id="zip"
                s
                value={this.state.data.zip}
                onChange={this.handleChange}
              />
              {this.state.errors.zip && (
                <div className="alert alert-danger">Vyplňte</div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="comment">Komentář (nepovinné)</label>
              <textarea
                className="textarea-container"
                name=""
                id="comment"
                rows="5"
                cols="200"
              ></textarea>
            </div>
          </div>

          <button className="finishOrder" type="submit">
            <CheckIcon className="checkIcon" />{" "}
            <span> Odeslat požadavek na cenovou nabídku</span>
          </button>
        </form>
      </div>
    );
  }
}
