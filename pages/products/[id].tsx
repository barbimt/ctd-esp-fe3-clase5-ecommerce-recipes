import { GetStaticPaths, GetStaticProps, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";
//import Boosk from "../../features/Book/BookCard";
import BookInfo from "../../features/Book/BookInfo";

type Book = { name: string; id: string; image: string };

interface Props {
  book: Book;
}

const Product: FC<Props> = ({ book }) => {
  const router = useRouter();
  const handleBought = async () => {
    await fetch(`http://localhost:3000/api/products/${book.id}`, {
      method: "DELETE",
    });
    alert("Thanks for buying!");
    router.push("/products");
  };

  return <BookInfo book={book} handleBought={handleBought} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //const { id } = params
  const res = await fetch(`http://localhost:3000/api/products/${params?.id}`);
  const data = await res.json();

  return {
    props: {
      // id,
      book: data,
    },
  };

  //...
};
// }
// export const getServerSideProps: GetServerSideProps =async ({params}) => {
//     const res = await fetch(`http://localhost:3000/api/products/${params?.id}`)
//     //...
// }

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data: Book[] = await res.json();
  const paths = data.map((book) => {
    return { params: { id: book.id } };
  });

  return {
    paths,
    fallback: false,
  };
};
export default Product;
