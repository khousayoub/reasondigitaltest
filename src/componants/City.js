import React from "react";
import ApiCall from "./ApiCall"
import "../style.scss"

class City extends React.Component {
    render() {
        const infos = this.props.cityInfo;
        return (
            <div className="col-sm align-self-center" >
                <div className="gallery">
                    <img src={infos.image} className="img-thumbnail rounded d-block" alt={infos.name}/>
                    <div className="text-center desc">{infos.name}</div> 
                </div>
                <ApiCall cityInfo = {infos}/>
            </div>
        )
        
    }
}

export default City;