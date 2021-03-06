import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Fade from 'react-reveal/Fade';

import '../Styles/descriptionStyle.css';

import restme from '../Assets/Pictures/restme.png';
import monstrealme from '../Assets/Pictures/montrealme.jpg';

import ExperienceBar from '../Components/ExperienceBar.js';

import { useTrail, animated, useSpring, interpolate } from 'react-spring';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Transition } from 'react-spring/renderprops'

const phi = 1.6180339887498948482;

const MyDescription = React.memo(props => {

    const [barsOpen, setBarsOpen] = React.useState(false);
    const [picOpen, setPicOpen] = React.useState(false);

    const descriptionRest = () => {
        if (props.descriptionOpen) {
            setBarsOpen(true);
        }
    }

    const barsRest = () => {
        if (barsOpen) { setPicOpen(true) }
    }

    const descriptionSpring = useSpring({
        opacity: props.descriptionOpen ? 1 : 0,
        transform: props.descriptionOpen ? `translateX(0px)` : `translateX(100px)`,
        from: { opacity: 0, transform: `translateX(-100px)`, height: 100 },
        onRest: () => descriptionRest()
    })

    const springBars = useSpring({
        opacity: barsOpen ? 1 : 0,
        transform: barsOpen ? "translate3d(0px, 0, 0)" : "translate3d(100px, 0, 0)",
        onRest: () => barsRest()
    })

    const springFace = useSpring({
        opacity: picOpen ? 1 : 0,
        transform: picOpen ? "translate3d(0px, 0, 0)" : "translate3d(100px, 0, 0)",
    })

    const gRatioA = window.innerWidth / phi;
    const gRatioB = window.innerWidth - gRatioA

    const matches = useMediaQuery('(min-width:1500px)');

    return (
        props.mobile ?
            <div style={{ transform: "scale(0.8)", padding: "16px",}}>
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"HTML"}
                    percentage={90}
                    delay={700}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"CSS"}
                    percentage={90}
                    delay={800}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"JavaScript"}
                    percentage={90}
                    delay={900}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"React"}
                    percentage={67.5}
                    delay={1000}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"Swift"}
                    percentage={67.5}
                    delay={1100}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"Node.js"}
                    percentage={45}
                    delay={1200}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"MongoDB"}
                    percentage={45}
                    delay={1300}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"Liquid"}
                    percentage={45}
                    delay={1400}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"UI Design"}
                    percentage={45}
                    delay={1500}
                />
                <ExperienceBar
                    mobile={props.mobile}
                    render={true}
                    theme={props.theme}
                    name={"Vue JS"}
                    percentage={22.5}
                    delay={1600}
                />
            </div>
            :
            <div style={{ overflow: "hidden", }}>
                <Transition
                    items={props.render}
                    from={{ position: "absolute", width: "0px" }}
                    enter={{ width: `${window.innerWidth / 2}px` }}
                    leave={{ width: "0px" }}
                >
                    {show => show && (prop => <div style={{
                        ...prop, height: "100vh", top: "0vh", bottom: "5%", background: props.theme.lightestColor,
                        right: "0px", display: "flex", justifyContent: "around", alignItems: "center", overflow: "hidden"
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                            <animated.div style={{ ...descriptionSpring, marginLeft: "7.7vmax", marginTop: "3.3vmax" }}>
                                <Typography align="justify" style={{ width: "400px", color: `${props.theme.darkestColor}99`, fontFamily: "'Quicksand', sans-serif", fontSize: "0.9rem" }}>
                                    *All animations and transitions are coded using JavaScript (React-Spring) and Asynchronous calls are used to create a chain of animations.
              </Typography>
                            </animated.div>
                            <animated.div style={{ ...springBars, zoom: matches ? "1" : "0.9", marginLeft: "5.5vmax" }}>
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"HTML"}
                                    percentage={90}
                                    delay={700}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"CSS"}
                                    percentage={90}
                                    delay={800}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"JavaScript"}
                                    percentage={90}
                                    delay={900}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"React"}
                                    percentage={67.5}
                                    delay={1000}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"Swift"}
                                    percentage={67.5}
                                    delay={1100}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"Node.js"}
                                    percentage={45}
                                    delay={1200}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"MongoDB"}
                                    percentage={45}
                                    delay={1300}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"Liquid"}
                                    percentage={45}
                                    delay={1400}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"UI Design"}
                                    percentage={45}
                                    delay={1500}
                                />
                                <ExperienceBar
                                    mobile={props.mobile}
                                    render={barsOpen}
                                    theme={props.theme}
                                    name={"Vue JS"}
                                    percentage={22.5}
                                    delay={1600}
                                />
                            </animated.div>
                        </div>
                    </div>)}
                </Transition>
            </div >
    )
})

export default React.memo(MyDescription)