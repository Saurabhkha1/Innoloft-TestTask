import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Chat } from "./../assets/chat.svg";
import { ReactComponent as Notification } from "./../assets/notification.svg";
import { ReactComponent as ArrowDown } from "./../assets/arrowDwon.svg";
import { getProduct } from "../redux/slice/productSlice";

export const Headerleft = () => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row items-center gap-1.5 ">
        <div>
          <Chat className="w-7 h-7" />
        </div>
        <div className="">
          <button>
            EN
            <ArrowDown className="w-5 h-5 inline ml-0.5" />
          </button>
        </div>
        <div>
          <Notification className="w-7 h-7" />
        </div>
        <div className="">
          <img
            class="w-7 h-7 rounded-full inline"
            src={product?.user?.profilePicture}
            alt=""
          />
          <ArrowDown className="w-5 h-5ml-0.5 inline" />
        </div>
      </div>
    </>
  );
};
