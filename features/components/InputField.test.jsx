import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormContext } from "react-hook-form";
import InputField from "./InputField";
import WrapperForm from "./Wrapper";


describe("InputField", () => {
  it("should render input with label", () => {
    // Renderizamos el input dentro del provider
    render(
      <WrapperForm>
        <InputField name="nombre" type="text" />)
      </WrapperForm>
    );

    // Intentamos acceder al label por su nombre y al input por su rol
    expect(screen.getByText("nombre")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render input without label", () => {
    // Renderizamos el input dentro del provider
    render(
      <WrapperForm>
        {/* Pasamos la prop hideLabel en true para que el
        componente no lo renderice */}
        <InputField name="nombre" type="text" hideLabel={true} />)
      </WrapperForm>
    );

    // Evaluamos que no aparezca el label, pero sí el input
    expect(screen.queryByText("nombre")).not.toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a textarea if the type is provided", () => {
    // Renderizamos el input dentro del provider
    render(
      <WrapperForm>
        {/* Pasamos la prop tyle con el valor "textarea" para que el
            componente lo renderice */}
        <InputField name="pasos" type="textarea" />)
      </WrapperForm>
    );
    // Intentamos acceder al label por su nombre y al textarea por su rol
    expect(screen.getByText("pasos")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should change value when typing on the input", async () => {
    // Renderizamos el input dentro del provider
    render(
      <WrapperForm>
        <InputField name="nombre" />)
      </WrapperForm>
    );
    // Simulamos el ingreso de un valor en el input
    await userEvent.type(
      screen.getByRole("textbox", { name: /nombre/i }),
      "Tarta de manzanas"
    );

    // Evaluamos que el valor del input se haya actualizado
    // conforme lo ingresado
    expect(screen.getByRole("textbox")).toHaveValue("Tarta de manzanas");
  });

  it("should submit the correct values", async () => {
    // Creamos una función "fake" para verificar que sea
    // invocada cuando se hace el submit del form
    const fakeOnSubmit = jest.fn();
    const Form = () => {
      // Nos conectamos al contexto y obtenemos el método
      // handle submit
      const { handleSubmit } = useFormContext();

      // Al hacer submit, llamamos a la función mock y le
      // pasamos los valores que se encuentran en el
      // estado del formulario.
      const onSubmit = (data) => fakeOnSubmit(data);

      return (
        // Agregamos el método al evento onSubmit,
        // junto a nuestro input y un botón para poder
        // simular el envío del form.
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField name="nombre" />
          <button type="submit">Enviar</button>;
        </form>
      );
    };

    // Renderizamos el Form debajo del Wrapper para que
    // pueda acceder al contexto
    render(
      <WrapperForm>
        <Form />)
      </WrapperForm>
    );

    // Simulamos el ingreso de un valor en el input
    await userEvent.type(
      screen.getByRole("textbox", { name: /nombre/i }),
      "Tarta de manzanas"
    );

    // Luego, enviamos el formulario mediante el botón
    userEvent.click(screen.getByRole("button"));

    // Como el método handleSubmit es asincrónico
    // debemos utilizar waitFor para esperar por nuestro
    // resultado
    await waitFor(() =>
      // Verificamos que nuestra función mock se
      // llame con el nombre y valor de nuestro input
      expect(fakeOnSubmit).toHaveBeenCalledWith({
        nombre: "Tarta de manzanas",
      })
    );
  });

});
