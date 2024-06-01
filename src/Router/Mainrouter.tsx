import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import Hero from "../Pages/Hero";
import Upload from "../Pages/Upload";

export const Mainrouter = createBrowserRouter (
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index : true,
                    element: <Hero/>
                }
            ]
        },
        {
            path: "upload-book",
            element: <Upload/>,
        }
    ]
);