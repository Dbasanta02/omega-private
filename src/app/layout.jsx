export const metadata = {
  title: "Omega Dashboard",
  description: "AI-powered trading core UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
