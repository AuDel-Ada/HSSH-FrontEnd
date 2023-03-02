import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
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
    })
  );

  return (
    <QueryClientProvider client={queryCache}>
      <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
          <ConnectKitProvider
            theme="midnight"
            options={{
              embedGoogleFonts: true,
            }}
          >
            {children}
          </ConnectKitProvider>
        </WagmiConfig>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export default customRender;
