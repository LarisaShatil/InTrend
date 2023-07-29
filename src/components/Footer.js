import { Link } from "@chakra-ui/react";

const Footer = () => {

  return (
    <footer>
      <Link href="https://github.com/LarisaShatil"
        target="_blank" fontWeight='700' color='blue.700' _hover={{ color: 'white' }} >      2023 &copy; Larisa Shatillo
      </Link>
    </footer>
  );
};

export default Footer;