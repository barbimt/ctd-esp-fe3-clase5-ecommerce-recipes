import { useFormContext } from "react-hook-form";

const ResetButton = () => {
  /* Creamos el botón y accedemos al método
  "reset" utilizando el Hook useFormContext
  que vimos anteriormente */
  const { reset } = useFormContext();

  return (
    <button
      type="submit"
      // Reaccionamos al evento onClick
      // invocando el método "reset"
      onClick={() => {
        reset();
      }}
    >
      Limpiar Formulario
    </button>
  );
};

export default ResetButton;
