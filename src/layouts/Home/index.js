import React, {Component} from 'react';
import { Carousel } from 'antd';
import './style.scss';
import logowhite1 from "../images/ck4.jpg";
import logowhite2 from "../images/cookies_1.jpg";
import logowhite3 from "../images/cake1.jpg";
import HightLight from "./hightLight";
class Home extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay style={{backgroundColor: '#364d79',height:' 500px'}}>
                    <div>
                        <h3>
                            <img className="img" src={logowhite1} alt={''} />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img className="img" src={logowhite2} alt={''} />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img className="img" src={logowhite3} alt={''} />
                        </h3>
                    </div>
                </Carousel><br/>
                <HightLight/>
            </div>
        );
    }
}

export default Home;