import { useState, useEffect } from 'react'

const Test = () => {
    const numItems = 3;
    const ratio = 2;
    const style = {
        margin: 10,
        itemMargin: 2,
    }

    const initialHeight = (document.innerWidth - style.margin - (style.itemMargin * 2 * numItems)) * ratio;
    const [ height, setHeight ] = useState(initialHeight)

    useEffect(() => {
        setHeight( (document.innerWidth - style.margin - (style.itemMargin * 2 * numItems)) * ratio )
        console.log(height);
    }, [window.innerWidth])

    return (
        <div className="flex justify-center">
            <div style={style}>{height}</div>
            <div style={style}>{height}</div>
            <div style={style}>{height}</div>
        </div>
    )

}

export default Test;