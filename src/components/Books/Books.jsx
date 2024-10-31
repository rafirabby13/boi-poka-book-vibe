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
        <div>
            <h1 className='font-bold text-4xl  text-center'>Books</h1>
            <div>
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