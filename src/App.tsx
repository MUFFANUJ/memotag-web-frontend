
import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";

// Create a new query client that will show the preloader on loading states
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [globalLoading, setGlobalLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      const queries = queryClient.getQueryCache().getAll();
      const isLoading = queries.some(query => query.state.fetchStatus === 'fetching');
      setGlobalLoading(isLoading);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader loading={initialLoading} size="large" />
        {globalLoading && <Preloader loading={globalLoading} size="medium" />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
