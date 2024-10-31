import bannerImage from '../../assets/books.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 lg:px-28 lg:py-20 w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img 
          src={bannerImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold">Books to freshen up your bookshelf</h1>
         
          <button className="btn bg-[#23BE0A] text-white font-bold text-lg mt-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
