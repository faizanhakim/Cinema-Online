import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {

    const [searchText, setSearchText] = useState("");

    //to update search text value
    function handleUpdate(event) {
        const value = event.target.value;
        setSearchText(value)
    }

    //make request to get searched content
    function searchContent(event) {
        event.preventDefault();
        setSearchText("");
        alert(`${searchText} is being searched`)
    }

    return (
        <div className='search-bar text-gray-800 bg-white rounded-lg'>
            <form onSubmit={searchContent}>
                <SearchIcon className="search-icon" />
                <input className="px-2 rounded-lg" type="text" size="25" spellCheck="false" placeholder="Enter Keywords..."
                    value={searchText} onChange={handleUpdate} />
            </form>
        </div>
    );
}