import ContentZone from "../ui/ContentZone/ContentZone";
import FooterDesktop from "./FooterDesktop/FooterDesktop";
import FooterMobile from "./FooterMobile/FooterMobile";

const Footer = () => {
  return ( 
    <footer>
      <FooterMobile />
      <FooterDesktop />
    </footer>
   );
}
 
export default Footer;