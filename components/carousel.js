import cn from "classnames"
import { useState, useEffect } from "react"
import useBreakpoint from "../customHooks/useBreakpoint"

const Carousel = (props) => {
  /*
    
    props = {
        items: [] ...JSX ] slider items
        style: { object of tailwindCSS strings for elements: container }
        options: { object }
    }
    
    */

  const [windowWidth, setWindowWidth] = useState(0)
  // const itemsTotal = props.items.length

  // const [itemsPerSlide, setItemsPerSlide] = useState(
  //   props.options ? props.options.itemsPerSlide : 4
  // )
  // const [slideIndexes, setSlideIndexes] = useState({
  //   previousSlideIndex: 0,
  //   currentSlideIndex: 0 + itemsTotal - itemsPerSlide,
  //   nextSlideIndex: 0 + itemsPerSlide,
  // })
  const [applyBreakPoint] = useBreakpoint(props.options)

  // const checkIndex = (index) => {
  //   index =
  //     index > itemsTotal
  //       ? index - numItems
  //       : index < 0
  //       ? index + numItems
  //       : index
  //   return index
  // }

  // const updateSlideIndexes = (indexes) => {
  //   Object.keys(indexes).forEach((key) => {
  //     indexes[key] = checkIndex(indexes[key])
  //   })
  //   setSlideIndexes(indexes)
  // }

  // window.addEventListener("resize", () => {
  //console.log(slideIndexes)
  // })

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)

      applyBreakPoint(windowWidth)
    }

    window.addEventListener("resize", handleResize)
  })

  const style = {
    container:
      props.style.container ||
      cn(
        "w-full",
        "grid",
        "xs:grid-cols-4 xs:gap-2 xs:w-xs",
        "sm:grid-cols-8 sm:gap-4 sm:w-sm",
        "md:grid-cols-8 md:gap-8 md:w-md",
        "lg:grid-cols-12 lg:gap-8 lg:w-lg",
        "xl:grid-cols-12 xl:gap-16 xl:w-xl",
        "mx-auto"
      ),

    itemsContainer:
      props.style.itemsContainer || cn("lg:col-span-8", "xl:col-span-8"),
  }

  return (
    <div className={style.container}>
      <div
        className={cn("col-span-1", "lg:col-start-2", "xl:col-start-2")}
      ></div>
      <div className={style.itemsContainer}></div>
      <div className={cn("col-span-1")}></div>
    </div>
  )
}

export default Carousel
