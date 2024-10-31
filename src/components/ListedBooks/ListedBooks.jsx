import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from "../utility/addToDb.js";
import Book from "../Book/Book.jsx";

const ListedBooks = () => {
    const [reaList, setReadList] = useState([])
    const allBooks = useLoaderData()
    useEffect(()=>{
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(str=> parseInt(str))
        // console.log(storedReadListInt);
       
            const matchedReadList = allBooks.filter(book=> storedReadListInt.includes(book.bookId))
            // console.log(reaList);
            setReadList(matchedReadList)
        
    },[])
  return (
    <div>
      <Tabs>
        <TabList >
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {reaList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            reaList.map(book=> <Book key={book.bookId} book={book}></Book>)
    
          }
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
