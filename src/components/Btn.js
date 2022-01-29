import React from "react";
// reactstrap
import { Button } from "reactstrap";

const Btn = ({ btnText }) => {
  return (
    <Button color="light" className="text-primary">
      {btnText}
    </Button>
  );
};

export default Btn;
