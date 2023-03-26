import React from "react";
import InputField from "./InputField";
import logo from "../../public/logo.png";
import Image from "next/image";

const InputIngredientes = () => {
  return (
    <div>
      <label>Ingredientes:</label>
      <div className="ingredientesDiv">
        {/* En este caso, ya no necesitamos recibir y pasar las
props al componente <InputField/>*/}
        <InputField hideLabel name="ingredientes" type="text" />
        <button type="button" className="removeButton">
          <Image src={logo} alt="tacho-basura" />
        </button>
      </div>
      <br />
      <button type="button">Agregar Ingrediente</button>
    </div>
  );
};

export default InputIngredientes;
