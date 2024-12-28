const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white bg-gradient-to-t from-black w-screen aspect-video">
      <h1 className="text-6xl mb-4 font-bold">{title}</h1>
      <p className="w-1/4">{overview}</p>
      <div className="mt-3">
        <button className="bg-gray-100 mr-3 text-black py-2 px-8 rounded-md">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-8 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
