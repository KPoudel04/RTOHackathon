import React from "react";
import "./Profile.css"
import {Image} from 'react-bootstrap';
import logo from "../Profile/logo192.png"

export default function Profile() {
  return (
    <div class="body">
        <div class="form-container ">
        <div class="">
            <p>Owner Profile</p>
            <Image alt ="profile card" src={logo} className = "border border-primary"></Image>
        </div>

        <form class="form-inline">
            {/* Uncomment the next line to show the success message */}
            {/* <div class="success-message">Success! Thank you for registering</div> */}
            <div class = "g-5 row">
                <div class= "col form-group" >
                    <label>FirstName</label>
                    <input
                    id="full-name"
                    class="border-dark form-control"
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    />
                </div>
            
                {/* Uncomment the next line to show the error message */}
                {/* <span id="first-name-error">Please enter a first name</span> */}

        
                <div class= " col form-group" >
                    <label>LastName</label>
                    <input
                    id="phone"
                    class="border-dark form-control"
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    />
                </div>
            </div>
            
            <div class = " g-5 row">
                <div class= "col form-group" >
                    <label>Phone</label>
                    <input
                    id="phone"
                    class="border-dark form-control"
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    />
                </div>

                <div class= " col form-group" >
                    <label>E-mail</label>
                    <input
                    id="phone"
                    class="border-dark form-control"
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    />
                </div>
            </div>

            <div class = "g-5 row">
                <div class= " col form-group" >
                    <label>Street Address</label>
                    <input
                    id="address"
                    class="border-dark form-control"
                    type="text"
                    placeholder="address"
                    name="address"
                    />
                </div>

                <div class= "col form-group" >
                    <label>City</label>
                    <input
                    id="city"
                    class="border-dark form-control"
                    type="text"
                    placeholder="city"
                    name="city"
                    />
                </div>
            </div>

            <div class = "g-5 row">
                <div class= " col form-group" >
                    <label>State</label>
                    <input
                    id="state"
                    class="border-dark form-control"
                    type="text"
                    placeholder="state"
                    name="state"
                    />
                </div>

                <div class= "col form-group" >
                    <label>Country</label>
                    <input
                    id="country"
                    class="border-dark form-control"
                    type="text"
                    placeholder="country"
                    name="country"
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
        </div>
    </div>
    
  );
}