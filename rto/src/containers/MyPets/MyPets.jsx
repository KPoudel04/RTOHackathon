import React from "react";
import { useState } from "react";
import PetsForm from "./AddPet/PetsForm";
import PetsList from "./PetsList/PetsList";

const MyPets = () => {
  const [newPet, setNewPet] = useState({
    owner: "",
    name: "",
    sex: "",
    species: "",
    weight: "",
    height: "",
    color: "",
    breed: "",
    allergies: "",
    other: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefaul();
  };

  const btnClicked = () => {
    return (
      <PetsForm
        newPet={newPet}
        setNewPet={setNewPet}
        handleSubmit={handleSubmit}
      />
    );
  };

  return (
    <div>
      <PetsList onClick={btnClicked} newPet={newPet} />
    </div>
  );
};

export default MyPets;
