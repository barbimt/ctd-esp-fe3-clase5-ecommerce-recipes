import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../features/components/InputField";
import InputIngredientes from "../features/components/InputIngredientes";

const LoginHookContext = () => {
  // Obtenemos los métodos utilizando el Hook
  // useForm que ya conocemos.
  const methods = useForm({
    mode: "all",
    defaultValues: {
      nombre: "",
      ingredientes: "",
      pasos: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <main>
      <h2>Nueva Receta: Using Hook Context </h2>
      <div className="mainBody">
        {/* Agregamos el método onSubmit */}
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* Por cada vez que usamos el componente InputField,
pasamos los métodos como props */}
          <InputField name="nombre" type="text" {...methods} />
          <InputIngredientes {...methods} />
          <InputField name="pasos" type="textarea" {...methods} />
          <button color="primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginHookContext;
