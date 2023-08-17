import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../config";
import getLoadOptions from "../../utils/getLoadOptions/getLoadOptions";

const Search=({ onSearchChange })=> {
  const [search, setSearch] = useState(null);
  
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
