'use client';

export default function AssistantChat() {
  return (
    <div className='fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-80'>
      <div className='text-sm'>Omega AI</div>
      <div className='text-xs text-gray-400'>Hi! I am Omega. How can I assist you?</div>
      <input
        type='text'
        placeholder='Ask Omega...'
        className='mt-2 w-full px-2 py-1 rounded bg-black border border-gray-600 text-white'
      />
    </div>
  );
}
