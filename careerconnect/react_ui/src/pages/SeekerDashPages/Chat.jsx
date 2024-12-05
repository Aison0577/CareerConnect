import React from 'react'

function Chat() {
  return (
    <div className='h-screen w-full flex flex-col md:flex-row bg-black'>
        <div className='p-2 w-full md:w-[20%] h-full bg-slate-950 '>
            hello
        </div>
        <div className='p-2 hidden md:block md:flex-1 md:h-full bg-white'>
            Down
        </div>
    </div>
  )
}

export default Chat
