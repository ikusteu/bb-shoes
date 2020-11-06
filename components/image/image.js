import cn from 'classnames'

/* 

props = {
    src, alt: ( string, sets imgage src and alt properties respectively )
    height: ( tailwind class, sets height of image container, default = 100% )
    fitHeight: ( bool, fits image to container by height, default = fit by width )
    center: ( bool, centers image, default = image not centered )
    additionalStyles: ( string of tailwind classes, sets additional styles for image container )
} 

*/

const Image = ( props ) => {
    const styles = {
        height: ( props.height ) || 'h-full',  
        fit: ( props.fitHeight ) ? 'w-auto h-full' : 'w-full h-auto',     
        center: ( props.center ) && 'flex justify-center items-center'
    }

    return (
    <div className={ cn( 'overflow-hidden', [ styles.center ], [ styles.height ], [ props.additionalStyles ], 'object-cover' ) } >
        <img src={ props.src } alt={ props.alt } className={ cn( 'max-w-none', [styles.fit] ) } />
    </div>
    )
}

export default Image;