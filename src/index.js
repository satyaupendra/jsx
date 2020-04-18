import React from 'react';
import ReactDOM from 'react-dom';
import Seasondisplay from './Seasondisplay';
import Loader from './Loader';
import './Seasondisplay.css'
class App extends React.Component{
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  helper=()=>{
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat){
      return <div><Seasondisplay lat={this.state.lat}/></div>;
    }
    return <Loader/>;

  }
  render(){
    return(
      <div className="border-red">
        {this.helper()}
      </div>
    )   
}
}
ReactDOM.render(<App/>,document.querySelector("#root"))
