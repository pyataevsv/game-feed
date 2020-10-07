import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Selectable from '../components/Selectable'
import * as actions from '../redux/actions'

const platforms = {
    PC: '4',
    iOS: '3',
    macOS: '5',
    Linux: '6',
    Android: '21',
    PlayStation: '18,16,15,27',
    XboxOne: '1,14,80',
    Nintendo: '7,9,8'
}

const orders = {
    ['Release date']: '-released',
    ['Rating']: '-rating',

}


const Wrapper = styled.div`
    margin-bottom: 10px;
`
const Searchbox = styled.div`
    position:relative;

    input{
        width: calc(100% );
        outline:none;
        padding: 6px 15px;
        border-radius: 5px;
        box-sizing:border-box;
        border: none;
        margin-bottom:20px;
        font-size:20px;
        background-color: #5b5b5b;
        color: whitesmoke;
        transition: .5s;

        ::placeholder { 
            color: #999;
            opacity: 1; 
            font-weight: 200;
            }

        &:hover{
            ::placeholder { 
            color: black;
            opacity: 1; 
            }
            color: black;
            background-color: white;
        }
        &:focus{
            color: black;
            background-color: white;
        }
    }

    button{
        position:absolute;
        right: 5px;
        top: 3px;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        background-color: #9d9d9d;
        outline-style:none;

       &:hover{
           cursor: pointer;
           background-color: rgb(200,200,200);
       }
       &:active{
           cursor: pointer;
           background-color: rgb(230,230,230);
       }

    }
`

// const Select = styled.div`
//     position:relative;
//     display: inline-block;
//     margin-right: 10px;
// `
// const Listbox = styled.div`
//     position: absolute;
//     top:0;
//     z-index:1;
//     width: 100%;
//     background-color:white;
//     border-radius:5px;
//     button{
//         border:none;
//         font-size: 16px;
//         padding: 5px 10px;
//         width: calc(100% - 10px);
//         margin:5px 5px;
//         display:block;
//         box-sizing:border-box;
//         border-radius: 5px;
//         &:hover{
//             background-color:rgb(200,200,200);
//             cursor: pointer;
//         }
//     }
// `
// const Selectname = styled.div`
//     background-color:#444;
//     width: 150px;
//     padding: 5px 15px;
//     border-radius: 5px;

// `



export const Settings = ({ fetchItems, filter, order, word }) => {
    const input = useRef()

    useEffect(() => {
        fetchItems({})
    }, [])

    useEffect(() => {
        input.current.value = word
    })



    return (
        <Wrapper>
            <Searchbox>
                <input placeholder="Search games here…" ref={input} type='text'></input>
                <button onClick={() => input.current.value ? fetchItems({ word: input.current.value, order, filter }) : fetchItems({ word: null, order, filter })}>Search</button>
            </Searchbox>
            <Selectable title={'Platform'} items={Object.entries(platforms)} queryParam={'filter'} active={filter} />
            <Selectable title={'Order'} items={Object.entries(orders)} queryParam={'order'} active={order} />
        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
    filter: state.filter,
    order: state.order,
    word: state.searchWord
})

const mapDispatchToProps = (dispatch) => ({
    fetchItems: (x) => dispatch(actions.fetchItems(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

