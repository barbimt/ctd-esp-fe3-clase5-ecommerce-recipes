import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { Books } from '../../types/Books'
import { Book } from '../../types/Book'

import BookCard from '../../features/Book/BookCard'

const API = "http://localhost:3000/api/products/offers"

interface Props {
  books: Book[]
}
const Offers: NextPage<Props> = ({books}) => {
  return (
    <>
    {
      books?.map((book: Book) => (
        <BookCard key={book.id} data={book}/> 
      ))

    }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(API)
  const data: Books = await res.json();

  return {
    props: {
      books: data
    }
  }
}

export default Offers