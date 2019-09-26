import React, { Component } from 'react';
class Names extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            character: {}
        }
    }

componentDidMount(){
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
        this.setState({
            loading: false,
            character : data
        })
    })  
}



    render() { 
        const text = this.state.loading? "please wait ......" : this.state.character.name
        return ( 
            <div>
            <p>{text}</p>
            </div>
         );
    }
}
 
export default Names;