const Home = ({ immage }) => {
  return (
    <div className="flex justify-center py-20 bg-pink-50">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl px-4">
        <img
          src={immage}
          className="w-55 h-55 rounded-full"
          alt="Ali Alnader"
        />
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-800 mb-1">I'm Ali Alnader</p>
          <h1 className="text-5xl font-bold text-blue-600">
            Software Developer
          </h1>
          <p className="mt-4 text-gray-900 text-lg">
            I am currently a third-year Software Engineering student at the
            University of Ottawa with experience in full-stack development as
            well as Product Managment. I love building scalable, applications in
            my free time such as SpendSmart as well as my Weather App. I have
            worked modern tools like React, Docker, and AWS, and I'm always
            eager to learn, adapt, and make meaningful contributions. I am
            currently taking a UI design course, where I’m learning about design
            elements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
