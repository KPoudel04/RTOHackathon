import React from "react";
import { useState } from "react";
import PetsForm from "./AddPet/PetsForm";
import PetsList from "./PetsList/PetsList";

const MyPets = () => {
  const [addingPet, setAddingPet] = useState(false);

  const btnClicked = () => {
    setAddingPet(!addingPet);
  };

  if (addingPet) {
    // console.log("Show pets form")
    return (
      <>
        <PetsForm onSuccess={btnClicked}/>
      </>
    );
  } else {
    // console.log("Show pets list")
    return (
      <>
        <PetsList onClick={btnClicked}  />
      </>
    )
  }
};

export default MyPets;
