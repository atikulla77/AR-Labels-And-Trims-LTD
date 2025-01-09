import portfolio from "../../../Assets/portfolio-2.jpg"

const Portfolio = () =>
{
    const portfolioItems = [
        {
            image: portfolio,
            title: 'Summer Collection',
        },
        {
            image: portfolio,
            title: 'Winter Wear',
        },
        {
            image: portfolio,
            title: 'Sports Apparel',
        },
        {
            image: portfolio,
            title: 'Casual Line',
        },
    ];
  return (
      <section className="pb-[1rem] bg-white GeologicaFont">
          <div className="container mx-auto [@media(min-width:460px)]:px-6 px-0">
              <h2 className="sm:!text-3xl [@media(min-width:460px)]:text-[26px] text-[22px] font-semibold text-center text-gray-800">Our Portfolio</h2>
              <div className="mt-8 flex flex-wrap justify-center items-center">
                  {portfolioItems.map((item, index) => (
                      <div key={index} className="relative flex [@media(min-width:460px)]:px-[10px] px-0 py-[10px]">
                          <img src={item.image} alt={item.title} className="w-[280px] h-[280px] object-cover rounded-md shadow-[0px_0px_6px_0px_#00000021]" />
                          <div className="absolute w-[280px] h-[280px] bg-[#ffffffb8] flex items-center rounded-md justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <span className="text-black text-lg">{item.title}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Portfolio
