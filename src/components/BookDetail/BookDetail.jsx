import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../utility/addToDb.js";
import { addToWishList } from "../utility/addToWishlist.js";

const BookDetail = () => {
  const [bookDetailData, setBookDetailData] = useState({});
  const { bookId } = useParams();
  const booksData = useLoaderData();

  const book = booksData.find((book) => book.bookId == bookId);
  const {
    author,

    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = () => {
    /**
     * understant what to store
     * where to store
     * array, list, collection
     * already ase na nai??
     */
    addToStoreReadList(bookId);
  };
  const handleToreWishList = () => {
    /**
     * understant what to store
     * where to store
     * array, list, collection
     * already ase na nai??
     */
    addToWishList(bookId);
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div
          className="bg-base-200 p-10 h-full
        "
        >
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p className="">
            Review: <span>{review}</span>
          </p>
          <p>
            Tag:
            <span>
              #{tags[0]} <span>#{tags[1]}</span>
            </span>
          </p>
          <div className="divider"></div>
          <div className="flex items-center gap-8">
            <div>
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div>
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>

          <div className="flex gap-5">
            <button onClick={handleMarkAsRead} className="btn btn-outline">
              Read
            </button>
            <button onClick={handleToreWishList} className="btn btn-accent text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
