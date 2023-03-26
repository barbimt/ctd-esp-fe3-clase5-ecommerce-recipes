import React from "react";
import InputField from "./InputField";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const InputIngredientes = () => {
  // Utilizando useFormContext accedemos a los métodos
  // reset y getValues
  const { reset, getValues } = useFormContext();

  const onReset = () => {
    // El método getValues nos devuelve los
    // ultimos valores de cada input
    const currentValues = getValues();

    // Al invocar al método reset, le pasamos los valores
    // actuales y solo reseteamos el de ingredientes
    reset({ ...currentValues, ingredientes: "" });
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
