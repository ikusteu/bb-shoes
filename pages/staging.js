import PhotoNav from '../components/photoNav/photoNav'
import cn from 'classnames'
import SplitPane from '../components/splitPane/splitPane'
import Image from '../components/image/image'
import Test from '../components/test/test.js'

const Staging = () => {

    const items = [
        {
            title: 'Shoes',
            image: '/images/meet-bruno.jpeg',
            caption: 'Caption'
        },
        {
            title: 'Boots',
            image: '/images/meet-bruno.jpeg',
            caption: 'Caption'
        },
        {
            title: 'Accessories',
            image: '/images/meet-bruno.jpeg',
            caption: 'Caption'
        } ]

    return (
        <>
            <PhotoNav 
                title="Shop by Model" 
                items={ items } 
                imgRatio="landscape" 
                captionStyles="text-4xl"
            />
            <div class="w-full h-48 border-1 border-solid border-black"></div>
        </>
    )

    /*
    const left = (
        <Image additionalStyles="object-cover" center src="/images/meet-bruno.jpeg" />
    )

    const right = (
        <Image center src="/images/meet-bruno.jpeg" />
    )

    return (
        <SplitPane left={left} right={right} />
    //<PhotoNav />
    )*/

}

export default Staging;
