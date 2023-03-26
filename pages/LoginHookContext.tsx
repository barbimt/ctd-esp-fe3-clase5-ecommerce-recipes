import React from "react";
import { FormProvider, useForm } from "react-hook-form";
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
        {/* Agregamos el provider, y le pasamos
los métodos obtenidos desde useForm*/}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* ¡Aquí ya no es necesario pasar los métodos a
cada input! */}
            <InputField name="nombre" type="text" />
            <InputIngredientes />
            <InputField name="pasos" type="textarea" />
            <button color="primary" type="submit">
              Enviar
            </button>
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default LoginHookContext;
