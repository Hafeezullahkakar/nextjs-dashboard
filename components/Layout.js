import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({children}) {
  return (
    <div className="bg-[#d7e1ee] flex min-h-screen min-w-fit py-5">
      <Navigation />
      <main className="p-5 grow bg-white my-2 mr-2 rounded-3xl">
        {children}
      </main>
    </div>
  );
}