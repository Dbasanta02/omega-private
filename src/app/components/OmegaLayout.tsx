import OmegaHeader from './OmegaHeader';
import OmegaSidebar from './OmegaSidebar';
import OmegaMainPanel from './OmegaMainPanel';
import OmegaFooter from './OmegaFooter';

export default function OmegaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-zinc-900 via-black to-gray-950 text-neon-cyan font-sans'>
      {/* Header */}
      <OmegaHeader />

      {/* Main Content */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar */}
        <OmegaSidebar />

        {/* Main Panel */}
        <main className='flex-1 p-6 overflow-y-auto'>
          <div className='card-glass mb-6'>
            <OmegaMainPanel />
          </div>
          <div className='card-glass'>
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <OmegaFooter />
    </div>
  );
}
