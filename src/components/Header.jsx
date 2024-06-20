import React from 'react'

const Header = () => {
  return (
    <div id='pocetak' style={{ backgroundPosition: window.innerWidth < 1024 && '100% 50%' }} className=' text-white bg-[url(/./assets/images/landing-img.png)] flex flex-col gap-y-12 justify-center items-start px-4 lg:px-36 bg-no-repeat bg-cover h-screen w-full'>
        <div className="absolute inset-0 w-full h-full backdrop-blur-sm lg:backdrop-blur-md"></div>
        <h1 style={{textShadow: '1px 1px 10px #000',}} className='text-2xl lg:text-4xl font-black z-10'>Vaš Sledeći Pametni Telefon Vas Čeka!</h1>
        <h2 className='z-10'>Istražite našu široku ponudu pametnih telefona i dodataka. <br /> Kvalitet, performanse i pristupačnost na jednom mestu.</h2>
    </div>
  )
}

export default Header