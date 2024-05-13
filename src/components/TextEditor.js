import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/slice/productSlice";

export const TextEditor = ({ onEditorStateChange, description }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="w-[40rem] border border-black">
        <Editor
          value={description.htmlValue}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          toolbar={{
            options: ["inline", "list", "textAlign", "link", "history"],

            inline: {
              options: ["bold", "italic"],
            },
          }}
          toolbarHidden={false}
          editorState={description.editorState}
          onEditorStateChange={onEditorStateChange}
          placeholder={"Start Writing Here..."}
        />
        <div className="flex flex-row justify-end  gap-2 mr-1">
          <button className=" text-black rounded p-2 ">Cancel</button>
          <button className=" bg-blue-500 text-white rounded p-2">Save</button>
        </div>
      </div>
    </>
  );
};
