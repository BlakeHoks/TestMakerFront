import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/index";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Provider store={store}>
                  <App/>
              </Provider>
          </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
);
