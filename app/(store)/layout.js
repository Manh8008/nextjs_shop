import { MainLayout } from './layouts/MainLayout';
import Providers from '../redux/provider';
import '../assets/css/main.css';
import '../assets/css/grid.css';
import '../assets/css/form.css';

export const metadata = {
    charSet: 'utf8',
    title: 'IVY moda',
    description: 'Mô tả',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet={metadata.charSet} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
                <link
                    rel="icon"
                    href="https://pubcdn.ivymoda.com/ivy2/images/logo-icon.ico"
                    type="image/png"
                    sizes="16x16"
                ></link>
            </head>

            <body suppressHydrationWarning={true}>
                <Providers>
                    <MainLayout>{children}</MainLayout>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
