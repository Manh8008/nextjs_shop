import MainLayOut from './layouts/MainLayout/Mainlayout';
import Providers from '@/redux/provider';
import '../../../public/css/main.css';
import '../../../public/css/grid.css';
import '../../../public/css/form.css';

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
                    <MainLayOut>{children}</MainLayOut>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
