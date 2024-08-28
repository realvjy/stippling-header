import "../styles/globals.scss";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <DefaultSeo
        canonical={SEO.openGraph.url}
        {...SEO}
        additionalMetaTags={[
          {
            name: "keywords",
            content: SEO.openGraph.keywords,
          },
          {
            name: "twitter:image",
            content: SEO.openGraph.images[0].url,
          },
          {
            name: "twitter:title",
            content: SEO.openGraph.title,
          },
          {
            name: "twitter:description",
            content: SEO.openGraph.description,
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
