import React from "react";
import { downloadUrl } from "../../config.json";
import _ from "lodash";

const Results = ({ data }) => {
  return (
    <div className="w-2/3 my-6 mx-2 ">
      {data &&
        _.map(data, (key, val) => {
          return <Result fileORurl={key} file_name={val} />;
        })}
    </div>
  );
};

export default Results;

const Result = ({ fileORurl, file_name }) => {
  const isURL = validURL(file_name);
  return (
    <a
      href={isURL ? file_name : `${downloadUrl}${fileORurl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full mt-3">
        <div className="break-words bg-gray-900 font-semibold border-b-2 border-gray-400 py-2 px-4 text-xl text-blue-100">
          {file_name}
        </div>
        {/* <div className="break-words bg-gray-800 py-2 px-4 text-lg text-blue-100">
          {console.log(mark_res)}
          {mark_res.map((data, idx) => (
            <div key={idx} className="my-2">
              {data.snippet}
            </div>
          ))}
        </div> */}
      </div>
    </a>
  );
};

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
