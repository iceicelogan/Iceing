import { HomeIcon, FileText } from "lucide-react";
import Index from "./pages/Index.jsx";
import Resume from "./pages/Resume.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Resume",
    to: "/resume",
    icon: <FileText className="h-4 w-4" />,
    page: <Resume />,
  },
];