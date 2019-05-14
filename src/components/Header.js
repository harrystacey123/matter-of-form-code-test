import React, { Component } from 'react';
import '../App.scss';

const title = 'our charter destinations'

class Header extends Component {

    render() {
        return(
            <div>
                <h2 className='title'>{title}</h2>
            </div>
        )
    }
}

export default Header;