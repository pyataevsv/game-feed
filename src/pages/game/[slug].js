import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import store from '../../redux/store'
import Slider from '../../components/Slider'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Column = styled.div`
    box-sizing: border-box;
    float:left;
    width:40%;
    padding: 0px 20px;
    @media (max-width: 1189px){
        width:100%;
        padding: 0px 0px;
    }
    a{
        color: orange;
        text-decoration: none; 
        line-height: 40px;
        font-weight: bolder;
    }
`
const Head = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px 0px;
    div:nth-child(1){
        font-size: 33px;
    }
    div:nth-child(2){
        font-size: 24px;
        padding: 5px 10px;
        background-color:#444;
        border-radius: 5px;
        border: 1px solid #777;
    }
`
const Released = styled.div`
    padding: 0px 0px;
    text-align:right;
    color: #777;
`
const Descr = styled.div`
    color: #e5e4e4;
    letter-spacing:0.3px;
    position:relative;
    overflow:hidden;
    height:${props => props.open ? null : '100px'};

    div{    
        position:${props => props.open ? 'relative' : 'absolute'};
        top: 0;
        left: 0;
        width:100%;
        height: 102%;
        text-align: justify;
    }
    button{
        display:block;
        position: absolute;
        bottom: 0px;
        width: 100%;
        background-color: rgba(50,50,50,0.95);
        color: white;
        border: none;
        outline-style:none;
        padding: 5px;
        cursor:pointer;
    }
`

const Game = () => {
    const [descr, setDescr] = useState(false)
    const [slides, setSlides] = useState(null)
    const [{ name, description_raw, website, background_image, rating, released }, setDetails] = useState({})

    const router = useRouter()
    const { slug } = router.query


    //screenshots
    useEffect(() => {

        if (slug) {
            const scrURL = 'https://api.rawg.io/api/games/' + slug + '/screenshots'

            fetch(scrURL)
                .then(x => {

                    if (!x.ok) throw new Error(x)
                    //console.log(x)
                    return x.json()
                })
                .then(x => setSlides(x.results))
                .catch(x => console.log(x))

            return () => {

            }
        }

    }, [])


    //screenshots
    useEffect(() => {
        if (slug) {
            const scrURL = 'https://api.rawg.io/api/games/' + slug

            fetch(scrURL)
                .then(x => {
                    if (!x.ok) throw new Error(x)
                    console.log(x)
                    return x.json()
                })
                .then(x => { console.log(x); setDetails(x) })
                .catch(x => console.log(x))

            return () => {

            }
        }

    }, [])



    return <div>
        {/* <img src={background_image} alt='' width='300px' /> */}
        <Slider slides={slides} />
        <Column>
            <Head>
                <div>{name}</div>
                <div>{rating}</div>
            </Head>
            <Released>{(new Date(released)).getDate()}  {monthNames[(new Date(released)).getMonth()]}, {(new Date(released)).getFullYear()}</Released>

            <Descr open={descr}>
                <div>
                    {description_raw}
                    <br />
                    &nbsp;
                    <br />
                    &nbsp;
                </div>
                <button onClick={() => setDescr(!descr)}>{descr ? 'less' : 'more'}</button>
            </Descr>
            <a href={website} target={'_blank'}>Go to website &#8594;</a>
        </Column>
    </div>
}



export const getServerSideProps = async ({ params }) => {
    const slug = params.slug
    return {
        props: { slug: params.slug }
    }
}



export default Game