import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HireTalent from "./pages/HireTalent";
import Login from "./pages/Login";
import JoinTalent from "./pages/JoinTalent";
import AboutUs from "./pages/AboutUs";
import OtherSolutions from "./pages/OtherSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hire-talent" element={<HireTalent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join-talent" element={<JoinTalent />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/other-solutions" element={<OtherSolutions />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;