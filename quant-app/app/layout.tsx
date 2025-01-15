
import "./globals.css";
import "@/src/style/main.css"
import Footer from "@/src/components/Footer";
import AppToolbar from "@/src/components/AppToolbar"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppToolbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
