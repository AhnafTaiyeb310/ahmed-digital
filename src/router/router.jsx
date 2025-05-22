import { createBrowserRouter } from "react-router";
import Root from "../layout/root";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

const myRouter = createBrowserRouter([
    {path:"/", element:<Root/>, children:[
        {path:"/", element:<Home/>},
        {path:"/projects", element:<Projects/>},
        {path:"/about", element:<About/>},
        {path:"/contact", element:<Contact/>},
    ] }
])

export default myRouter