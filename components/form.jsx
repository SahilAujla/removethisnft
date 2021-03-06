import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { storage } from "../storage/firebase";

const Form = () => {
  const router = useRouter();

  const [image, setImage] = useState("");

  const upload = () => {
    if (image == null) return;
    storage.ref(`/images/${image.name}`).put(image);
  };

  const nftInputRef = useRef();
  const termsInputRef = useRef();
  const creatorInputRef = useRef();
  const imageInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const nftName = nftInputRef.current.value;
    const terms = termsInputRef.current.value;
    const creatorName = creatorInputRef.current.value;

    upload();
    router.push("submitted");
  };

  return (
    <form className="space-y-10 accent-gr-end">
      <div>
        <label htmlFor="nftName" className="block mb-2">
          NFT NAME
        </label>
        <input
          ref={nftInputRef}
          className="w-full px-3 py-2 rounded-lg text-black focus:outline-none"
          id="nftName"
          type="text"
          required
        />
      </div>
      <div>
        <label className="block mb-2" htmlFor="terms">
          TERMS RELATED TO YOUR NFT
        </label>
        <textarea
          ref={termsInputRef}
          className="w-full px-3 py-2 rounded-lg text-black focus:outline-none"
          id="terms"
          placeholder="seprate the terms with a space"
          required
        />
      </div>
      <div>
        <label className="block mb-2" htmlFor="creatorName">
          CREATOR{`'`}S NAME
        </label>
        <input
          ref={creatorInputRef}
          className="w-full px-3 py-2 rounded-lg text-black focus:outline-none"
          type="text"
          id="creatorName"
          required
        />
      </div>
      <div>
        <label className="block mb-2" htmlFor="file">
          UPLOAD NFT IMAGE
        </label>
        <input
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          ref={imageInputRef}
          id="file"
          type="file"
          className="ml-6 text-white text-sm leading-6 file:bg-gr-end file:text-white file:font-semibold file:border-none file:px-4 file:py-2 file:rounded-full file:mr-6 hover:file:bg-gr-end-light file:cursor-pointer"
        />
      </div>
      <button
        onClick={formSubmitHandler}
        className="px-4 py-2 bg-gr-end hover:bg-gr-end-light rounded-full ml-44 font-semibold"
      >
        Secure NFT
      </button>
    </form>
  );
};

export default Form;
