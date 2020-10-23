import cn from 'classnames'


const SplitPane = (props) => {
    const styles = {
        height: (props.height) || 'h-screen',
        padding: (props.padding) || 'p-10'
    }
    
    return (

        <section className={cn('w-full', 'flex','sm:flex-wrap', [props.additionalStyles])}>
            <div className={cn('flex-1', 'sm:min-w-full', [styles.height], [styles.padding], [props.leftStyles], 'overflow-hidden', 'border-2', 'border-black border-solid')}>
                {props.left}
            </div>
            <div className={cn('flex-1', 'sm:min-w-full', [styles.height], [styles.padding], [props.rightStyles], 'overflow-hidden', 'border-2', 'border-black border-solid')}>
                {props.right}
            </div>
        </section>
    )
}

export default SplitPane;