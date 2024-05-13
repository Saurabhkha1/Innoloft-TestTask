import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct, editProduct } from "../redux/slice/productSlice";
import { TextEditor } from "../components/TextEditor";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { Breadcumb } from "../components/Breadcumb";
import { EditButton } from "../components/EditButton";
import { Card2 } from "../components/Card2";
import { Card3 } from "../components/Card3";
import { Video } from "../components/Video";
import { ReactComponent as HorseLogo } from "../assets/horse.svg";
import { SaveButton } from "../components/SaveButton";
import techLogo from "./../assets/settingsTechnology.png";

import {
  EditorState,
  convertFromHTML,
  convertToRaw,
  ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";

export const Product = () => {
  const [toggleButton, setToggleButton] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);
  const [businessModelData, setBusinessModelData] = useState([]);

  const product = useSelector((state) => state.product.product);
  const [description, setDescription] = useState({
    htmlValue: " ",
    editorState: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(product.description ? product.description : "")
      )
    ),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const onchangeTechnologies = (val, id, index) => {
    console.log("value:", val.target.value);
    const list = [...product?.categories];
    list[index] = { ...list[index], name: val.target.value };
    setCategoriesData(list);
    console.log("list:", list);
  };

  const onchangeBusinessModel = (val, id, index) => {
    const list2 = [...product?.businessModels];
    list2[index] = { ...list2[index], name: val.target.value };
    setBusinessModelData(list2);
    console.log("list:", list2);
  };

  const submithandler = () => {
    let data = {
      categoriesData: categoriesData,
      businessModelData: businessModelData,
    };
    dispatch(editProduct(data));
  };

  const onEditorStateChange = (editorValue) => {
    setDescription((prev) => ({
      ...prev,
      htmlValue: draftToHtml(convertToRaw(editorValue?.getCurrentContent())),
      editorState: editorValue,
    }));
  };

  return (
    <>
      <div className="flex felx-row gap-10 ml-28 mt-4">
        <div className="flex flex-col">
          <div>
            <Card
              Image={product?.user?.profilePicture}
              firstName={product?.user?.firstName}
              lastName={product?.user?.lastName}
              CompanyName={product?.company?.name}
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
            <div className="" onClick={() => setToggleButton(!toggleButton)}>
              {toggleButton ? (
                <EditButton />
              ) : (
                <SaveButton onclick={submithandler} />
              )}
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Card2
                picture={product?.picture}
                Title={product?.name}
                Type={product.type?.name}
              />
              <TextEditor
                onEditorStateChange={onEditorStateChange}
                description={description}
              />
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
            <Video videoUrl={product?.video} />
          </div>
          <div className="">
            <div className="p-5 mt-9 border shadow-md">
              <p className="font-medium">Offer details</p>
              <div className="flex flex-row gap-7 w-[60rem] ">
                <div>
                  <div>
                    <img
                      src={techLogo}
                      alt="logo"
                      className="w-5 h-5 inline "
                    />
                    Technology
                    <div className="flex flex-row gap-2 text-sm mt-1">
                      {product?.categories?.map((item, index) => {
                        return (
                          <>
                            <div className=" p-2 border rounded-full bg-[#ddd]  text-sm mt-1">
                              {!toggleButton ? (
                                <input
                                  className="w-[9rem] rounded-full "
                                  type="text"
                                  defaultValue={item?.name}
                                  onChange={(e) =>
                                    onchangeTechnologies(e, item?.id, index)
                                  }
                                />
                              ) : (
                                <div className="">{item?.name}</div>
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    TRL
                    <div className="bg-[#ddd] p-2 border rounded-full   text-sm mt-1">
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
                      {product?.businessModels?.map((item, index) => {
                        return (
                          <>
                            <div className=" bg-[#ddd] p-2 border rounded-full w-[9rem] ">
                              {!toggleButton ? (
                                <input
                                  className="w-[8rem] rounded-full "
                                  type="text"
                                  defaultValue={item?.name}
                                  onChange={(e) =>
                                    onchangeBusinessModel(e, item?.id, index)
                                  }
                                />
                              ) : (
                                <div className="">{item?.name}</div>
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <div className="mt-2">
                      Costs
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
      </div>
    </>
  );
};
