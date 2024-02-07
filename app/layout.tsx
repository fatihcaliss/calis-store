import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import Providers from '@/components/Providers';
import ToastProvider from '@/components/ToastProvider/toast.provider';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import { Footer } from '@/components/Footer/Footer';

export const metadata = {
  title: 'CaliStore',
  description: 'I am using Mantine with Next.js!',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <ReactQueryProvider>
            <ToastProvider>
              <MantineProvider theme={theme} defaultColorScheme="dark">
                <HeaderMegaMenu />
                {children}
                <Footer />
              </MantineProvider>
            </ToastProvider>
          </ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
