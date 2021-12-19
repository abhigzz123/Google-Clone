import React, { useState } from "react";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import "../../CSS/searchbar.css";
import { Button } from "@material-ui/core";
import { searchPageMessages } from "../../../core-utilities/messages";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import ROUTES from "../../../routes";
import { actionTypes } from "../../../Reducer";

const SearchBar = ({ hideButtons = false }) => {
  const [state, dispatch] = useStateValue();

  const [inputText, setInputText] = useState("");
  const history = useHistory();

  const onSearchClick = (event) => {
    event.preventDefault();
    dispatch({ type: actionTypes.SET_INPUT_TERM, term: inputText });
    history.push(ROUTES.SEARCH);
  };

  return (
    <form className="search__bar">
      <div className="search_input">
        <SearchIcon className="search__input__icon" />
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={onSearchClick} variant="text">
            {searchPageMessages.BUTTON_TEXTS.GOOGLE_SEARCH}
          </Button>
          <Button variant="text">
            {searchPageMessages.BUTTON_TEXTS.I_AM_FEELING_LUCKY}
          </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search_buttons_hidden"
            type="submit"
            onClick={onSearchClick}
            variant="text"
          >
            {searchPageMessages.BUTTON_TEXTS.GOOGLE_SEARCH}
          </Button>
          <Button className="search_buttons_hidden" variant="text">
            {searchPageMessages.BUTTON_TEXTS.I_AM_FEELING_LUCKY}
          </Button>
        </div>
      )}
    </form>
  );
};
export default SearchBar;
