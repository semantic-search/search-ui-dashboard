import React from "react";
import { downloadUrl } from "../../config.json";

const Results = ({ data }) => {
  const hits = data?.hits;
  return (
    <div className="w-2/3 my-6 mx-2 ">
      {hits &&
        hits.map((doc, idx) => (
          <Result
            key={idx}
            url={doc.document.url}
            file_name={doc.document.file_name}
            mark_res={doc.highlights}
            link={`${downloadUrl}${doc.document.doc_id}`}
          />
        ))}
    </div>
  );
};

export default Results;

const Result = ({ link, file_name, mark_res, url }) => {
  const isDocURL = !Boolean(file_name);
  console.log(isDocURL, "url");
  return (
    <a href={isDocURL ? url : link} target="_blank" rel="noopener noreferrer">
      <div className="w-full mt-3">
        <div className="break-words bg-gray-900 font-semibold border-b-2 border-gray-400 py-2 px-4 text-xl text-blue-100">
          {isDocURL ? url : file_name}
        </div>
        <div className="break-words bg-gray-800 py-2 px-4 text-lg text-blue-100">
          {console.log(mark_res)}
          {mark_res.map((data, idx) => (
            <div key={idx} className="my-2">
              {data.snippet}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};
