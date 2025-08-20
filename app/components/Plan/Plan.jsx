import React from 'react'

const Plan = () => {
const plans = [
  {
    title: "2 Months",
    price: "$29",
    features: [
      { text: "Basic Support", included: true },
      { text: "Limited Access", included: true },
      { text: "Advanced Features", included: false },
      { text: "Priority Support", included: false },
    ],
  },
  {
    title: "6 Months",
    price: "$79",
    features: [
      { text: "Basic Support", included: true },
      { text: "Full Access", included: true },
      { text: "Advanced Features", included: true },
      { text: "Priority Support", included: false },
    ],
  },
  {
    title: "1 Year",
    price: "$149",
    features: [
      { text: "Basic Support", included: true },
      { text: "Full Access", included: true },
      { text: "Advanced Features", included: true },
      { text: "Priority Support", included: true },
    ],
  },
];


  return (
   <div className="w-full">
         <div className="w-[60%] mx-auto py-15">
           {/* Heading Section */}
           <div className="text-center">
             <h1 className="text-[30px] font-semibold">Meet Our Team Members</h1>
             <div className="w-[90px] h-[3px] bg-[#d9326f] my-3 mx-auto"></div>
             <p className="text-center w-[70%] mx-auto pb-5">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
               laboriosam quisquam, nobis suscipit placeat accusamus. Odit odio
               enim repudiandae maiores?
             </p>
           </div>
   
           {/* Team Cards */}
<div className="w-full mx-auto flex gap-x-6">
  {plans.map((plan, index) => (
    <div
      key={index}
      className="w-1/3  rounded shadow-lg hover:shadow-2xl transition flex flex-col bg-white"
    >
      {/* Title + Price in one line */}
      <div className="text-center mb-4 bg-[#d9326f]  px-8 py-6 ">
        <h2 className="text-xl font-semibold text-gray-800 flex  items-center gap-2">
             <span className="text-white font-bold text-[35px]">{plan.price}</span>
                <span className="text-white">/</span>
          <span className='text-white'>{plan.title}</span>
       
         
        </h2>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center  gap-2 py-2 px-8 text-gray-700"
          >
            <span
              className={`font-bold ${
                feature.included ? "text-[#d9326f]" : "text-[#d9326f]"
              }`}
            >
              {feature.included ? "✔" : "✖"}
            </span>
            {feature.text}
          </li>
        ))}
      </ul>

      {/* Button */}
       <div className='flex items-center justify-start mx-8'>

         <button className="my-10 text-[#d9326f] bg-white py-2 px-4 border border-[#d9326f] hover:text-white font-medium hover:bg-[#b22556] transition">
        Register Now
      </button>

       </div>
    </div>
  ))}
</div>



         </div>
       </div>
  )
}

export default Plan