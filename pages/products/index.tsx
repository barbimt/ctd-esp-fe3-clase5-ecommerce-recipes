import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import BookCard from '../../features/Book/BookCard'
import styles from "../../styles/Products.module.css"


export type Book = {name: string, id: string, image: string}
export type Books = Book[]

const Products: NextPage = () => {
    const [books, setBooks] = useState<Books>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data: Book[] )=> setBooks(data))
    }, [books])
    

  return (
    <main>
        {/* //Stock
        <BookCard/>  */}
    </main>

  )
}

//Tienen predefinido styles.booksGrid para los libros 


export default Products