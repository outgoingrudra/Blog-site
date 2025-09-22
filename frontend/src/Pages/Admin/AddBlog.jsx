import React, { useEffect, useRef, useState } from "react";
import assets, { blogCategories } from "../../assets/assets";
import Quill from "quill";
import Theme from "quill/core/theme";

export default function AddBlog() {

  const editorRef = useRef(null)
  const quillRef = useRef(null)
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setcategory] = useState("startup");
  const [isPublished, setisPublished] = useState(false);

  const onSubmitHandler = (e) => {
    e.prevantDefault();
  };

  const generateContent = async () => {};
  

  useEffect(()=>{
    if(!quillRef.current  && editorRef.current){
      quillRef.current = new  Quill(editorRef.current,{theme:'snow'})
    }
  },[])

  return (
    <form
      onSubmit={onSubmitHandler}
      action=""
      className="flex-1 bg-blue-50/50  text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded ">
        <p className="">Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className=""
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type here..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="
            w-full max-w-lg mt-2 p-2  border border-gray-300 outline-none  rounded
          "
        />

        <p className="mt-4">Sub Title</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type here..."
          onChange={(e) => setSubtitle(e.target.value)}
          value={subtitle}
          required
          className="
            w-full max-w-lg mt-2 p-2  border border-gray-300 outline-none  rounded
          "
        />
        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10  pt-2 relative">
          <div className="" ref={editorRef}></div>
          <button type="button" onClick={generateContent} className=" absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline curosr-pointer">
            Generate With AI
          </button>
        </div>
                <p className="mt-4">Blog Description</p>
                <select onChange={e=>setcategory(e.target.value)} name="category" id=""
                  className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded">
                  <option value="">Select Category</option>
                  {blogCategories.map((item,idx)=>{
                    return <option key={idx} value={item}>{item}</option>
                  })}
                </select>

      </div>
    </form>
  );
}

