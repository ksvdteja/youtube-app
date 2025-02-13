import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    //API Call

    //make an api call after every key press
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    //but if the difference between 2 API calls < 200ms
    //decline the api call
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key - ip
   * - destroy the component(useEffect return method)
   * - re-render the component
   * - useEffet();
   * - start timer => make api call after 200ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <a href="">
          <img
            className="h-9 mx-5"
            alt="youtube-home"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-650-80.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-[35rem] border border-gray-500 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-l-0 border-gray-500 p-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (<div className="absolute bg-white py-2 px-6 w-[35rem] rounded-md">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 px-3 hover:bg-gray-100 hover:rounded-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
