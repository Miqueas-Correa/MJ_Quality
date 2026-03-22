import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-[100dvh] w-full flex flex-col items-center justify-center relative top-8 overflow-hidden'>
      <main className='flex-grow 2xl:w-full px-0 mx-auto'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;