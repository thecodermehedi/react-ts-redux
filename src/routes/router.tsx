import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/Homepage";

const router = createBrowserRouter([
 {
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
   {
    index: true,
    element: <HomePage />
   }
  ]
 },
])

export default router;
