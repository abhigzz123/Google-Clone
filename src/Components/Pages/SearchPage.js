import React from "react";
import response from "../../core-utilities/response";
import { Link } from "react-router-dom";
import { useGoogleSearch } from "../../core-utilities/hooks";
import "../CSS/searchpage.css";
import { useStateValue } from "../../StateProvider";
import LINKS from "../../core-utilities/constants";
import SearchBar from "../ComponentsFolder/SearchBar";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);

  const data = response;

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__image"
            src={LINKS.GOOGLE_LOGO}
            alt="google-logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <SearchBar hideButtons />
        </div>
      </div>
      <div className="searchPage_searchResults"></div>
    </div>
  );
};

export default SearchPage;
