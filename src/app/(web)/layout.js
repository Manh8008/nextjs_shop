import { Header, Footer } from '@/components'
import Providers from '@/redux/provider'
import '../../../public/css/main.css'
import '../../../public/css/grid.css'
import '../../../public/css/form.css'


export const metadata = {
  charSet: 'utf8',
  title: 'Trang chủ',
  description: 'Mô tả',
}

const RootLayout = ({ children }) => {
  return (

    <html lang="en" >
      <head>
        <meta charSet={metadata.charSet} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>

      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="main">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
