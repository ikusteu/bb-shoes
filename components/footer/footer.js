import FooterEntry from './footerEntry/footerEntry'

const Footer = () => {
    const entries = [
        {
            title: "Collections",
            items : [ "Gentleman's Indispensible", "Urban Twist", "Wild, Wild West", "Accessories" ]
        },
        {
            title: "Info",
            items : [ "Return Policy", "Shipping", "Payment methods", "Sizes" ]
        },
        {
            title: "Contact Us",
            items : [ "Phone: 099/8653-414", "E-mail: bb-shoes@gmail.com", "Adress: Ilica 21, Zagreb, Croatia" ]
        },
    ]

    return (
        <footer>
                {
                    entries.map( entry => 
                    <FooterEntry key={entry.title} title={entry.title} items={entry.items} />
                    )
                }
        </footer>
    )
}

export default Footer;