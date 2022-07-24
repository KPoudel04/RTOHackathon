import { React, useContext, useState } from "react";
import "./Profile.css";
import { Image } from "react-bootstrap";
import logo from "../Profile/logo192.png";
import Wrapper from "../../components/Wrapper/Wrapper";
import UserContext from '../../components/UserContext';
import Card from '../../components/Card/Card';

export default function Profile() {
  const user = useContext(UserContext)
  console.log({ user })
  const [formData, setformData] = useState(user);
  const [submitSuccess, setSubmitSuccess] = useState(null)

  if (user) {
    const {name, homeAddress = {}, phone1 = "", phone2 = ""} = formData;
    const {streetAddress = "", locality = "", state = "", country = ""} = homeAddress;
  
    const handleFormChange = (e) => {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      console.log({ formData })
    };

    const handleAddressChange = (e) => {
      setformData({
        ...formData,
        homeAddress: {
          ...homeAddress,
          [e.target.name]: e.target.value,
        }
      });
      console.log({ formData })
    };
  
  
    async function handleFormSubmit(e) {
      e.preventDefault();
      console.log("submit pressed");

      const result = await user.update(formData);
      console.log({ result });
      if (!result) {
        console.log("Failed to save user data, unknown error");
        setSubmitSuccess(false)
      } else if (!result.val) {
        console.log(`Error updating user data: ${result.status}`)
        setSubmitSuccess(false)
      } else {
        // user successfully registered and persisted
        console.log("successfully updated user data");
        setSubmitSuccess(true)
      }
      // TODO: display status message to UI
    };

    let submitMessage;
    if (submitSuccess) {
      submitMessage = <div class="success-message">Success! Information saved</div>
    } else if (submitSuccess === false) {
      submitMessage = <div class="error">There was a problem saving user information</div>
    } else {
      submitMessage = <></>
    }
  
    return (
      <Wrapper>
        <div class="body">
          <div class="form-container ">
            <div class="">
              <p>Owner Profile</p>
              <Image
                alt="profile card"
                src={logo}
                className="border border-primary"
              ></Image>
            </div>
  
            <form class="form-inline" onSubmit={handleFormSubmit}>
              {/* Uncomment the next line to show the success message */}
              {/* <div class="success-message">Success! Thank you for registering</div> */}
              <div class="g-5 row">
                <div class="col form-group">
                  <label>Full Name</label>
                  <input
                    id="full-name"
                    className="border-dark form-control"
                    type="text"
                    text={name}
                    placeholder={name}
                    name="name"
                    onChange={handleFormChange}
                  />
                </div>
  
                {/* Uncomment the next line to show the error message */}
                {/* <span id="first-name-error">Please enter a first name</span> */}
  
                {/* <div class=" col form-group">
                  <label>LastName</label>
                  <input
                    id="phone"
                    class="border-dark form-control"
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                  />
                </div> */}
              </div>
  
              <div class=" g-5 row">
                <div class="col form-group">
                  <label>Primary Phone</label>
                  <input
                    id="phone"
                    class="border-dark form-control"
                    type="tel"
                    placeholder={phone1 ?? "Phone"}
                    name="phone1"
                    text={phone1}
                    onChange={handleFormChange}
                  />
                </div>
  
                <div class=" col form-group">
                  <label>Secondary Phone</label>
                  <input
                    id="phone"
                    class="border-dark form-control"
                    type="tel"
                    placeholder={phone1 ?? "Phone"}
                    name="phone2"
                    text={phone2}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
  
              <div class="g-5 row">
                <div class=" col form-group">
                  <label>Street Address</label>
                  <input
                    id="address"
                    class="border-dark form-control"
                    type="text"
                    placeholder={streetAddress ?? "Ex: 123 Washington Way"}
                    name="streetAddress"
                    text={streetAddress}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
  
                <div class="col form-group">
                  <label>City</label>
                  <input
                    id="city"
                    class="border-dark form-control"
                    type="text"
                    placeholder={locality ?? "Ex: Boston"}
                    name="locality"
                    text={locality}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </div>
  
              <div class="g-5 row">
                <div class=" col form-group">
                  <label>State</label>
                  <input
                    id="state"
                    class="border-dark form-control"
                    type="text"
                    placeholder={state ?? "Ex: Massachussetts"}
                    name="state"
                    text={state}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
  
                <div class="col form-group">
                  <label>Country</label>
                  <input
                    id="country"
                    class="border-dark form-control"
                    type="text"
                    placeholder={country ?? "Ex: USA"}
                    name="country"
                    text={country}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </div>
  
              {/* Uncomment the next line to show the error message */}
              {/* <span id="last-name-error">Please enter a last name</span> */}
  
              {/* Uncomment the next line to show the error message */}
              {/* <span id="email-error">Please enter an email address</span> */}
              <button class="btn btn-success form-field" type="submit">
                Submit
              </button>
            </form>
            {submitMessage}
          </div>
        </div>
      </Wrapper>
    );
  } else {
    <Card>You must be logged in to view profile</Card>
  }
}