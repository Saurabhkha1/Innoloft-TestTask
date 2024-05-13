import GoogleMapReact from "google-map-react";

export const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <div className="w-[20rem] h-[10rem]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </>
  );
};
