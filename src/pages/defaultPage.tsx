

const defaultPage = () => {
 return (
  <main className="min-h-screen flex flex-col gap-8 justify-center items-center text-3xl font-bold">
   <div className='flex justify-between items-center gap-8'>
    <img src="react.svg" alt="react-logo" className='size-16 ease-linear duration-500 hover:animate-spin cursor-pointer' />
    <img src="redux.svg" alt="redux-logo" className='size-16 ease-linear duration-500 hover:animate-spin cursor-pointer' />
   </div>
   <p className=" border-b-2 border-transparent hover:border-black leading-10 cursor-pointer">React + Redux</p>
  </main>
 );
};

export default defaultPage;
