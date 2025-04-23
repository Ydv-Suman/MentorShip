import blogs from "../blogsDetails.json"
const Blogs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {blogs.map(({ id, title, author, image, link }) => (
        <div
          key={id}
          className="bg-white shadow-md rounded-lg text-center p-4"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="w-full h-40 object-cover rounded-md mb-4 cursor-pointer"
            />
          </a>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-sm text-gray-600">by {author}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
