import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import SubmitButton from "../features/components/SubmitButton";
import ResetButton from "../features/components/ResetButton";

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
  // Al montarse el componente,
  // utilizamos el método setFocus
  // para hacer foco en el primer input
  useEffect(() => {
    methods.setFocus("nombre");
  }, []);

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
         {/* Renombramos el botón de submit y agregamos
un nuevo botón de reset */}
<SubmitButton />
<ResetButton />
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default LoginHookContext;
