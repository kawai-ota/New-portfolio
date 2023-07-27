import type { AppProps } from 'next/app'
import "@/scss/index.scss"
import {Raleway,Fira_Code} from "next/font/google";

const raleway = Raleway({subsets:["latin"]});
const fireCode = Fira_Code({
  subsets:["latin"],
  weight:["300","400","500","600","700"],
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <style jsx global>
      {`
        :root {
          --raleway:${raleway.style.fontFamily};
          --fira-code:${fireCode.style.fontFamily};
        }
      `}
    </style>
      <Component {...pageProps} />
    </>
  )
}
