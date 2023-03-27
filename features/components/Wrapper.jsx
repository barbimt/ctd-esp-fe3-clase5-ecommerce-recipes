import { FormProvider } from "react-hook-form";


const WrapperForm = ({ children }) => {
  // Obtenemos los métodos del formulario mediante useForm
  const methods = useForm({
    mode: "all",
    defaultValues: {
      nombre: "",
    },
  });
  // Envolvemos los "hijos" del componente dentro del FormProvider
  return <FormProvider {...methods}>{children}</FormProvider>;
};
export default WrapperForm;