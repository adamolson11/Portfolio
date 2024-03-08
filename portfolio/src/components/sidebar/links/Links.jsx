/* eslint-disable no-unused-vars */
const Links = () => {
   const items = [
     "Homepage",
     "Services",
     "Portfolio",
     "Contact",
     "About"
   ];
   
   return (
     <div className="links">
       {items.map((item, index) => (
         <a key={index} href={`#${item}`}>
            {item}
         </a>
       ))}
     </div>
   );
}

export default Links;
