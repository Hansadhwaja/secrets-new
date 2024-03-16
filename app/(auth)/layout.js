
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";


export const metadata = {
  title: "Secret App",
  description: "Fullstack secret app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex">
        <div className="flex justify-center items-center w-full min-h-screen">
        {children}
        </div>
        </body>
      </html>
    </ClerkProvider>

  );
}
