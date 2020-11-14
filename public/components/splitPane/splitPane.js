import cn from 'classnames'

/*

props = { 
    left, right: ( jsx content of respective pane )
    height: ( sets height in tailwind class, default = 1vh)
    padding: ( sets padding in tailwind class, default = 2.5rem )
    ratio: ( sets width ratio {left pane}:{right pane}, default = 1:1 )
    additionalStyles: ( string of tailwind classes, sets additional styles for main container )
    leftStyle, rightStyle : ( string of tailwind classes, sets aditional styles for respective pane )
}

*/

const SplitPane = ( props ) => {

    const styles = {
        height: (props.height) || 'h-screen',
        padding: (props.padding) || 'p-10',
        leftWidth: 'w-1/2',
        rightWidth: 'w-1/2'
    }

    if ( props.ratio ) {
        let [ left, right ] = props.ratio.split( ':' ).map( n => Number( n ) );
        const width = left + right;
        styles.leftWidth = `w-${ left }/${ width }`;
        styles.rightWidth = `w-${ right }/${ width }`;
    }

    return (

        <section className={cn('w-full', 'flex', 'flex-wrap', [props.additionalStyles])}>
            <div className={cn([styles.leftWidth], 'sm:w-full', 'sm:min-w-full', [styles.height], [styles.padding], [props.leftStyles], 'overflow-hidden')}>
                {props.left}
            </div>
            <div className={cn([styles.rightWidth], 'sm:w-full', 'sm:min-w-full', [styles.height], [styles.padding], [props.rightStyles], 'overflow-hidden')}>
                {props.right}
            </div>
        </section>
    )
}

export default SplitPane;