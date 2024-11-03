import React, {Component} from "react";

class Greetings extends Component{
    render() {
        return(
            <h1 style={ {color:'blue', backgroundColor:'Yellow'} }>Greetings, {this.props.name}</h1>
        )
    }
}

export default Greetings