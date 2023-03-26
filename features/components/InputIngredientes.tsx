import React from "react";
import InputField from "./InputField";
import logo from "../../public/logo.png";
import Image from "next/image";

const InputIngredientes = (props: any) => {
  return (
    <div>
      <label>Ingredientes:</label>
      <div className="ingredientesDiv">
        {/* En este caso, nos limitamos a pasar las props
tal cual las recibimos */}
        <InputField hideLabel name="ingredientes" type="text" {...props} />
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
