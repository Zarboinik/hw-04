import React from "react";
import ReactDOM from 'react-dom/client';

import App from "./components/App"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import './styles/index.styles.scss'
import Category from "./components/category/Category";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({})

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className='main-content'>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/category" element={<Category/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
