import React, {Component} from 'react';
import logowhite1 from "../../components/images/cheesecake_banner.png";
import './style.scss';
import Cheesecake from "./cheesecake";

class Cake extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                   <img className="img" src={logowhite1} alt={''} width='100%' height='300px'/>
                   <p className='title-cheesecake'>C H E E S E C A K E</p>
                </div>
                <Cheesecake/>
            </div>
        );
    }
}

export default Cake;