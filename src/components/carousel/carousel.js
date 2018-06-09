import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import god1 from '../../images/god1.jpg';
import god2 from '../../images/god2.jpg';
import god3 from '../../images/god3.jpg';
import god4 from '../../images/god4.jpg';
class CarouselSlider extends Component {
    render() {
        return(
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img alt='' src={god1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='' src={god2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt='' src={god3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img alt='' src={god4} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
}

export default CarouselSlider;