import React from "react";
import InputField from "./InputField";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useFieldArray, useFormContext } from "react-hook-form";

const InputIngredientes = () => {
  // Inicializamos el Hook y obtenemos la propiedad "fields", la cual
  // contendrá un array con nuestros campos
  const { fields } = useFieldArray({
    name: "ingredientes",
  });
  console.log(fields); // [] => ya que inicialmente no tenemos ningún elemento;
  // Nos ocuparemos de esto más adelante
  const agregarIngrediente = () => {};
  // Nos ocuparemos de esto más adelante
  const eliminarIngrediente = (id) => {};

  return (
    <div className="inputContainer">
      <label>Ingredientes:</label>
      {/* Hacemos un map del array que se encuentra almacenado en
la propiedad "fields" y por cada uno renderizamos el input
junto con el botón para eliminarlo
*/}
      {fields.map((field, index) => (
        // Agregamos la key utilizando el ID de cada field que es
        // asignado por la librería
        <div className="ingredientesDiv" key={field.id}>
          {/* Asignamos dinámicamente el nombre utilizando el mismo
valor que empleamos como property del Hook, más el índice
y la propiedad "value" que tiene cada elemento
*/}
          <InputField
            hideLabel
            type="text"
            name={`ingredientes.${index}.value`}
          />
          <button type="button" className="removeButton">
            <Image
              src={logo}
              alt="tacho-basura"
              onClick={eliminarIngrediente}
            />
          </button>
        </div>
      ))}
      <br />
      <button type="button" onClick={agregarIngrediente}>
        Agregar Ingrediente
      </button>
    </div>
  );
};

export default InputIngredientes;
