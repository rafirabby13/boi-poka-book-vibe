import React, { useEffect, useState } from 'react';
import Book from '../Book/Book.jsx';

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('./books.json')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data)
            // console.log(data);
        })
    },[])
    return (
        <div className='py-20'>
            <h1 className='font-bold text-4xl  text-center'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
            '>
                {
                    books.map(book=> <Book
                    key={book.bookId}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;