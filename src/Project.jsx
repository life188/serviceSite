const Project = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-rose-100 rounded-xl shadow-md p-6 max-w-1xl mx-auto mt-1">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-purple-500 mb-2">{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
