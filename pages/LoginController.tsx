import { Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export type FormValues = {
  email: string;

};

export default function LoginController() {
  const onSubmit = (data: FormValues) => console.log(data);

  const { handleSubmit, control, watch } = useForm<FormValues>();
  console.log(watch())

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
            <>
          <TextField {...field} label="Email Address" variant="outlined"    name="email"
        autoComplete="email" fullWidth />
          </>
        )}
      />
      {/* <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />

      <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button> */}
       <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button> 
    </form>
  );
}
