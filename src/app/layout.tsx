import './globals.css';

export const metadata = {
  title: 'Omega Dashboard',
  description: 'AI-Powered Omega',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
