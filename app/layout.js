import Header from "./components/Header";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
