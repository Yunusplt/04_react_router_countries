import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from 'react-router-dom';

const CardCountry = ({country}) => {
  const myNavigate = useNavigate()
  return (
    <Card
      className="btn"
      role="button"
      style={{ height: "280px", maxWidth: "350px" }}
      onClick={()=>myNavigate(`/detail/${country.name.common}`)}
    >
      <Card.Img
        variant="top"
        src={country.flags.png}
        alt="flag"
        className="h-100 object-fit-cover"
        style={{ maxHeight: "200px" }}
      />
      <Card.Footer
        className="fs-5 fw-bold overflow-hidden d-flex align-items-center justify-content-center text-center"
        style={{ height: "80px" }}
      >
        <small>{country.name.official}</small>
      </Card.Footer>
    </Card>
  );
}

export default CardCountry