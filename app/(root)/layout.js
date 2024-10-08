
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "@/components/Shared/Navbar";
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Secret App",
  description: "Fullstack secret app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-[#EEEEEE]">
        <Navbar />
        {children}
        <Toaster />
        </body>
     
      </html>
    </ClerkProvider>

  );
}
