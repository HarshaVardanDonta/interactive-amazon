import '../index.css';
import React from 'react'
import Home1 from '../assets/homepage001.jpg';
import Product1 from './product';
import Product2 from './product2';
import prod1 from '../assets/prod1.jpg';
import prod2 from '../assets/prod2.jpg';
import prod3 from '../assets/prod3.jpg';
import prod4 from '../assets/prod4.jpg';
import prod5 from '../assets/prod5.jpg';
import prod6 from '../assets/prod6.jpg';


export default function HomePage(){
    return(
        <>
            <div className="HomePage">
                <img src={Home1} alt="img" />
                <div className="Card1">
                    <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                    img={prod1}/>
                    <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                    img={prod2}/>
                    <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                    img={prod3}/>
                    <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                    img={prod4}/>
                    <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                    img={prod5}/>
                    <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                    img={prod6}/>
                </div>
                <div className="Strip2">
                    <div className="Card2">
                        <div className="row1">
                            <Product2 name="something" img={prod1}/>
                            <Product2 name="random" img={prod2}/>
                        </div>
                        <div className="row1">
                            <Product2 name="something" img={prod3}/>
                            <Product2 name="something" img={prod4}/>
                        </div>
                    </div>
                    <div className="Card2">
                        <div className="row1">
                            <Product2 name="something" img={prod1}/>
                            <Product2 name="something" img={prod2}/>
                        </div>
                        <div className="row1">
                            <Product2 name="something" img={prod3}/>
                            <Product2 name="something" img={prod4}/>
                        </div>
                    </div>
                    <div className="Card2">
                        <div className="row1">
                            <Product2 name="something" img={prod1}/>
                            <Product2 name="something" img={prod2}/>
                        </div>
                        <div className="row1">
                            <Product2 name="something" img={prod3}/>
                            <Product2 name="something" img={prod4}/>
                        </div>
                    </div>
                </div>
                <div className="Strip3">
                    <div className="row1">
                        Buy again
                    </div>
                    <div className="row2">
                        <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                        img={prod1}/>
                        <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                        img={prod2}/>
                        <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                        img={prod3}/>
                        <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                        img={prod4}/>
                        <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                        img={prod5}/>
                        <Product1 name="BenQ GW2780 27-inch 1080p FHD Eye-Care, IPS Monitor, Ultra-Slim Bezel, 60 Hz, Brightness Intelligence, 2Wx2 Speakers, Tilt, HDMI, VGA, Display Port, Cable Management, Flicker-Free" 
                        img={prod6}/>
                    </div>
                </div>
                <br/>
            </div>
            <div className="Footer">
                <div className="row1">
                    Have an idea to help us improve? Send feedback
                </div>
                <hr/>
                <div className="row2">
                    <div className="sub1">
                        Get to Know Us<br/>
                        About Us<br/>
                        Careers<br/>
                        Press Releases<br/>
                        Amazon Cares<br/>
                        Gift a Smile<br/>
                    </div>
                    <div className="sub1">
                        Let Us Help You<br/>
                        Customer Service<br/>
                        Shipping Rates & Policies<br/>
                        Business FAQ<br/>
                    </div>
                    <div className="sub1">
                        Work with Amazon<br/>
                        Sell<br/>
                        Fulfillment By Amazon<br/>
                        Advertise on Amazon<br/>
                        Become an Affilate<br/>
                    </div>
                    <div className="sub1">
                        Business Solutions<br/>
                        Prime for business account<br/>

                    </div>
                    <div className="sub1">
                        Business Settings<br/>
                        Add team members<br/>
                        Buying Policies & Approvals<br/>
                        Manage your Budgets (Blanket PO)<br/>
                        Billing and Shipping<br/>
                        Manage Your GST<br/>
                    </div>
                    <div className="sub1">
                        Buy for your business<br/>
                        Buy wholesale<br/>
                        Today's Deals<br/>
                        Buy Again<br/>
                        PPE for Work<br/>
                    </div>
                </div>
            </div>
        </>
        
    );
}