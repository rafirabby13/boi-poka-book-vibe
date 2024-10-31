import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../utility/addToDb.js";
import Book from "../Book/Book.jsx";

const ListedBooks = () => {
  const [reaList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((str) => parseInt(str));
    // console.log(storedReadListInt);

    const matchedReadList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    // console.log(reaList);

    setReadList(matchedReadList);
  }, []);

  const handleSort = (sortType) => {
    console.log(sortType);
    setSort(sortType);
    if (sortType == "Rating") {
      const sortedReadList = [...reaList].sort(function (a, b) {
        return a.rating - b.rating;
      });
      setReadList(sortedReadList);
    } else if (sortType == "Number Of Pages") {
      const sortedReadList = [...reaList].sort(function (a, b) {
        return a.totalPages - b.totalPages;
      });
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h3>Listed Books</h3>
      <div className="flex justify-center">
        <details className="dropdown ">
          <summary className="btn m-1 bg-[#23BE0A] text-xl text-white">
            {sort ? `sort by ${sort}` : "sort By"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a onClick={() => handleSort("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("Number Of Pages")}>
                Number Of Pages
              </a>
            </li>
            <li>
              <a>Publish Year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {reaList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reaList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">Books I Wish</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
