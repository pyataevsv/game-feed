import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
float:left;
    display:flex;
    width:60%;
    @media (max-width: 1189px){
        width:100%;
    }
    button {
        display:block;
        width:30px;
        font-size:20px;
        font-weight:boler;
        color: grey;
        outline-style:none;
        border: none;
        background-color: #333;
        &:hover{
            cursor: pointer;
            background-color: #444;
        }
        &:active{
            background-color: #555;
        }
    }
`
const Sliderbox = styled.div`
    border-radius:5px;
    width: 100%;
    padding:25% 0;
    position: relative;
    overflow:hidden;
    flex:1;
    
`
const Innerbox = styled.div`
    position: relative;
    width: 100%;
    height:100%;
    right:40px;
`
const Img = styled.div`
    position:absolute;
    top:0;
    left:${props => props.id * 100 - 100 * props.state + '%'};
    background-image:url(${props => props.src});
    background-size: cover;
    background-position:center;
    width:100%;
    height: 100%;
    transition: all .5s ease-in-out;
`
function Slider({ slides }) {

    const [state, setState] = useState(1)

    console.log(slides)
    return (<Wrapper><button
        onClick={() => { if (state != 1) setState(state - 1) }}
    >&#8592;</button>
        <Sliderbox>
            {slides ? slides.map((i, id) => (<Img key={id} id={id} src={i.image} state={state} />)) : null}
        </Sliderbox>
        <button
            onClick={() => { if (state != slides.length - 1) setState(state + 1) }}
        >&#8594;</button>
    </Wrapper>
    )
}

export default Slider
