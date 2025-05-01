import React from 'react'

const Header = () => {
  return (
    <div id='pocetak' style={{ backgroundPosition: window.innerWidth < 1024 && '50% 50%' }} className=' text-white flex flex-col gap-y-12 justify-center items-start px-4 lg:px-36 bg-[url(/./assets/images/landing-img.png)] bg-no-repeat bg-cover h-screen w-full'>
        {/* <div className="absolute inset-0 w-full h-full backdrop-blur-sm lg:backdrop-blur-md"></div> */}
        <h1  className='text-2xl lg:text-6xl font-black z-10 w-4/6 lg:w-1/2 text-left'>Univerzum Mobilnih Savršenstava na Dohvat Ruke</h1>
        <h2 className='z-10 text-sm lg:text-xl text-left'>Otkrijte vrhunsku tehnologiju u našem salonu <br /> - gde svaki uređaj dobija pažnju koju zaslužuje, <br /> a svaki klijent izlazi sa osmehom.</h2>
        <div className="absolute bottom-3 right-0 left-0 flex items-center justify-center">
          <a
            href="#ajfon15"
            aria-label="Read more"
            className="flex justify-center w-[25px] h-[45px] border-2 rounded-xl cursor-pointer mini-mouse hover:border-primary group"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="bg-white rounded-full w-[5px] h-[8px] mt-2 mini-mouse-scroll group-hover:bg-primary"></div>
          </a>
        </div>
    </div>
  )
}

export default Header