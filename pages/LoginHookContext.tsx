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
  // Accedemos al método "watch", y le indicamos que deseamos
  // observar el input de "pasos" (propiedad name de dicho input)
  const pasos = methods.watch("pasos", "");
  // Como queremos que la persona escriba al menos 10
  // caracteres, tomamos el valor que nos devuelve
  // watch y verificamos que su extensión cumpla
  // dicha condición
  const disabled = pasos.length < 10;
  // . . .
  const onSubmit = (data: any) => {
    console.log(data);
    
  }
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
            {/* Mediante la propiedad "disabled", habilitamos e
inhabilitamos nuestro botón */}
            <button type="submit" disabled={disabled}>
              Enviar
            </button>
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default LoginHookContext;
