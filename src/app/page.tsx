import { Container } from "@mui/material";
import Header from "@/pages/Header/Header";
import Footer from "@/pages/Footer/Footer";
import styles from "./page.module.css";
import Nav from "@/pages/Nav/Nav";
import Content from "@/pages/Content/Content";

export default function Home() {
  return (
    <Container className={styles.container}>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </Container>
  );
}
