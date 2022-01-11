import React from "react";
import response from "../../core-utilities/response";
import { Link } from "react-router-dom";
import { useGoogleSearch } from "../../core-utilities/hooks";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage_searchResults"></div>
    </div>
  );
};

export default SearchPage;
