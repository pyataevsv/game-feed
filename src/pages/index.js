

import { setFilter, setIsFetching, setOrder, setWord, addItems, resetItems, fetchPosts } from '../redux/actions'

import Settings from '../components/Settings'
import Feed from '../components/Feed'


function HomePage() {
    return <>
        <Settings />
        <Feed />
    </>
}






export default HomePage