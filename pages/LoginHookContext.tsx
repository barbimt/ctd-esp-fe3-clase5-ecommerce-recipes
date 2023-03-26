import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../features/components/Button";
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
  // Eliminamos el uso de watch.
  // Mantenemos el console.count para verificar
  // los renderizados
  console.count("renderizado del componente padre");
  // . . .
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
            <InputField name="nombre" type="text" />
            <InputIngredientes />
            <InputField name="pasos" type="textarea" />
            {/* Utilizamos el componente Button */}
            <Button />
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default LoginHookContext;
