import React from "react";

// export type InputFieldProps = {
//     hideLabel?: Boolean,
//     name: string,
//     type: string,
//     register:
// }
const InputField = (props: any) => {
  // Obtenemos las variables que necesitamos de las
  // props. En particular, obtenemos el método “register”
  // que proviene de useForm, el cual utilizaremos
  // para registrar el input con dicho Hook.
  const { name, hideLabel, type, register } = props;

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
