// local interfaces
interface UnderConstructionProps {
  close: (a: boolean) => void
}

import { motion } from "framer-motion"
// import from local components
import Button from "./button"

const UnderConstruction: React.FC<UnderConstructionProps> = ({ close }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.125, ease: "easeOut" }}
    >
      <div
        onClick={() => close(false)}
        style={{ backgroundColor: "rgba(0,0,0,0.05)", zIndex: 100 }}
        className="fixed top-0 w-screen h-screen flex items-center justify-center"
      ></div>
      <div
        style={{
          position: "fixed",
          zIndex: 150,
          top: "30%",
          left: "30vw",
          width: "40vw",
          height: "16rem",
          padding: "1rem",
        }}
        className="bg-gray-100 border-primary-100 border-2 rounded-lg"
      >
        <div className="w-full text-2xl">Well this is embarrasing...</div>
        <div className="w-full my-8 text-lg">
          It appears that this part of the site is still under construction
        </div>
        <Button
          className="mt-12 text-2xl px-4"
          text="Click to go back"
          onClick={() => close(false)}
        />
      </div>
    </motion.div>
  )
}

export default UnderConstruction
