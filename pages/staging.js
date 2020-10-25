import SplitPane from '../components/splitPane/splitPane'
import Article from '../components/article/article'
import Video from '../components/video/video'
import cn from 'classnames'

const Staging = () => {
    const left = (
        <Video src="/images/Video_temp.mp4" />
    )

    const right = (
        <Article title="Meet Bruno" textAlign="bottom" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    )

    return (
    <SplitPane left={left} right={right}/>
    )
}

export default Staging;

