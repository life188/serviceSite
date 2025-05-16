function Home() {
  return (
    <div className="flex justify-center py-20 bg-pink-50">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl px-4">
        <img
          src="/animatedpicture.jpg"
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
            University of Ottawa with hands-on experience in full-stack
            development and a strong passion for building scalable, user-centric
            applications. I'm proficient in modern tools like React, Docker, and
            AWS, and I'm always eager to learn, adapt, and make meaningful
            contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
