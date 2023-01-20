import React from 'react';
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error ('Failed to find the root element');
const root = createRoot(rootElement)

const queryCache = new QueryClient({
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
          retry: false,
      },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCache}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  </React.StrictMode>
);
