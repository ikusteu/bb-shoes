import { useState } from "react"

const useBreakpoint = (options) => {
  const breakPoints = Object.keys(options.breakPoints)

  const [currentBreakPoint, setCurrentBreakPoint] = useState(breakPoints[0])

  // const findBreakPointIndex = (width, breakPointIndex) => {
  //   if (width < +breakPoints[breakPointIndex - 1]) {
  //     return findBreakPoint(width, breakPointIndex - 1)
  //   } else if (width > +breakPoints[breakPointIndex]) {
  //     return findBreakPoint(width, breakPointIndex + 1)
  //   } else {
  //     return breakPointIndex
  //   }
  // }

  const findBreakPoint = (width) => {
    console.log(breakPoints.indexOf(currentBreakPoint))
    setCurrentBreakPoint(
      breakPoints[breakPoints.indexOf(currentBreakPoint) + 1]
    )

    console.log(breakPoints.indexOf(currentBreakPoint))
    // const currentIndex = findBreakPointIndex(
    //   width,
    //   breakPoints.indexOf(currentBreakPoint)
    // )
    // setCurrentBreakPoint(breakPoints[currentIndex])
    // console.log(currentIndex)
    // console.log(`current Breakpoint: ${currentBreakPoint}`)
  }

  const applyOptions = (width) => {
    findBreakPoint(width)
  }

  // const applyOptions = (
  //   width,
  //   setNumItems,
  //   updateSlideIndexes,
  //   slideIndexes
  // ) => {
  //   findBreakPoint(width)
  //   const numItems = options.breakPoints.currentBreakPoint.numItems
  //     ? options.breakPoints.currentBreakPoint.numItems
  //     : options.numItems
  //   setNumItems(numItems)
  //   updateSlideIndexes({
  //     ...slideIndexes,
  //     previousSlideIndex: slideIndexes.currentSlideIndex - numItems,
  //     nextSlideIndex: slideIndexes.currentSlideIndex + numItems,
  //   })
  // }

  return [applyOptions]
}

export default useBreakpoint
