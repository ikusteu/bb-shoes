A front end for a shoe maker webshop (BB-Shoes)

Folder architecture

-archive--contains archived components for rework or trash
-components--components folder, since all style is in PostCSS/TailwindCSS there is no need for subfolders ATM
-contexts--global state contexts ie. shoping cart and filtered view of the webshop products
-customHooks--only one ATM, useBreakpoint.js for carousel.js to add breakpoint options, bugged and not in use
-pages--nextjs default folder for MPA pages with default '/pageName' routing
-public--static asset folder, only images ATM
-styles--contains globals.scss where Tailwind is improrted and some global classes are declared
