import React from "react";
import Container from "./Container"
import Sidebar from "./Sidebar"

class App extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <div className="col-sm-2">
                    <div className="row">
                        <Sidebar />
                    </div>
                </div>
                <div className="col-sm">
                    <Container/>
                </div>
            </div>
        )
    }
}

export default App;
