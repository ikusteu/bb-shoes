import cn from 'classnames'

/* 

props = {
    src, alt: ( string, sets imgage src and alt properties respectively )
    height: ( tailwind class, sets height of image container, default = 100% )
    center: ( bool, centers image, default = image not centered )
    additionalStyles: ( string of tailwind classes, sets additional styles for image container )
} 

*/

const Image = ( props ) => {
    const styles = {
        height: ( props.height ) || 'h-full',       
        center: ( props.center ) && 'flex items-center'
    }

    return (
    <div className={ cn( 'overflow-hidden', [ styles.center ], [ styles.height ], [ props.additionalStyles ], ) } >
        <img src={ props.src } alt={ props.alt } className="w-full h-auto" />
    </div>
    )
}

export default Image;