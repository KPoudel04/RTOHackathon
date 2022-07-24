import React from "react";
import { Button, Card } from "react-bootstrap";
import Wrapper from "../../../components/Wrapper/Wrapper";
import MyPets from "../AddPet/PetsForm";
import "/PetsList.css";
import Pet from "../Pet/Pet";

function PetsList(props) {
  const [pets, setPets] = useState([]);

  const btnClickHandler = () => {
    props.onClick();
  };

  return (
    <Wrapper>
      <Card class="container">
        {pets.map((pet) => (
          <Pet />
        ))}
      </Card>
      <Button onClick={btnClickHandler}>Add New Pet</Button>
    </Wrapper>
  );
}

export default PetsList;
