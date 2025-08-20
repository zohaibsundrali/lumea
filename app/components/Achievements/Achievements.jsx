import React from 'react'

const Achievements = () => {
  return (
<div
  className="relative w-full h-[200px] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg')",
  }}
>
  {/* Red overlay */}
  <div className="absolute inset-0 bg-[#d9326f]/90"></div>

  {/* Content (4 boxes with justify-between) */}
  <div className="relative z-10 w-[60%] mx-auto h-full flex items-center justify-between text-center">
    {/* Box 1 */}
    <div>
      <h2 className="text-[55px] font-semibold text-white">30</h2>
      <p className="text-white text-sm">Years of Experience</p>
    </div>

    {/* Box 2 */}
    <div>
      <h2 className="text-white text-[55px]  font-bold">45+</h2>
      <p className="text-white text-sm">Expert Consultants</p>
    </div>

    {/* Box 3 */}
    <div>
      <h2 className="text-white text-[55px]  font-bold">100+</h2>
      <p className="text-white text-sm">Activated Clients</p>
    </div>

    {/* Box 4 */}
    <div>
      <h2 className="text-white text-[55px]  font-bold">150+</h2>
      <p className="text-white text-sm">Projects Finished</p>
    </div>
  </div>
</div>


  )
}

export default Achievements;