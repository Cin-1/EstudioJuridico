import Head from "next/head";
import Header from '../components/header';
import IndexHome from '../components/indexhome';
import Services from '../components/services';
import Quotes from '../components/quotes';
import Footer from '../components/footer';
import theme from "../components/theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Estudio Juridico</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <IndexHome />
        <Services />
        <Quotes />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
