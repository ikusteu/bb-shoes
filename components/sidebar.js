import cn from "classnames"
import SidebarNav from "./sidebarNav"

const Sidebar = (props) => {
  const styles = {
    container: props.styles.container || cn("w-20", "h-full"),
  }

  const navStyles = {
    container: cn("block", "sticky", "top-0", "col-span-1", "col-start-2"),
    text: "mt-4 mb-2 text-xl font-semibold",
    subText: "leading-8",
  }

  const navItems = [
    {
      main: "Item1",
      sub: ["subItem1", "subItem2", "subItem3", "subItem4", "subItem5"],
    },
    {
      main: "Item2",
      sub: ["subItem1", "subItem2"],
    },
    {
      main: "Item3",
      sub: ["subItem1", "subItem2", "subItem3", "subItem4"],
    },
    {
      main: "Item4",
      sub: ["subItem1", "subItem2", "subItem3"],
    },
    {
      main: "Item5",
      sub: ["subItem1", "subItem2", "subItem3", "subItem4", "subItem5"],
    },
  ]

  return <div className={styles.container}></div>
}

export default Sidebar
{
  /* <SidebarNav items={navItems} styles={navStyles} /> */
}
