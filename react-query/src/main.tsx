import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import App from './App';
import './index.css';

// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             retry: 3,
//             staleTime: 10 * 1000, // 10s
//             gcTime: 300000, // 5m
//             refetchOnWindowFocus: false,
//             refetchOnReconnect: false,
//             refetchOnMount: false
//         }
//     }
// });

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
            <App />
          <ReactQueryDevtools/>
      </QueryClientProvider>
  </React.StrictMode>
);
