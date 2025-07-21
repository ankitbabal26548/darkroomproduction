
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminLayout } from "./components/AdminLayout";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminCollections } from "./pages/AdminCollections";
import { AdminCollectionNew } from "./pages/AdminCollectionNew";
import { AdminCollectionEdit } from "./pages/AdminCollectionEdit";
import { AdminCollectionImages } from "./pages/AdminCollectionImages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="collections" element={<AdminCollections />} />
              <Route path="collections/new" element={<AdminCollectionNew />} />
              <Route path="collections/:id/edit" element={<AdminCollectionEdit />} />
              <Route path="collections/:id/images" element={<AdminCollectionImages />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
