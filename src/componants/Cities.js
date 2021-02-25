import React from "react";
import City from "./City";
import Cities from "../tools/FavoritCities"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cityInfo : Cities
        };
      }
    render() {
        return(
        <>
            <div className="row">
                <h3>Favorite City</h3>
            </div>
            <div className="row">
                {Object.keys(Cities).map((key, i) => {
                    return (
                        <div key={i}>
                            <City 
                            key={i} 
                            cityInfo={this.state.cityInfo[key]}
                            />                      
                        </div>
                        )
                    }
                )}
            </div>
        </>
        )
    }

}

export default Search;