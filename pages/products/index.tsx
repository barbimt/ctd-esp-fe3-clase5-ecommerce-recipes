import { GetServerSideProps, NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import BookCard from '../../features/Book/BookCard'
import styles from "../../styles/Products.module.css"
import { Book } from '../../types/Book'
import { Books } from '../../types/Books'


interface Props {
  books: Book[]
}

const Products: NextPage<Props> = ({books}) => {
  

  return (
    <main>
      <h3 style={{textAlign: "center", margin:"30px"}}>Stock available: {books.length}</h3>
      {
        books?.map((book: Book) => (
          <BookCard key={book.id} data={book}/> 
        ))

      }
        {/* //Stock
        <BookCard/>  */}
    </main>

  )
}

//Tienen predefinido styles.booksGrid para los libros 


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products")
  const data: Book[] = await res.json();

  return {
    props: {
      books: data
    }
  }
}

export default Products