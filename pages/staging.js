import SplitPane from '../components/splitPane/splitPane'
import Article from '../components/article/article'
import Image from '../components/image/image'
import cn from 'classnames'

const Staging = () => {
    const left = (
        <div className={cn('w-full', 'h-full', 'relative', 'overflow-hidden', 'flex', 'items-stretch')}>
            <video className={cn('absolute', 'h-full', 'w-auto')} autoPlay loop muted>
                <source src="/images/Video_temp.mp4" type="video/mp4" />
            </video> 
        </div>
    )

    const right = (
        <Article title="Meet Bruno" textAlign="bottom" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    )

    return (
    <SplitPane rightStyles="flex items-center" left={left} right={right}/>
    )
}
/*
<div className="h-full border-2 overflow-hidden border-black border-solid flex items-center">
            <img src="/images/meet-bruno.jpeg" />
        </div>
*/
export default Staging;

