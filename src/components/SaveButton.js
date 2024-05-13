import { Link } from "react-router-dom";

export const SaveButton = ({ onclick }) => {
  return (
    <>
      <Link
        to="/product"
        className=" bg-blue-500 text-white rounded  p-2 "
        onClick={onclick}
      >
        Save
      </Link>
    </>
  );
};
