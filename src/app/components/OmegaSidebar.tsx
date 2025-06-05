export default function OmegaSidebar() {
  return (
    <aside className='w-64 bg-black bg-opacity-30 text-neon-blue p-4 border-r border-gray-700'>
      <nav className='space-y-4'>
        <a href='#' className='block hover:text-neon-green transition-colors'>Home</a>
        <a href='#' className='block hover:text-neon-green transition-colors'>Analytics</a>
        <a href='#' className='block hover:text-neon-green transition-colors'>Trading Logs</a>
        <a href='#' className='block hover:text-neon-green transition-colors'>Settings</a>
      </nav>
    </aside>
  );
}
