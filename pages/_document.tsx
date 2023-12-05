import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";
import Router from "next/router";


export default function Document() {
  return (
    <Html lang="en">
      
      <Head />

      <body className='bg-stone-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
