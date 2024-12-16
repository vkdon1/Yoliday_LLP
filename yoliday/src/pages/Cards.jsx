const Cards = ({ title, description, author, image, onAddToCart }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between hover:shadow-lg transition-shadow duration-200 mb-6">
      <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 md:h-auto rounded-md"
        />
      </div>
      <div className="flex-1 pl-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <span className="text-orange-500 text-sm">By {author}</span>
      </div>
      {onAddToCart && (
        <div className="mt-4">
          <button
            onClick={() => onAddToCart({ title, description, author, image })}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
