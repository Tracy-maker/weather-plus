import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import getLoadOptions from "../../utils/getLoadOptions/getLoadOptions";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (searchData) => {
    onSearchChange(searchData);
    setSearch(
      typeof searchData === "string" && searchData.trim() !== ""
        ? searchData.trim()
        : ""
    );
  };

  return (
    <AsyncPaginate
      placeholder="Please enter the city you are searching for ..."
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={getLoadOptions}
    />
  );
};
export default Search;
