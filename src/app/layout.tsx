import './globals.css'; // 

import OmegaLayout from './components/OmegaLayout';

export const metadata = {
  title: 'Omega AI Dashboard',
  description: 'The most advanced AI trading interface ever built.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <OmegaLayout />
      </body>
    </html>
  );
}
