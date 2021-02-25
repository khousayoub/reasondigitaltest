import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div className="col-sm-5 offset-md-3">
                <form className="form-inline" id="search-bar" method="post" >
                    <input 
                    type="text"
                    className="form-control form-control-sm ml-3 w-7" 
                    name="search-input" 
                    ref="search-input"
                    aria-label="Search"
                    placeholder="City"
                    /> 
                    <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;