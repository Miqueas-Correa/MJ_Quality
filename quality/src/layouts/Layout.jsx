import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='min-h-screen w-full flex flex-col items-center justify-center relative top-8 overflow-hidden'>
        <main className='flex-1 2xl:w-full px-0 mx-auto'>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;