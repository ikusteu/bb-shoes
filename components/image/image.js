import cn from 'classnames'

const Image = (props) => {
    const styles = {
        height: (props.height) || 'h-full',       
        center: (props.center) && 'flex items-center'
    }

    return (
    <div className={cn( 'overflow-hidden', [styles.center], [styles.height], [props.additionalStyles], 'border-2 border-black border-solid' )} >
        <img src={props.src} alt={props.alt} className="w-full h-auto" />
    </div>
    )
}

export default Image;