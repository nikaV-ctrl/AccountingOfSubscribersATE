import React, { Component, Fragment } from "react";
// import fon from './foto1.png';
import { UncontrolledCarousel } from 'reactstrap';


class Fon extends Component {
    render() {
        return (
            <div>
                
                
                <UncontrolledCarousel
                    items={[
                        {
                            altText: '',
                            caption: '',
                            key: 1,
                            src: 'https://i.ibb.co/G3smXVM/foto1.png'
                        },
                        {
                            altText: '',
                            caption: '',
                            key: 2,
                            src: 'https://i.ibb.co/xLMCLBh/foto2.png'
                        },
                        // {
                        //     altText: 'Slide 3',
                        //     caption: 'Slide 3',
                        //     key: 3,
                        //     src: 'https://i.ibb.co/R7TmjG9/foto-3.png'
                        // }
                    ]}
                />
                {/* <img src={fon} alt="fon" width="100%" /> */}
            </div>
        );
    }
}

export default Fon;