
import React, {useState, useContext} from "react";
import "./PetsForm.css";
import { Image } from "react-bootstrap";
import logo from "../pets.png";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Card from '../../../components/Card/Card';
import UserContext from '../../../components/UserContext';
import { Pet } from '../../../backend/Pet';


export default function PetsForm({onSuccess}) {
  const user = useContext(UserContext)
  const [formData, setformData] = useState({
    owner: user,
    name: "",
    sex: "",
    species: "",
    weight: "",
    height: "",
    color: "",
    breed: "", 
    allergyString: "",
    other: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(null)

  if (user) {
    const {name, sex, species, weight, height, color, breed, allergyString, other} = formData;
  
    const handleFormChange = (e) => {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      console.log({ formData })
    };
  
  
    async function handleFormSubmit(e) {
      e.preventDefault();
      console.log("submit pressed");

      function parseAllergies() {
        const separatorRegex = /[\s]*,[\s]*/
        let allergies = allergyString.split(separatorRegex)
        allergies = allergies.filter((a) => a !== "")
        return allergies.length > 0 ? allergies : undefined;
      }

      const newPet = new Pet(user, name, sex, species, weight,
        height, color, breed, parseAllergies(), other)

      const result = await newPet.persist()
      console.log({ result });
      if (!result) {
        console.log("Failed to save pet data, unknown error");
        setSubmitSuccess(false)
      } else if (!result.val) {
        console.log(`Error saving pet data: ${result.status}`)
        setSubmitSuccess(false)
      } else {
        // user successfully registered and persisted
        console.log("successfully added pet", name, "to user", user.uid, `(${user.name})`);
        setSubmitSuccess(true)
        onSuccess();
      }
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
              <p>Add a new pet!</p>
              <Image
                alt="profile card"
                src={logo}
                className="border border-primary"
              ></Image>
            </div>

            <form class="form-inline" onSubmit={handleFormSubmit}>
              {/* <div class="g-5 row">
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
              </div> */}
              <div class="g-5 row">
                <div class="col form-group">
                  <label>Pet's Name</label>
                  <input
                    id="petname"
                    class="border-dark form-control"
                    type="text"
                    placeholder="Pet's Name"
                    name="name"
                    text={name}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div class=" col form-group">
                  <label>Species</label>
                  <input
                    id="species"
                    class="border-dark form-control"
                    type="text"
                    placeholder="dog, cat, etc."
                    name="species"
                    text={species}
                    onChange={handleFormChange}
                    required
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
                    text={weight}
                    onChange={handleFormChange}
                    required
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
                    text={height}
                    onChange={handleFormChange}
                    required
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
                    placeholder="'male' or 'female'"
                    name="sex"
                    text={sex}
                    onChange={handleFormChange}
                    required
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
                    text={color}
                    onChange={handleFormChange}
                    required
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
                    placeholder="Ex: roses, milk, pollen (must be comma-separated)"
                    name="allergyString"
                    text={allergyString}
                    onChange={handleFormChange}
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
                    placeholder="Any other relevant information"
                    name="other"
                    text={other}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
            

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
    <Card>You must be logged in to view my pets</Card>
  }
}
