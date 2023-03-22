import { Router, useRouter } from "next/router";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
interface IForm {
  name: string;
  image: string;
}

const Create = () => {
  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = async () => {
    //getValues para obtener todos los datos y hacer el post
    const values = getValues();

    await fetch("http://localhost:3000/api/products/create", {
      method: "POST",
      body: JSON.stringify(values),
    });
    router.push("/products");
  };
  const onError: SubmitErrorHandler<IForm> = () =>
    alert("Please, check    your info");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Name</label>
        <input type="text" {...register("name")} />
        <label>Image</label>
        <input type="text" {...register("image")} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Create;
