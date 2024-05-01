import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchContainer, SearchInput } from "./SearchComponentStyles";
import styled from "styled-components";

const SearchIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const SearchComponent = ({ placeholder, onSearch }) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    // You can do something with the search value here, e.g., call onSearch(value)
  };

  return (
    <SearchContainer>
      <SearchIcon icon={faSearch} />
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </SearchContainer>
  );
};

export default SearchComponent;
