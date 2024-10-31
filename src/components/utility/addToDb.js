import { json } from "react-router-dom";
import { toast } from "react-toastify";

const getStoredReadList = () => {
    // read-list

    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    return []
    

};




const addToStoreReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast('Already Exists')
  }
  else{
    storedList.push(id)
    localStorage.setItem('read-list',JSON.stringify(storedList))
  }
};


export {addToStoreReadList, getStoredReadList}
