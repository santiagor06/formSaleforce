import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function App() {
  const [input, setInput] = useState({ orgid: "00DDn00000A9xuh", retURL: "" });
  return (
    <div>
      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToCase"
        method="POST"
      >
        <input name="orgid" value="00DDn00000A9xuh" />
        <input name="retURL" value="http://localhost:3000/" />

        <label for="name">Nombre del contacto</label>
        <input id="name" maxlength="80" name="name" size="20" type="text" />
        <br />

        <label for="email">Correo electrónico</label>
        <input id="email" maxlength="80" name="email" size="20" type="text" />
        <br />

        <label for="phone">Teléfono</label>
        <input id="phone" maxlength="40" name="phone" size="20" type="text" />
        <br />

        <label for="subject">Asunto</label>
        <input
          id="subject"
          maxlength="80"
          name="subject"
          size="20"
          type="text"
        />
        <br />

        <label for="description">Descripción</label>
        <textarea name="description"></textarea>
        <br />

        <input type="hidden" id="external" name="external" value="1" />
        <br />

        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default App;
