const getWishlist=()=>{
    const wishList = JSON.parse(localStorage.getItem('wish-list'))
    if (wishList) {
        return wishList;
    }
    return []

}

const addToWishList =(id)=>{
    const wishListFromDb = getWishlist()

    if (wishListFromDb.includes(id)) {
        alert('id exists')
    }
    else{
        wishListFromDb.push(id)
        localStorage.setItem('wish-list', JSON.stringify(wishListFromDb))
    }
}

export {addToWishList}