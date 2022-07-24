import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

const petItem = ({pet}) => {
  return (
    <Card>
      <span>{pet.name}</span>
    </Card>
  );
};

export default petItem;
