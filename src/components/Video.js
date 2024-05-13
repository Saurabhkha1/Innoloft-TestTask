import YouTube from "react-youtube";

export const Video = ({ videoUrl }) => {
  const opts = {
    width: "560",
    height: "315",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="border shadow-md mt-3">
        <p className="mt-2 p-3">Video</p>
        <div className="youtube-wrapper mt-3 ml-9">
          <YouTube videoId={videoUrl} opts={opts} className="p-5 ml-28" />
        </div>
      </div>
    </>
  );
};
