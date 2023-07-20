import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <div className='flex items-center'>
      <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
      <h1 className='head2_text mb-8 pl-5'>C Sumz</h1>
    </div>

        <button
          type="button"
          onClick={() => window.open('https://github.com/Charan1303/ai_summarizer')}
          className='black_btn'
          >
          Github 
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Using Artificial Intelligence to summarize your reading with Summize,
        an open-source article summarizer. It saves you a lot of time by narrowing down the article
        with concise summaries

      </h2>
      
      </header>
  )
}

export default Hero