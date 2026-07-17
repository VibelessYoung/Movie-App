import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { FavoritesProvider } from "./context/FavoritesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="min-h-screen flex flex-col bg-zinc-950">
        <FavoritesProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
