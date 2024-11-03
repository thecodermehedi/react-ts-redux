import { useRouteError } from 'react-router-dom';

type RouteError = {
 statusText?: string;
 message?: string;
};

const ErrorPage = () => {
 const error = useRouteError() as RouteError;
 console.error(error);

 return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
   <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
   <p className="text-xl text-gray-700 mb-4">Sorry, an unexpected error has occurred.</p>
   <p className="text-lg text-gray-600">
    <i>{error.statusText || error.message}</i>
   </p>
  </div>
 );
};
export default ErrorPage;
