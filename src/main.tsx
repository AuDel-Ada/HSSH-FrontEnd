import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const wagmiClient = createClient(
  getDefaultClient({
    appName: 'ConnectKit Vite Demo',
    // alchemyId: process.env.ALCHEMY_ID,
    //infuraId: process.env.INFURA_ID,
  })
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCache}>
      <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
          <ConnectKitProvider
            theme="midnight"
            options={{
              embedGoogleFonts: true,
            }}
          >
            <App />
          </ConnectKitProvider>
        </WagmiConfig>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
