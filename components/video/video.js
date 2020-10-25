import cn from 'classnames'

const Video = (props) => {

    const styles = {
        width: (props.fitWidth) 
            ? 'w-full h-auto'
            : 'absolute max-w-none h-full w-auto left-1/2 -trnslt-1/2', 
            /* must add to main CSS
            .-trnslt-1\/2 {
                transform: translateX(-50%);
            } 
            */
        }


    return (
        <div className={cn('w-1/2', 'h-full', 'w-full', 'relative', 'overflow-hidden', 'flex', 'items-center', [props.containerStyle])}>
            <video className={cn([styles.width])} autoPlay loop muted>
                <source src={props.src} type="video/mp4" />
            </video> 
        </div>
    )
}

export default Video;