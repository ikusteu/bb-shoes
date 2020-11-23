import cn from 'classnames'

/*

props = {
    src: ( string, video src attribute )
    additionalStyles: ( string of tailwind classes, adds aditional styles to container )
    fitWidth: ( fits video to container by width, default fit by height )
}

*/

const Video = ( props ) => {

    const styles = {
        width: ( props.fitWidth ) 
            ? 'w-full h-auto'
            : 'absolute max-w-none h-full w-auto left-1/2 -trnslt-1/2', 
            /* 
            .-trnslt-1\/2 { <<**must add class to main CSS**>>
                transform: translateX(-50%);
            } 
            */
        }


    return (
        <div className={ cn( 'w-1/2', 'h-full', 'w-full', 'relative', 'overflow-hidden', 'flex', 'items-center', [ props.additionalStyles ] ) } >
            <video className={ cn( [ styles.width ] ) } autoPlay loop muted>
                <source src={ props.src } type="video/mp4" />
            </video> 
        </div>
    )
}

export default Video;