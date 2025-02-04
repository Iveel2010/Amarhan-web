import {
    Heart,
    Send,
    MessageSquare,
    Bookmark,
    Home,
    Search,
    PlusSquare,
    User,
    Sun,
    Moon,
    Cog,
  } from "lucide-react";
  import { CreatePost } from "./createPost";
  import { useRouter } from "next/navigation";
  import { useState, useEffect } from "react";
  import { jwtDecode } from "jwt-decode";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
    const router = useRouter();
    const theme = localStorage.getItem("theme");
    useEffect(() => {
      if (theme === "dark") {
        setIsDarkMode(true);
      }
    }, []);
  
    return (
      <header>
        <div
          className={`w-full flex items-center p-2 bottom-0 fixed justify-around ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
          
        >
     
<div>
    
</div>
        </div>
      </header>
    );
  };
  export default Header;
  