import React, {Component} from 'react';
import './style.scss';
import logowhite1 from "../images/macaron_banner.png";
import Macaron1 from "./macaron";


class Macaron extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <img className="img" src={logowhite1} alt={''} width='100%' height='300px'/>
                        <p className='title-cheesecake'>M A C A R O N</p>
                    </div>
                    <Macaron1/>
                </div>
            </div>
        );
    }
}

export default Macaron;