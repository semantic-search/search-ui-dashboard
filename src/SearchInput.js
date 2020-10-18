import React, { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Effect for API call
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(debouncedSearchTerm, "search val");
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="w-2/3 mt-8 flex justify-start">
      <div className="pt-2 relative text-gray-700">
        <input
          id="searchbox"
          className="w-full border-2 border-gray-300 bg-gray-300 h-10 px-5 pl-10 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label htmlFor="searchbox" className="absolute top-0 left-0 mt-5 mx-2">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default SearchInput;
//  <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
//           <svg
//             class="fill-current pointer-events-none text-gray-600 w-4 h-4"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//           >
//             <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
//           </svg>
//         </div>
