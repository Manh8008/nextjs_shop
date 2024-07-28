import "../../../public/css/styleAdmin.css";
import SidebarLeft from "@/components/admin/SidebarLeft";
import SidebarTop from "@/components/admin/Sidebar";
import HeadTitle from "@/components/admin/HeadTitle";
export const metadata = {
    title: "Admin",
    description: "Đây là trang quản trị",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

            </head>

            <body suppressHydrationWarning={true}>
                <SidebarLeft />
                <section id="content">
                    <SidebarTop />
                    <main>
                        <HeadTitle />

                        {children}
                    </main>
                </section>

            </body>
        </html>
    );
}
