import Head from "next/head";
import theme from "../components/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Estudio Juridico</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Button color="secondary" variant="contained">
          efjufhndawdrhjnu
        </Button>
        <h1> Pagina Abogados</h1>
      </ThemeProvider>
    </div>
  );
}
