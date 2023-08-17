import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import getLoadOptions from "../../utils/getLoadOptions/getLoadOptions";

const Search=({ onSearchChange })=> {
  const [search, setSearch] = useState();
  
 const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={getLoadOptions}
    />
  );
}
export default Search;
