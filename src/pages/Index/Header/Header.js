import React, {Component} from 'react';
import Headroom from "react-headroom";
import './Header.css';
class Header extends Component {
    render() {
        return (
            <Headroom>
            <div className="ui grid headerRow">
                <div className="eight wide column">Gelistiricim </div>
                <div className="eight wide column">
                    <i aria-hidden="true" className="bars icon large"> </i>
                </div>
            </div>
            </Headroom>
        );
    }
}

export default Header;