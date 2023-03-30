import React from "react";
import { useWatch } from "react-hook-form";

const SubmitButton = () => {
  // Observamos todos los inputs mediante useWatch.
  const inputs = useWatch();
  // Seguimos la cantidad de renders de este componente
  //console.count("renderizado del componente <Button/>");
  // Realizamos la misma validación
  const disabled = Object.keys(inputs).some((key) => inputs[key].length < 10);
  return (
    <button type="submit" >
      Enviar
    </button>
  );
};

export default SubmitButton;
