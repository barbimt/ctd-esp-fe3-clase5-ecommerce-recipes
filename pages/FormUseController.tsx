import { TextField } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

export type FormValues = {
  FirstName: string;
  LastName: string;
};

const TextFieldWrapper = ({
  control,
  name,
  defaultValue,
  rules,
}: UseControllerProps<FormValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    rules,
  });
  return <TextField {...field} />;
};
export default TextFieldWrapper;
