import React from "react";
import "./MyPets.css";
import { Image } from "react-bootstrap";
import logo from "../MyPets/logo192.png";
import Wrapper from "../../components/Wrapper/Wrapper";

export default function MyPets() {
  return (
    <Wrapper>
      <div class="body">
        <div class="form-container ">
          <div class="">
            <p>Pets info</p>
            <Image
              alt="profile card"
              src={logo}
              className="border border-primary"
            ></Image>
          </div>

          <form class="form-inline">
            {/* Uncomment the next line to show the success message */}
            {/* <div class="success-message">Success! Thank you for registering</div> */}
            <div class="g-5 row">
              <div class="col form-group">
                <label>OwnerName</label>
                <input
                  id="ownername"
                  class="border-dark form-control"
                  type="text"
                  placeholder="ownername"
                  name="Name"
                />
              </div>
            </div>
            <div class="g-5 row">
              <div class="col form-group">
                <label>PetName</label>
                <input
                  id="petname"
                  class="border-dark form-control"
                  type="text"
                  placeholder="petname"
                  name="Name"
                />
              </div>

              {/* Uncomment the next line to show the error message */}
              {/* <span id="pets-name-error">Please enter a name</span> */}

              <div class=" col form-group">
                <label>Species</label>
                <input
                  id="species"
                  class="border-dark form-control"
                  type="text"
                  placeholder="dog/cat/other"
                  name="Species"
                />
              </div>
            </div>

            <div class=" g-5 row">
              <div class="col form-group">
                <label>Weight</label>
                <input
                  id="weight"
                  class="border-dark form-control"
                  type="number"
                  placeholder="in lbs"
                  name="Weight"
                />
              </div>

              <div class=" col form-group">
                <label>Height</label>
                <input
                  id="height"
                  class="border-dark form-control"
                  type="number"
                  placeholder="in inches"
                  name="Height"
                />
              </div>
            </div>

            <div class="g-5 row">
              <div class=" col form-group">
                <label>Sex</label>
                <input
                  id="sex"
                  class="border-dark form-control"
                  type="text"
                  placeholder="sex"
                  name="Sex"
                />
              </div>

              <div class="col form-group">
                <label>Color</label>
                <input
                  id="color"
                  class="border-dark form-control"
                  type="text"
                  placeholder="color"
                  name="Color"
                />
              </div>
            </div>

            <div class="g-5 row">
              <div class=" col form-group">
                <label>Allergies</label>
                <input
                  id="allergies"
                  class="border-dark form-control"
                  type="text"
                  placeholder="allergies"
                  name="Allergies"
                />
              </div>
            </div>
            <div class="g-5 row">
              <div class="col form-group">
                <label>Description</label>
                <input
                  id="description"
                  class="border-dark form-control"
                  type="text"
                  placeholder="description"
                  name="Description"
                />
              </div>
            </div>
          

            <button class="btn btn-success form-field" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
