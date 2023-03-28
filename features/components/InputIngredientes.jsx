import React from "react";
import InputField from "./InputField";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useFieldArray, useFormContext } from "react-hook-form";

const InputIngredientes = () => {
  // Obtenemos el método append para poder utilizarlo
  // más adelante
  const { fields, append, remove } = useFieldArray({
    name: "ingredientes",
  });
  console.log(fields); // [] => ya que inicialmente no tenemos ningún elemento;
  // Invocamos el método append y le
  // pasamos un nuevo elemento con un valor vacío
  const agregarIngrediente = () => {
    append({ value: "" });
  };
  // Invocamos el método remove y le pasamos la posición
  // del elemento a remover
  const eliminarIngrediente = (index) => {
    remove(index);
  };

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
              // Asignamos el callback y le pasamos el index de cada elemento
              onClick={()=> eliminarIngrediente(index)}
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
