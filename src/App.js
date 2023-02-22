import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import style from "./app.module.css";
import image from "./image/image.png";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div className={style.main}>
      <Image className={style.banner} src={image} alt="banner" />
      <div className={style.container}>
        <Form
          action="https://awaq--catalyst1.sandbox.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
          method="POST"
        >
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Nombre del contacto</Form.Label>
                <Form.Control
                  id="name"
                  for="name"
                  maxlength="80"
                  name="name"
                  size="20"
                  type="text"
                  placeholder="ingresa un nombre"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Direccion de email</Form.Label>
                <Form.Control
                  maxlength="80"
                  name="email"
                  size="20"
                  type="email"
                  placeholder="Ingrese un email"
                />
              </Form.Group>
            </Col>
          </Row>
          <input type="hidden" name="orgid" value="00D3M0000008p4r" />

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Categoria</Form.Label>
                <Form.Select name="type" aria-label="Default select example">
                  <option value="General Inquires">General Inquires</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Sponsorship-Partnership">
                    Sponsorship-Partnership
                  </option>
                  <option value="Administration">Administration</option>
                  <option value="Legal">Legal</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  for="phone"
                  maxlength="80"
                  id="phone"
                  name="phone"
                  size="20"
                  type="text"
                  placeholder="ingresa un #"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Asunto</Form.Label>
            <Form.Control
              for="phone"
              maxlength="80"
              id="subject"
              name="subject"
              size="20"
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control name="description" as="textarea" rows={3} />
          </Form.Group>

          <input type="hidden" id="external" name="external" value="1" />
          <br />
          <div>
            <Button variant="primary" type="submit" className={style.but}>
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
