import React from 'react'

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      {/* This is an event handler attached to the button. It specifies the action to be taken when the button is clicked. It uses the window.open() function to open a new browser window or tab with the URL "https://github.com/TidbitsJS/Summize". The _blank parameter specifies that the URL should be opened in a new tab. */}
      <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
     </nav>
     {/* <br /> is line break element which is self closing. <span> is an inline HTML element used to group and apply styles to a specific portion of text. */}
     <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
     </h1>
     <h2 className='desc'>
      <p>
        Simplify your reading like never before!<br />
        Use Sumz, an innovative open-source article summarizer that effortlessly condenses extensive articles into captivating, crystal-clear summaries.
      </p>       
     </h2>
    </header>
  )
}

export default Hero