import cn from 'classnames'
import Image from '../image/image'


const NavItem = ( props ) => {

    const childStyle = {
        paddingBottom: ( props.imgRatio === "portrait" ) ?  '177.77%' 
            : ( props.imgRatio === "landscape" ) 
            ? '56.25%' 
            : "100%"
    }
    
    return (
        <div className={cn( 'w-full', 'p-4', 'relative' )}>
            <div style={ childStyle } className={cn('h-0', 'relative', 'border-black', 'border-2', 'border-solid')}>
                <Image 
                    additionalStyles={cn( 'absolute', 'w-full')} 
                    src={ props.item.image } 
                    fitHeight={ props.imgRatio === 'portrait' } 
                    center 
                />
            </div>
        </div>
    )
}

const PhotoNav = ( props ) => {

    const containerStyle = {
        width: `${( 1 / props.items.length ) * 100 }%`
    }

    return (
        <section className={ cn( 'w-full', 'p-10', 'border-black border-2 border-solid') }>
            <div className={ cn('flex', 'flex-center', 'h-full', 'border-black border-2 border-solid') }>
                {
                    props.items.map( item => (
                        <div style={ containerStyle } >
                            <NavItem 
                                key={ item.title } 
                                item={ item } 
                                imgRatio={ props.imgRatio } 
                                button={( props.buttons )}
                            />
                            {
                                ( item.caption ) && 
                                <div className={ cn('h-20', 'flex', 'justify-center', 'items-center')}>
                                    <h4 className={ cn([ props.captionStyles ])}>{ item.caption }</h4>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

/*const PhotoNav = ( props ) => {
    


    const border = 'border-solid border-2'

    return (
        <section className={ cn( [styles.height], [styles.width], 'flex', 'flex-col', 'justify-space-between', [border], [styles.margin || `${styles.marginX} ${styles.marginY}`] ) } >
            <h1 className={ cn( 'w-full', 'text-center', 'mb-10', [border] ) } >{ props.title }</h1>
            <div className={ cn( 'flex', 'justify-center', [border], 'border-red', 'h-1/2' ) } >
                {
                    props.items.map(
                        item => (
                            <figure key={ item } className={ cn( 'w-3/8', 'flex-1', 'm-5', 'h-68', 'flex', 'justify-center', 'relative' , 'overflow-hidden' ) } >
                                <Image center fitHeight additionalStyles="object-cover relative" title="Shop by Category" src={`/images/item-${item.toLowerCase()}.jpeg`} />
                                <Button additionalStyles="absolute bottom-1/8 rounded-xl" text={ item } />
                            </figure>
                        )
                    )
                        }
            </div>
        </section>
    );
}
*/
    
    
export default PhotoNav;
