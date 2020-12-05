interface PhotoNavProps {
  className?: string
  title?: string
  titleClassName?: string
  items: JSX.Element[]
  itemsContainerStyle?: string
}

const PhotoNav: React.FC<PhotoNavProps> = (props) => {
  return (
    <section className={props.className}>
      <h1 className={props.titleClassName}>{props.title}</h1>
      <nav className={props.itemsContainerStyle}>{props.items}</nav>
    </section>
  )
}

export default PhotoNav
