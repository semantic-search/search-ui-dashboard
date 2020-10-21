import React, { useEffect, useState } from "react";
const Pagination = ({ tPages, setPage }) => {
  const [currentPg, setcurrentPg] = useState(1);
  useEffect(() => {
    setPage(currentPg - 1);
  }, [currentPg, setPage]);
  //   const totalPgs = tPages % 10 === 0 ? tPages / 10 : tPages / 10 + 1;
  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center">
      {tPages && (
        <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-t border-gray-900 sm:px-6 rounded-t-lg">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => {}}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Previous
            </button>
            <button
              onClick={() => {}}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm leading-5 text-gray-300 mr-2">
                Showing{" "}
                <span className="font-medium">{1 + 10 * (currentPg - 1)} </span>
                to <span className="font-medium">{currentPg * 10} </span>
                of <span className="font-medium">{tPages} </span>
                results{" "}
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex shadow-sm">
                <PrevBtn
                  onClick={() => {
                    currentPg > 1 && setcurrentPg((prevState) => prevState - 1);
                  }}
                />
                {/* {Array(3)
                .fill(0)
                .map((elem, idx) => {
                  return (
                    <PageNum
                      key={idx}
                      num={idx + currentPg}
                      onClick={() => setcurrentPg(idx + 1)}
                      selected={currentPg === idx + 1}
                    />
                  );
                })} */}
                {/* <PageNum num={"1"} selected />
              <PageNum num={"2"} />
              <PageNum num={"3"} />
              <PageNum num={"4"} /> */}
                <NextBtn
                  onClick={() => {
                    setcurrentPg(currentPg + 1);
                  }}
                />
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Pagination;

const PrevBtn = (props) => {
  return (
    <button
      {...props}
      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-300 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
      aria-label="Previous"
    >
      {/* Heroicon name: chevron-left */}
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
const NextBtn = (props) => {
  return (
    <button
      {...props}
      className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-300 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
      aria-label="Next"
    >
      {/* Heroicon name: chevron-right */}
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export const PageNum = ({ num, selected, ...props }) => {
  return (
    <button
      {...props}
      className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium ${
        selected
          ? "text-black bg-indigo-300"
          : "text-gray-700 hover:text-gray-500  bg-gray-300"
      }  focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
    >
      {num}
    </button>
  );
};
