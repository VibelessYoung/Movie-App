import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="min-h-screen flex flex-col bg-zinc-950 light:bg-white">
        <FavoritesProvider>
          <ThemeProvider>
            <Header />
            <section className="flex-1">{children}</section>
            <Footer />
          </ThemeProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
