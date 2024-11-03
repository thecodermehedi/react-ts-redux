import { decrement, decrementBy, increament, increamentBy } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

const HomePage: React.FC = () => {
 const dispatch = useAppDispatch();
 const { count } = useAppSelector((state) => state.counter);

 return (
  <main className='h-screen flex justify-center items-center bg-gray-100'>
   <div className="flex justify-between items-center gap-28">
    <div className="flex flex-col items-center justify-center gap-8">
     <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={() => dispatch(decrement())}>- 1</button>
     <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      onClick={() => dispatch(increament())}>+ 1</button>
     <button className='bg-purple-500 text-white rounded hover:bg-purple-600 px-4 py-2'
      onClick={() => dispatch(increamentBy(5))}
     >+ 5</button>
     <button className='bg-indigo-500 text-white rounded hover:bg-indigo-600 px-4 py-2'
      onClick={() => dispatch(decrementBy({ value: 5 }))}
     >- 5</button>
    </div>
    <h1 className="text-7xl font-bold text-center mt-8 p-10">{count}</h1>
   </div>
  </main>
 );
};

export default HomePage;
