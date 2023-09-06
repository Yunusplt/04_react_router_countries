import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";

function BasicExample() {
  const [country, setCountry] = useState([]);
  const { namee } = useParams();
  const myNavigate = useNavigate()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${namee}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [namee]);

  console.log(country);

  return (
    <div>
      {country.map((item, index) => {
        return (
          <div style={{ margin: "0 auto" }}>
            <Card
              style={{
                width: "22rem",
                height: "15rem",
                maxHeight: "320px",
                maxWidth: "1000px",
                minHeight: "227px",
                minWidth: "350px",
                margin: "0 auto",
                overflow: "hidden",
              }}
              className="d-flex flex-row w-50 h-50 mt-5 border-3 p-2"
              key={index}
            >
              <Card.Img variant="top" src={item.flags.png} className="w-50 border rounded-2" />
              <Card.Body>
                <Card.Title className="border-bottom pb-2 text-center">
                  {item.name.common}
                </Card.Title>
                <Card.Text>
                  <table className="table">
                    <tr>
                      <th>Name of Country:</th>
                      <td className="fw-bold">{item.name.common}</td>
                    </tr>
                    <tr>
                      <th>Official Name:</th>
                      <td className="fw-bold">{item.name.official}</td>
                    </tr>
                    <tr>
                      <th>Region:</th>
                      <td className="fw-bold">{item.region}</td>
                    </tr>
                    <tr>
                      <th>Capital:</th>
                      <td className="fw-bold">{item.capital}</td>
                    </tr>
                    <tr>
                      <th>Population:</th>
                      <td className="fw-bold">{item.population}</td>
                    </tr>
                  </table>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="success"
                    className="btn-lg me-2 mt-1"
                    onClick={() => myNavigate(-1)}
                  >
                    Go Back
                  </Button>
                  <Button
                    variant="warning"
                    className="btn-lg mt-1"
                    onClick={() => myNavigate("/")}
                  >
                    Go Home
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default BasicExample;
