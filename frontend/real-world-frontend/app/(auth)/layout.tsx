import Header from "@/app/components/header"
import "../globals.css"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-1">
        <Header />
        {children}
      </main>
    </>
  );
}
