import cn from 'classnames'

const Article = (props) => {

    const styles = {
        padding: (props.padding) || 'p-8',
        text: (props.textAlign === 'top') 
            ? 'justify-start' 
            : (props.textAlign === 'bottom') 
            ? 'justify-end'
            : 'justify-center',
    }

    return (
        <article className={cn('flex', 'flex-col', 'items-center', [styles.text])}>
            <div className={cn('w-full', [styles.padding], 'border-box', [props.titleStyle])}>
                <h1>{props.title}</h1>
            </div>
            <div className={cn('w-full', [styles.padding], 'border-box', [props.textStyle])}>
                <p>{props.text}</p>
            </div>
        </article>
    )
}

export default Article;