import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="mme">
                <header>
                    <p>Meme Generator</p>
                </header>
            </div>
         );
    }
}
 
export default Header;