import Head from 'next/head'

export default () => (
  <div>
    <Head>
      {/* The first thing in any HTML file should be the charset */}
      <meta charSet="utf-8" />

      {/* Make the page mobile compatible */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
      />

      {/* Allow installing the app to the homescreen */}
      <meta name="mobile-web-app-capable" content="yes" />

      <link rel="icon" href="/favicon.ico" />
      <title>Health Management</title>
    </Head>
  </div>
)
