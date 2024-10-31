import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
//   console.log(book);
  const {
    author,
    bookId,
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
  return (
    <Link to={`books/${bookId}`}>
      <div className="card border-2 rounded-xl p-6 space-y-5 ">
        <figure className="bg-slate-100 py-8 px-24 rounded-xl">
          <img className="h-40 w-full rounded-lg" src={image} alt={bookName} />
        </figure>
        <div className="card-bod space-y-5">
          <div className="card-actions text-[#23BE0A]">
            <div className="badge badge-outline">{tags[0]}</div>
            <div className="badge badge-outline">{tags[1]}</div>
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-t-4 border-dashed border-[#1313113]"></div>

          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="flex items-center gap-3">
              {rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
