export default function OmegaSidebar({ className = '' }: { className?: string }) {
  return (
    <aside className={`w-64 h-full bg-gray-900 text-white p-4 ${className}`}>
      <nav>
        <ul className="space-y-4">
          <li>📊 Dashboard</li>
          <li>📈 Analytics</li>
          <li>⚙️ Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
