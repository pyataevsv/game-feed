import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
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

const Select = styled.div`
    position:relative;
    display: inline-block;
    margin-right: 10px;
    width: 120px;
    @media (max-width: 652px){
            width: 100%;
            box-sizing:border-box;
            margin-bottom: 10px;
        }
`
const Listbox = styled.div`
    display:${props => props.open ? 'block' : 'none'};
    position: absolute;
    top:0;
    z-index:1;
    width: 100%;
    background-color:white;
    border-radius:5px;
    button{
        border:none;
        font-size: 16px;
        padding: 5px 10px;
        width: calc(100% - 10px);
        margin:5px 5px;
        display:block;
        box-sizing:border-box;
        border-radius: 5px;
        &:hover{
            background-color:rgb(200,200,200);
            cursor: pointer;
        }
    }
`
const Selectname = styled.div`
    background-color:${props => props.active ? '#999' : '#444'};
    
    
    padding: 10px 15px;
    border-radius: 5px;
    &:hover{
        background-color:#555;
        cursor:pointer; 
    }
`

function Selectable({ title, items, word, fetchItems, filter, order, queryParam, active }) {

    const [open, setOpen] = useState(false)
    const listRef = useRef()
    const btnRef = useRef([])

    function handleSelect(close) {
        setOpen(true)
        document.addEventListener('click', func);
        function func(event) {
            let x = false
            for (let it of listRef.current.children) {
                if (it.contains(event.target)) { x = true; }
            }
            var isClickInside = listRef.current.contains(event.target);
            if (!isClickInside || x) {
                setOpen(false)
                document.removeEventListener('click', func)
            }
        }
    }

    function activeToName(active, queryParam) {
        if (!active) return ''
        if (queryParam == 'order') {
            let a = active.split('')
            a.shift()
            return ': ' + a.join('')
        }
        if (queryParam == 'filter') {

            return ': ' + Object.entries(platforms).filter(item => item[1] == active)[0][0]
        }
    }

    return (
        <Select>
            <Selectname
                active={active}
                onClick={() => handleSelect()}
            >{title + activeToName(active, queryParam)} &nabla;</Selectname>
            <Listbox open={open} ref={listRef}>
                {items.map((item, id) => {
                    let o = {}
                    o[queryParam] = item[1]

                    return <div key={id}><button
                        ref={btnRef[id]}

                        onClick={() => {
                            fetchItems(Object.assign({ word, order, filter }, o))

                        }}
                    >{item[0]}</button></div>
                })}
                <div>
                    <button
                        onClick={() => {
                            console.log(Object.assign({ word, order, filter }, { [queryParam]: null }))
                            fetchItems(Object.assign({ word, order, filter }, { [queryParam]: null }))

                        }}
                    >Clear &empty;</button>
                </div>
            </Listbox>
        </Select >
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

export default connect(mapStateToProps, mapDispatchToProps)(Selectable)

