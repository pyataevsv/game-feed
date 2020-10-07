import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Card from '../components/Card'
import * as actions from '../redux/actions'


const Wrapper = styled.div`
    
    display: flex;
    flex-wrap:wrap;

    @media (max-width: 652px){
        flex-direction:column;
        align-items:center;
    }
`;



function Feed({ items, isFetching, fetchItems }) {

    const noFetch = useRef(false)

    useEffect(() => {
        document.addEventListener('scroll', foo)
        function foo() {

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                console.log('yo')
                if (!noFetch.current) {
                    fetchItems({ reset: false })
                    noFetch.current = true;
                    setTimeout(() => { noFetch.current = false }, 2000)
                }
            }
        }

        return () => {
            document.removeEventListener('scroll', foo)
        }
    })

    const Items = () => <>{items.map((item, id) => <Card key={id} item={item} />)}</>

    return (
        <React.Fragment>
            <Wrapper>
                <Items />
            </Wrapper>
            {isFetching ? <div>Loading....</div> : null}
        </React.Fragment>
    )
}




const mapStateToProps = (state) => ({
    items: state.items,
    isFetching: state.isFetching
})

const mapDispatchToProps = (dispatch) => ({
    fetchItems: (x) => dispatch(actions.fetchItems(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)


