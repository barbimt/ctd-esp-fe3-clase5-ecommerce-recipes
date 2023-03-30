import React from "react";
import InputField from "./InputField";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useFieldArray, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const InputIngredientes = () => {
  // Utilizando el Hook useFormContext,
  // accedemos al campo "errors" dentro del
  // estado del formulario.
  const {
    formState: { errors },
  } = useFormContext();

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

  console.log(errors.ingredientes);
  /* {
message: 'Debes ingresar al menos dos ingredientes',
type: 'min',
ref: undefined
}
*/

  console.log(errors.ingredientes);
  /* {
[empty, {…}]
Si abrimos el objeto que se encuentra en la segunda
posición, veremos lo siguiente:
{
value: {
message: "Debes ingresar el ingrediente",
ref: input#ingredientes.1.value,
type: "required",
},
}
*/

  return (
    <div className="inputContainer">
      <label>Ingredientes:</label>
      {fields.map((field, index) => (
        <>
          <div className="ingredientesDiv" key={field.id}>
            <InputField
              hideLabel
              type="text"
              name={`ingredientes.${index}.value`}
            />
            <button type="button" className="removeButton">
              <Image
                src={logo}
                alt="tacho-basura"
                onClick={() => eliminarIngrediente(index)}
              />
            </button>
          </div>
          {/* Para cada ingrediente, validamos si existe un
mensaje de error y, en su caso, lo renderizamos.
Para ello, utilizamos el índice de cada elemento.
*/}
          {errors?.ingredientes?.[index] && (
            <small className="errMsg">
              {errors?.ingredientes[index].value.message}
            </small>
          )}
        </>
      ))}
      <br />
      <button type="button" onClick={agregarIngrediente}>
        Agregar Ingrediente
      </button>
      <br />
      {/* Validamos si existe un error general dentro del campo
"ingredientes" y, en su caso, renderizamos el mensaje */}
      {errors?.ingredientes?.message && (
        <small className="errMsg">{errors?.ingredientes.message}</small>
      )}
    </div>
  );
};

export default InputIngredientes;
