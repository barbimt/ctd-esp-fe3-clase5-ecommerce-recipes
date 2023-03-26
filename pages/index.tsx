import { Button } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import TextFieldWrapper, { FormValues } from "./FormUseController";

const Home: NextPage = () => {
  const { handleSubmit, control } =useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <><div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Explore the world library recipes</h1>
        <Link href="/products">
          <button className={styles.button}>EXPLORE</button>
        </Link>
      </div>
    
    </div>
   <h3>using useController hook </h3> 
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldWrapper
          control={control}
          name="FirstName"
          rules={{
            required: true,
          }}
        />
        <TextFieldWrapper
          control={control}
          name="LastName"
          rules={{
            required: true,
          }}
        />
         <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button> 
      </form>
    </>
    
  );
};

export default Home;
