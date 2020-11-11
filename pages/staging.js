import PhotoNav from "../components/photoNav";
import cn from "classnames";

const Staging = () => {
  const items = [
    {
      title: "Shoes",
      image: "/images/meet-bruno.jpeg",
      link: "/",
    },
    {
      title: "Boots",
      image: "/images/meet-bruno.jpeg",
      link: "/",
    },
    {
      title: "Accessories",
      image: "/images/meet-bruno.jpeg",
      link: "/",
    },
  ];

  return (
    <>
      <PhotoNav
        title="Shop by Model"
        items={items}
        imgRatio="portrait"
        //itemStyles="border-2 rounded-md border-primary border-solid"
        displayText="over"
        innerPadding={cn()}
        textStyles={cn()}
      />
      <div className="w-full h-48 border-1 border-solid border-black"></div>
    </>
  );
};

export default Staging;
