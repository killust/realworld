import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import "./globals.css"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <head>
            <meta charSet="utf-8" />
            <title>Conduit</title>
            <link
                href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
                rel="stylesheet"
                type="text/css"
            />
        </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
