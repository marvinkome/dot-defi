import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "theme";

const LayoutDefault = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

type ExtentedAppProps = AppProps & {
  Component: AppProps["Component"] & { Layout?: () => JSX.Element };
};
function App({ Component, pageProps }: ExtentedAppProps) {
  const Layout = Component.Layout || LayoutDefault;
  const layoutProps = pageProps.layoutProps || {};

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Dot Defi</title>
      </Head>

      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
