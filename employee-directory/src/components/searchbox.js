import React from "react";

function SearchBox({handleSearch}) {
    return(
        <div>
            <form class = "form-inline">
                <input type = "search" class ="form-control" onChange = {e => handleSearch(e)}/>
            </form>
        </div>
    )
}

export default SearchBox