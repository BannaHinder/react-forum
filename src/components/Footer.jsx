const Footer = () => {

    const scroll = ()=>{
        window.scroll(0, 0)
    }

    return ( 
        <footer>
            <button onClick={()=>{scroll()}}>Go to top</button>
        </footer>
     );
}
 
export default Footer;