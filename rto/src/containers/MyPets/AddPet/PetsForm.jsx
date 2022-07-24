import React from "react";
import "./PetsForm.css";
import { Image } from "react-bootstrap";
import logo from "../MyPets/pets.png";
import Wrapper from "../../../components/Wrapper/Wrapper";

function PetsForm({ newPet, setNewPet, handleSubmit }) {
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

          <form class="form-inline" onSubmit={handleSubmit}>
            {/* Uncomment the next line to show the success message */}
            {/* <div class="success-message">Success! Thank you for registering</div> */}
            <div class="g-5 row">
              <div class="col form-group">
                <label>OwnerName</label>
                <input
                  id="ownername"
                  class="border-dark form-control"
                  type="text"
                  placeholder="Ownername"
                  name="owner"
                  value={newPet.owner}
                  onChange={(e) => setNewPet(e.target.value)}
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
                  name="name"
                  value={newPet.name}
                  onChange={(e) => setNewPet(e.target.value)}
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
                  name="species"
                  value={newPet.species}
                  onChange={(e) => setNewPet(e.target.value)}
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
                  name="weight"
                  value={newPet.weight}
                  onChange={(e) => setNewPet(e.target.value)}
                />
              </div>

              <div class=" col form-group">
                <label>Height</label>
                <input
                  id="height"
                  class="border-dark form-control"
                  type="number"
                  placeholder="in inches"
                  name="height"
                  value={newPet.height}
                  onChange={(e) => setNewPet(e.target.value)}
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
                  name="sex"
                  value={newPet.sex}
                  onChange={(e) => setNewPet(e.target.value)}
                />
              </div>

              <div class="col form-group">
                <label>Color</label>
                <input
                  id="color"
                  class="border-dark form-control"
                  type="text"
                  placeholder="color"
                  name="color"
                  value={newPet.color}
                  onChange={(e) => setNewPet(e.target.value)}
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
                  name="allergies"
                  value={newPet.allergies}
                  onChange={(e) => setNewPet(e.target.value)}
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
                  name="other"
                  value={newPet.other}
                  onChange={(e) => setNewPet(e.target.value)}
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

export default PetsForm;
