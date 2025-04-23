import React from 'react'

const Subfooter = () => {
  return (
    <div
      id="subfooter"
      className={`z-[9999999] overflow-hidden flex justify-center py-4  text-xs lg:text-xl text-nowrap bg-[url(/./assets/images/bg-mirror2.png)] bg-no-repeat bg-left bg-cover text-white`}
      style={{ backgroundPosition: window.innerWidth < 1024 && '50% 50%' }}
    >

    </div>
  )
}

export default Subfooter