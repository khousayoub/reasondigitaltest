import React from "react"
import ApiID from "../tools/ApiInfo"

class ApiCall extends React.Component {

  showWeather = Event => {
    Event.preventDefault();
    const infos = this.props.cityInfo;
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${infos.lat}&lon=${infos.lon}&exclude&appid=${ApiID}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              citySelected : result
            })

          },
          (error) => {
            console.log(error)
          }
        )
  }
  render() {
      return (
        <>
        <form onSubmit={this.showWeather}>
          <input type="submit" value="Show weather"
              className="btn btn-outline-success btn-lg btn-block"
              />
        </form>
        </>
      )
  }
}

export default ApiCall;