import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Wrapper = styled.div`
        float:left;
        position:relative;
        display: flex;     
        flex-direction:column;
        flex: 1;
        border-radius: 10px;
        margin: 10px 10px;
        max-width:400px;
        min-width:300px;
        overflow:hidden;
        background-color:#2b2b2b;
        transition: all .5s;
        box-sizing:border-box;
        
        &:hover{
            transform: scale(1.05);
        }

        @media (max-width: 652px){
            width: 100%;
            margin: 10px 0px;
        }
        `
const Img = styled.div`
        background-image:url(${props => props.image});
        width:100%;
        height:200px;
        background-size: cover;
        background-position:top;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
    `
const Content = styled.div`
    padding:10px;
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    h2{
        margin:5px 0px;
    }

    button{
        width:100%;
        box-sizing:border-box;
        margin-top: 20px;
        outline-style:none;
        border: none;
        font-size:16px;
        padding: 10px;
        border-radius: 10px;
        color: white;
        background-color: #444;
        font-weight: lighter;
        &:hover{
            cursor: pointer;
            background-color: #555;
        }
    }
`

const Corner = styled.div`
    position: absolute;
    top:-50px;
    right:-50px;
    transform:rotate(45deg);
    width: 100px;
    height: 100px;
    background-color:white;   
    background-image: linear-gradient(55deg,#555,#333);
`

const Raiting = styled.div`
    position: absolute;
    top:8px;
    right:8px;
    z-index:1;
    color: #d2d0d0;
`
const Released = styled.div`
    text-align:right;
    font-size: 14px;
    color: grey;
`

function Card({ item }) {
    // console.log(item)

    return (
        <Wrapper>
            <Img image={item.background_image} />
            <Content>
                <h2>{item.name}</h2>
                <Corner />
                <Raiting>{item.rating}</Raiting>
                <Released>{(new Date(item.released)).getDate()}  {monthNames[(new Date(item.released)).getMonth()]}, {(new Date(item.released)).getFullYear()}</Released>

                <div>
                    <Link
                        href={{
                            pathname: `/game/${item.slug}`,
                            query: {},
                        }}
                    >
                        <button>View</button>
                    </Link>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Card
