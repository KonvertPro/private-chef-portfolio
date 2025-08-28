import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import "./index.css"

// Routes (use relative imports to avoid alias issues)
import Home from "./routes/Home.jsx"
import Menus from "./routes/Menus.jsx"
import Services from "./routes/Services.jsx"
import About from "./routes/About.jsx"
import Gallery from "./routes/Gallery.jsx"
import Reviews from "./routes/Reviews.jsx"
import Contact from "./routes/Contact.jsx"

// Simple custom error UI (for thrown errors in a route)
function RouteError() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-2 text-muted">Sorry—this page failed to load. Please try again.</p>
      <a href="/" className="mt-6 inline-block rounded-2xl border border-ink px-6 py-3 hover:bg-ink hover:text-white">
        Back to home
      </a>
    </div>
  )
}

// Catch-all 404 page
function NotFound() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl">Page not found</h1>
      <p className="mt-2 text-muted">We couldn't find that page.</p>
      <a href="/" className="mt-6 inline-block rounded-2xl border border-ink px-6 py-3 hover:bg-ink hover:text-white">
        Back to home
      </a>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />, // custom error UI
    children: [
      { index: true, element: <Home /> },
      { path: "menus", element: <Menus /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "reviews", element: <Reviews /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }, // 404
    ]},
],
{ basename: import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
