import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "./../assets/logo.svg";
import { Card } from "./Card";
import location from "./../assets/location.png";
import { Map } from "./Map";
import { getProduct } from "../redux/slice/productSlice";

export const Card3 = ({ street, house, zipCode, city, country }) => {
  const product = useSelector((state) => state.product.product);
  console.log(product, "product");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="mt-3 ml-1 border shadow-md p-2 h-[47rem]">
        <div className=" ml-3">
          <div>Offered By</div>
          <img src={logo} alt="logo" className="mt-3 w-36" />
          <div className="mt-4">
            <Card
              Image={product?.user?.profilePicture}
              firstName={product?.user?.firstName}
              lastName={product?.user?.lastName}
              CompanyName={product?.company?.name}
            />
          </div>
          <div className="mt-3">
            <span>
              <img src={location} alt="location_logo" />
            </span>
            <p>{`${street} ${house}`},</p>
            {`${zipCode} ${city},${country}`}
          </div>
          <div>
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};
