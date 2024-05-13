import { Link } from "react-router-dom";

export const EditButton = () => {
  return (
    <>
      <Link to="/product" className=" bg-blue-500 text-white rounded  p-2 ">
        Edit
      </Link>
    </>
  );
};
