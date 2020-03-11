import React, {Component} from 'react';
import MainSlider from "./MainSlider/MainSlider";
import './Main.css';
class Main extends Component {
    render() {
        return (
            <div className="mainComponent">
            <MainSlider />
            </div>
        );
    }
}

export default Main;