import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";



const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Finance App",
  description: "Budget and finance manger",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
        <html lang="en">
            <body
                className={`${outfit.variable} `}
            >
            <Toaster />
            {children}
            </body>
        </html>
    </ClerkProvider>
  );
}