import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./layout";
import GradientBorderPage from "./pages/GradientBorderPage";
import { UnderlinePage as HightlightedTextsPage } from "./pages/HightlightedTextsPage";
import { CollapsiblePage } from "./pages/CollapsiblePage";
import { ScalingImgPage } from "./pages/ScalingImgPage";
import { TypingTextPage } from "./pages/TypingTextPage";
import BackgroundParalax from "./pages/BackgroundParalax";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GradientBorderPage />} />
        <Route path="/underline" element={<HightlightedTextsPage />} />
        <Route path="/collapsible" element={<CollapsiblePage />} />
        <Route path="/scalingImg" element={<ScalingImgPage />} />
        <Route path="/typingText" element={<TypingTextPage />} />
        <Route path="/bgParalax" element={<BackgroundParalax />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
