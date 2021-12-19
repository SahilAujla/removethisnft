const Form = () => {
  return (
    <form className="space-y-10 accent-gr-end">
      <div>
        <label htmlFor="nftName" className="block mb-2">
          NFT NAME
        </label>
        <input
          className="w-full px-3 py-2 rounded-lg text-black focus:outline-none"
          id="nftName"
          type="text"
          required
        />
      </div>
      <div>
        <label className="block mb-2" htmlFor="ownerName">
          OWNER{`'`}S NAME
        </label>
        <input
          className="w-full px-3 py-2 rounded-lg text-black focus:outline-none"
          id="ownerName"
          type="text"
          required
        />
      </div>
      <div>
        <label className="block mb-2" htmlFor="creatorName">
          CREATOR{`'`}S NAME
        </label>
        <input
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
          id="file"
          type="file"
          className="ml-6 text-white text-sm leading-6 file:bg-gr-end file:text-white file:font-semibold file:border-none file:px-4 file:py-2 file:rounded-full file:mr-6 hover:file:bg-gr-end-light file:cursor-pointer"
        />
      </div>
      <button className="px-4 py-2 bg-gr-end hover:bg-gr-end-light rounded-full ml-44 font-semibold">
        Secure NFT
      </button>
    </form>
  );
};

export default Form;
