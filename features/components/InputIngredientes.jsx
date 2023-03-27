import React from "react";
import InputField from "./InputField";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const InputIngredientes = () => {
  // Utilizando useFormContext accedemos al método
  // resetField
  const { resetField } = useFormContext();

  const onReset = () => {
    // Al invocar al método resetField, le indicamos
    // el campo que deseamos reiniciar.
    resetField("ingredientes");
  };
  return (
    <div>
      <label>Ingredientes:</label>
      <div className="ingredientesDiv">
        <InputField hideLabel name="ingredientes" type="text" />
        <button type="button" className="removeButton">
          {/* Agregamos el callback para el evento onClick */}
          <Image src={logo} alt="tacho-basura" onClick={onReset} />
        </button>
      </div>
      <br />
      <button type="button">Agregar Ingrediente</button>
    </div>
  );
};

export default InputIngredientes;
