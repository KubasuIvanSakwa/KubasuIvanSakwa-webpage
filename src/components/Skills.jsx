import reactImg from '../assets/react.svg'
import jsImg from '../assets/js.svg'
import pyImg from '../assets/python.svg'
import tailwindImg from '../assets/tailwind.svg'

function Skills() {
    const skills = [
        {id: 1, title: 'React', image: `${reactImg}`},
        {id: 2, title: 'Tailwind', image: `${tailwindImg}`},
        {id: 3, title: 'Javasctipt', image: `${jsImg}`},
        {id: 4, title: 'Python', image: `${pyImg}`},
    ]
    return (
        <section 
            id="skills"
            className="w-full h-fit relative"
        >
            <div className="w-full h-fit flex flex-col p-3 mt-[8rem] mb-10">
                <h1
                    className="text-[13px] tracking-[2px] mb-[5px] text-[#aaaaaa] font-[600]  w-full text-center"
                >
                    SKILLS
                </h1>
                <h2 
                    className=" w-full text-center text-[28px] lg:text-[40px] font-[600] text-white leading-6"
                >
                    Skills I Have Aquired So Far
                </h2>
            </div>

            <section className=" h-fit w-full relative flex justify-center items-center mb-[5rem]">
                <section 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, 12rem)',
                        justifyContent: 'center'

                    }}
                    className="w-full h-fit p-2 gap-3 "
                >
                    {skills.map((item) => (
                        <div 
                            key={item.id}
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}
                            className=" h-[13rem] flex flex-col justify-center items-center p-[20px]"
                        >
                            <div>
                                <img src={item.image} className="w-[3rem] opacity-1 grayscale hover:grayscale-0"/>
                            </div>
                            <div className="relative bottom-1">
                                <p className="text-[20px] font-[600] text-[#e6e5e5c0]">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
            <hr 
                style={{
                    height: '0.5px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    weight: '100%',
                    margin: '1rem 0',
                    color: 'inherit',
                    border: '0',
                    opacity: '0.25'
                }}
            />
        </section>
    )
}

export default Skills
