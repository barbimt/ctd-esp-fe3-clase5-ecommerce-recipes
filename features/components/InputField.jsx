import React from "react";
import { useFormContext } from "react-hook-form";

const InputField = (props) => {
  // Mediante el uso del contexto,
  // accedemos al campo "errors" que se encuentra
  // dentro del estado del formulario.
  const { name, hideLabel, type } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="inputContainer">
      <div>
        {!hideLabel && (
          <label className="label" htmlFor={name}>
            {name}
          </label>
        )}
        {type === "textarea" ? (
          <textarea
            id={name}
            invalid={!!errors?.[props.name]}
            {...register(name)}
          />
        ) : (
          <input
            type={type}
            id={name}
            invalid={!!errors?.[props.name]}
            {...register(name)}
          />
        )}
        {/* En caso de que exista un error para el campo,
se renderiza el mensaje en la pantalla
*/}
        {errors?.[props.name]?.message && (
          <small className="errMsg">{errors?.[props.name].message}</small>
        )}
      </div>
    </div>
  );
};

export default InputField;
