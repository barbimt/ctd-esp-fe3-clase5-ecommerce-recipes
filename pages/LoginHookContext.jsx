import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import SubmitButton from "../features/components/SubmitButton";
import ResetButton from "../features/components/ResetButton";

import InputField from "../features/components/InputField";
import InputIngredientes from "../features/components/InputIngredientes.jsx";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  nombre: yup.string().required("Debes ingresar un nombre para la receta"),
  pasos: yup
    .string()
    .min(20, "Los pasos deben contener al menos 20 caracteres"),
    // Para este campo, indicamos que estamos
// esperando un array y mediante el método
// "of" definimos el contenido del mismo.
ingredientes: yup
.array()
.of(
yup.object().shape({
// validamos que cada input tenga contenido
value: yup.string().required("Debes ingresar el ingrediente")
})
)
// Validamos que al menos se ingresen dos ingredientes
.min(2, "Debes ingresar al menos dos ingredientes")
});

const LoginHookContext = () => {
  // Creamos nuestro esquema de validación para los distintos
// campos del formulario. Dejaremos el campo "ingredientes"
// para más adelante.


  // Obtenemos los métodos utilizando el Hook useForm que ya conocemos.

  // Dentro del Hook useForm agregamos el yupResolver y le
  // pasamos el esquema que creamos.
  const methods = useForm({
    mode: "submit", // Mediante este parámetro, indicamos que
    // queremos hacer la validación al momento del submit únicamente.
    resolver: yupResolver(schema),
    defaultValues: {
      nombre: "",
      ingredientes: [{ value: "" }],
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
  const onSubmit = (data) => {
    console.log(data);
    // Luego de ejcutar nuestra lógica,
    // reseteamos el form
    methods.reset();
  };

  // Obtenemos este valor del estado del formulario
  const isSubmitSuccessful = methods.formState.isSubmitSuccessful;
  const reset = methods.reset;

  // Mediante useEffect, validamos cuando
  // el formulario se haya enviado correctamente
  // y lo reiniciamos
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
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
