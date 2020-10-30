import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import DropImage from "../../components/DropImage";
import Heading from "../../components/Heading";
import { faceRegister } from "../../config.json";

const RegisterFace = () => {
  const [[fileType, uploadFile], setfileDetails] = useState([]);
  const [name, setname] = useState("");

  const [mutate, { isLoading, data }] = useMutation(({ uploadFile, name }) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("user_name", name);
    return fetch(faceRegister + `register`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });

  const registerFace = useCallback(() => {
    if (uploadFile && name) {
      mutate({ uploadFile, name });
    }
  }, [mutate, name, uploadFile]);

  return (
    <div className="bg-black h-full min-h-screen flex items-center flex-col">
      <Heading title={"Register Face"} />
      <div className="flex justify-start items-end w-2/3 flex-wrap my-6">
        <label htmlFor="name" className="font-sans text-2xl text-gray-500 mr-2">
          Name:
        </label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          id="name"
          className="appearance-none border rounded py-1 px-3 text-gray-900 bg-gray-400 w-full font-medium"
        />
      </div>
      <DropImage setfileDetails={setfileDetails} />
      <div className="flex justify-start items-end w-2/3 flex-wrap my-6">
        <button
          onClick={registerFace}
          type="submit"
          className="px-4 py-2 bg-green-900 text-gray-300 font-semibold rounded-lg "
        >
          Register
        </button>
      </div>
      {data && data === false && <div className="text-red-500"> ERROR </div>}
      {isLoading && <div className="text-gray-400"> LOADING.........</div>}
      {data && <div className="text-green-500"> Done</div>}
    </div>
  );
};

export default RegisterFace;
