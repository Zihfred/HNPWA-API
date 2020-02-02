import {useState} from "react";

const useSort = data => {
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState(true);

  const onSort = sortKey => {
    setFilter(!filter);
    switch (sortKey) {
      case "time": {
        setFilteredList(
          [...data].sort((a, b) => (filter ? a.time - b.time : b.time - a.time))
        );
        break;
      }
      case "domain": {
        setFilteredList(
          [...data].sort((a, b) =>
            filter
              ? String(a.domain).localeCompare(String(b.domain))
              : String(b.domain).localeCompare(String(a.domain))
          )
        );
        break;
      }
      case "title": {
        setFilteredList(
          [...data].sort((a, b) =>
            filter
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title)
          )
        );
        break;
      }
      default: {
        setFilteredList(data);
      }
    }
  };
  const List = filteredList.length > 0 ? filteredList : data;
  return {
    onSort,
    List
  };
};

export default useSort;
