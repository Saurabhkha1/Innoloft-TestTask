import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { Breadcumb } from "../components/Breadcumb";
import { EditButton } from "../components/EditButton";
import { Card2 } from "../components/Card2";
import { Card3 } from "../components/Card3";
import { Video } from "../components/Video";
import image from "./../assets/image.png";
import techLogo from "./../assets/settingsTechnology.png";
import { getProduct } from "../redux/slice/productSlice";
import { ReactComponent as HorseLogo } from "../assets/horse.svg";
import { TextEditor } from "../components/TextEditor";

export const Main = () => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="flex felx-row gap-10 ml-28 mt-4">
        <div className="flex flex-col">
          <div>
            <Card
              Image={image}
              firstName={"Sven"}
              lastName={"Pietsch"}
              CompanyName={"innoloft GmbH"}
            />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>

        <div>
          <div className="flex flex-row justify-between">
            <div className="">
              <Breadcumb />
            </div>
            <div className="">
              <EditButton />
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Card2
                Title={"Intellegent Finite elements in Structural mechanics "}
                description={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At facilis,ab recusandae fuga placeat doloribus. Consequatur facere voluptate error sunt ducimus neque repellat ipsum enim ad omnis?  Est, possimus optio?! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque fuga consequatur atque, voluptatu assumenda id repellendus aspernatur nemo illum nihil vel nulla voluptates tempore inventore! Molestias provident odio obcaecati!"
                }
                picture={
                  "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                }
              />
              <TextEditor onEditorStateChange={""} description={""} />
            </div>
            <div>
              <Card3
                Image={product?.user?.profilePicture}
                firstName={product?.user?.firstName}
                lastName={product?.user?.lastName}
                CompanyName={product?.company?.name}
                logo={product?.company?.logo}
                street={product?.company?.address?.street}
                house={product?.company?.address?.house}
                zipCode={product?.company?.address?.zipCode}
                city={product?.company?.address?.city?.name}
                country={product?.company?.address?.country?.name}
              />
            </div>
          </div>

          <div className="">
            <Video videoUrl={"2g811Eo7K8U"} />
          </div>

          <div className="p-5 mt-9 border shadow-md">
            <p className="font-medium">Offer details</p>
            <div className="flex flex-row gap-7 w-[60rem] ">
              <div>
                <div>
                  <img src={techLogo} alt="logo" className="w-5 h-5 inline  " />

                  <p className="inline ml-0.5"> Technology </p>
                  <div className="flex flex-row gap-2 text-sm mt-1">
                    {product?.categories?.map((item, index) => {
                      return (
                        <>
                          <div className=" p-2 border rounded-full bg-[#ddd]  text-sm mt-1">
                            <div className="">{item?.name}</div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="mt-1"> TRL</p>
                  <div className="bg-[#ddd] p-2 border rounded-full text-sm mt-1">
                    {product?.trl?.name}
                  </div>
                </div>
              </div>

              <div>
                <div className="">
                  <div>
                    <HorseLogo className="inline p-1" />
                    <p className="inline p-1">Business Model</p>
                  </div>

                  <div className="flex flex-row gap-1 text-sm mt-1">
                    {product?.businessModels?.map((item) => {
                      return (
                        <>
                          <div className=" bg-[#ddd] p-2 border rounded-full w-[9rem] ">
                            {item?.name}
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="mt-3">
                    <p className="mt-1">Costs</p>
                    <div className=" bg-[#ddd] p-1 border rounded-full w-[6rem] ">
                      {product?.investmentEffort}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
