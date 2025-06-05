export default function OrdersFeed() {
  return (
    <div className='h-64 overflow-auto'>
      <h3 className='text-lg mb-2 neon-glow'>Orders Feed</h3>
      <table className='w-full text-sm'>
        <thead>
          <tr className='border-b border-neon-purple/30'>
            <th className='px-2 py-1 text-left'>Pair</th>
            <th className='px-2 py-1 text-left'>Price</th>
            <th className='px-2 py-1 text-left'>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-neon-purple/10 transition-all duration-300'>
            <td className='px-2 py-1'>BTC/USDT</td>
            <td className='px-2 py-1'>45000</td>
            <td className='px-2 py-1'>0.5</td>
          </tr>
          <tr className='hover:bg-neon-purple/10 transition-all duration-300'>
            <td className='px-2 py-1'>ETH/USDT</td>
            <td className='px-2 py-1'>3000</td>
            <td className='px-2 py-1'>2.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
