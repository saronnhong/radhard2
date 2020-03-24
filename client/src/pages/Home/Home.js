import React, { Component } from "react";
// import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";


class Home extends Component {
    
    render() {
        return (
            <div className="home">
                <div className="homeTop">
                    <div className="container">
                        <div className="row imageContainer">
                            <h1 className="homeHeader">Survivable Space Systems</h1>
                            <p className="homeText">Engineering Services and Technology Development Get all your meetings minutes, tasks and decisions in one place. Share them with anyone instantly. Export them to all the tools you already use.</p>
                        </div>
                    </div>
                </div>
                <div className="homeBottom">
                    <div className="container">
                        <div className="">
                            <h1 className="homeTitle">
                                Milanowski. Your Mission is Ours.
                            </h1>
                            <p className="homeContent">
                                Every day, our 110,000 employees come to work with one focus – our customers’ missions. Whether it's protecting citizens or advancing the boundaries of science, these missions are some of the most important and challenging in the world. We bring an unwavering commitment to help our customers succeed, and it’s that sense of purpose and opportunity to make a difference in the world that drives us every day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;