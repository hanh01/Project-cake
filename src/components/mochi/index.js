import React, {Component} from 'react';
import './style.scss';
import logowhite1 from "../images/mochi_banner.png";
import Mochi1 from "./mochi";

class Mochi extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <img className="img" src={logowhite1} alt={''} width='100%' height='300px'/>
                        <p className='title-cheesecake'>M O C H I</p>
                    </div>
                    <Mochi1/>
                </div>
            </div>
        );
    }
}

export default Mochi;