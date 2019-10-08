import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to Search ';
    const searchStyle = {
        fontSize: '25px'
    };

    return (
        <input
            style = {searchStyle}
            placeholder={searchText}
        />
    )
};

export default SearchPanel;