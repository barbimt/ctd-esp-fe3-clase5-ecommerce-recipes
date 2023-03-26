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
 // Pasando un array como argumento, podemos observar varios elementos
const inputs = methods.watch(["nombre", "pasos", "ingredientes"]);

/* Observamos todos los inputs, sin tener que guardarlos en un array como el dearriba ->
const inputs = methods.watch();
A diferencia del caso anterior, ahora el método nos retornará un objeto con el nombre de cada
input como key junto a su valor
console.log(inputs); // {nombre: "", ingredientes: "", pasos: ""}
Tendremos que realizar una pequeña modificación en nuestra validación para adaptarlo a la
nueva estructura de los datos:
/ Obtenemos un array de las keys (nombres de los inputs), e iteramos sobre el mismo para realizar la validación
const disabled = Object.keys(inputs).some((key) => inputs[key].length < 10);
*/


  // Como queremos que la persona escriba al menos 10
  // caracteres, tomamos el valor que nos devuelve
  // watch y verificamos que su extensión cumpla
  // dicha condición
  // Basta con que uno de los inputs tenga una extensión
// menor de la deseada para inhabilitar el botón
const disabled = inputs.some((input) => input.length < 10);


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
