import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <style>{`
          body {
            zoom: 0.9; /* Set zoom level to 90% */
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          /* Ensure consistent box-sizing for all elements */
          *, *::before, *::after {
            box-sizing: border-box;
          }

          /* Handle older browsers and mobile browsers */
          @media only screen and (max-width: 600px) {
            body {
              zoom: 0.85; /* Adjust zoom level for mobile devices */
            }
          }
        `}</style>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
