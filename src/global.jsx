import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import Dialog from "@/components/Dialog/index.js";

export default function (props) {
  const {
    url,
    children,
    title,
    description = 'Glidy delivers trusted international payment solutions for businesses and individuals, ensuring fast and secure transactions, along with specialized services for gaming, digital vouchers, and a wide range of digital products.'
  } = props

  return (
    <>
        <Head htmlAttributes={{ lang: 'en' }}>
            <title>Glidy : {title}</title>
            <meta name="description" content={description} />

            <script
                src="https://www.google.com/recaptcha/api.js?render=6Lf0QBosAAAAABP8ORsjcSgeeGKg3ko5u2EkSUfQ"
                async
                defer
            ></script>
            <script src="/src/main.js" type="module" />

            {/* Apple touch icons */}
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="apple-touch-icon" href="/apple-icon.png" />

            {/* Android icons */}
            <link rel="icon" type="image/png" sizes="36x36" href="/android-icon-36x36.png" />
            <link rel="icon" type="image/png" sizes="48x48" href="/android-icon-48x48.png" />
            <link rel="icon" type="image/png" sizes="72x72" href="/android-icon-72x72.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/android-icon-96x96.png" />
            <link rel="icon" type="image/png" sizes="144x144" href="/android-icon-144x144.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />

            {/* Favicon */}
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="shortcut icon" href="/favicon.ico" />

            {/* Microsoft Tiles */}
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            {/* Web manifest */}
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
            <Header url={url}/>
            <Content>
                {children}
            </Content>
            <Footer />
        <Dialog />
    </>
  )
}
