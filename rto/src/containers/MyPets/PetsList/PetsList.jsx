import { React, useContext, } from "react";
import { Button, Card } from "react-bootstrap";
import Wrapper from "../../../components/Wrapper/Wrapper";
import UserContext from '../../../components/UserContext';
import "./PetsList.css";
import Pet from "../Pet/Pet";
import {useCollectionData} from 'react-firebase-hooks/firestore'

function PetsList({onClick}) {
  const user = useContext(UserContext)

  const [pets, loading, error, snapshot] = useCollectionData(user.petsQuery);
  // documentation: https://github.com/CSFrequency/react-firebase-hooks/tree/master/firestore#usecollectiondata

  if (pets) {
    // pets loaded
    const btnClickHandler = () => {
      onClick();
    };
    return (
      <Wrapper>
        <Card class="container">
          {pets.map((pet) => (
            <Pet pet={pet} />
          ))}
        </Card>
        <Button onClick={btnClickHandler}>Add New Pet</Button>
      </Wrapper>
    );
    
  } else if (loading) {
    // pets loading
    return <>
      <Card>Pets are loading</Card>
    </>
  } else if (error) {
    // error loading pets from firestore
    return <>
      <Card>Error loading pets</Card>
    </>
  } else {
    console.log({pets})
    console.log({ snapshot })
    console.log(user.petsQuery)
    console.log(user)
    return <Card>Something went rlly wrong</Card>
  }
}

export default PetsList;
