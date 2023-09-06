import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CardCountry from './CardCountry';

const Home = () => {
    const [countries, setCountries] = useState([])
  const url = "https://restcountries.com/v3.1/all";

  const getData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("API'den veri alinamadi.");
      }

      const data = await response.json();
      setCountries(data)
      // API'den gelen veriyi kullan
    } catch (error) {
      console.error("Hata:", error);
    }
  };


  useEffect(() => {
    getData();
  }, []) 
console.log(countries);
  return (
    <Container className="my-4">
      <Row >
        {countries.map((country, index) => {
          return (
            <Col key={index} xl={3} lg={4} md={6} sm={12} className="g-4">
              <CardCountry country={country} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home