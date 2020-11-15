import Shop from "../public/components/shop"
import cn from "classnames"

const Staging = () => {
  return (
    <div className="h-screen">
      <div className="h-32 bg-secondary-900 border-primary-700 border-b-solid border-b-2 fixed z-10 w-full"></div>
      <div className="w-1/5 h-screen bg-secondary-200 border-r-2 border-solid border-secondary-500 block fixed top-1/5"></div>
      <Shop
        rows={4}
        cols={3}
        containerStyle=" px-20 pt-4 w-4/5 relative top-1/5 left-1/5"
      />
    </div>
  )
}

export default Staging
