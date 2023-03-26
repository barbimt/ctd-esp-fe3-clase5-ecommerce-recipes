import React from "react";
import { useFormContext } from "react-hook-form";

// export type InputFieldProps = {
//     hideLabel?: Boolean,
//     name: string,
//     type: string,
//     register:
// }
const InputField = (props: any) => {
  // En este caso, dejamos de recibir "register" como
// una prop, pasando a obtenerla directamente
// del contexto.
const { name, hideLabel, type } = props;
const { register } = useFormContext()

  return (
    <div className="inputContainer">
      <div>
        {!hideLabel && (
          <label className="label" htmlFor={name}>
            {name}
          </label>
        )}
        {type === "textarea" ? (
          <textarea id={name} {...register(name)} />
        ) : (
          <input type={type} id={name} {...register(name)} />
        )}
      </div>
    </div>
  );
};

export default InputField;
