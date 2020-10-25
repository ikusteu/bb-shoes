import cn from 'classnames'

/* 

props = {
    title: ( string, title )
    text: ( string, text content )
    padding: ( tailwind class sets padding around title and text, default = 2rem )
    titleStyles: ( string of tailwind classes, adds additional styles to title )
    textStyles: ( string of tailwind classes, adds additional styles to text ) 
}

*/

const Article = ( props ) => {

    const styles = {
        padding: ( props.padding ) || 'p-8',
    }

    return (
        <article className={ cn( 'flex', 'flex-col', 'items-center', [ styles.text ] ) } >
            <div className={ cn( 'w-full', [ styles.padding ], 'border-box', [ props.titleStyles ] ) } >
                <h1>{ props.title }</h1>
            </div>
            <div className={ cn( 'w-full', [ styles.padding ], 'border-box', [ props.textStyles ] ) } >
                <p>{ props.text }</p>
            </div>
        </article>
    )
}

export default Article;