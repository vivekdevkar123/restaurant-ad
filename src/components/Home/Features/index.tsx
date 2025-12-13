"use client"
import Image from 'next/image';
import { FeaturesData } from '@/app/api/data';

const Features = () => {
    return (
        <section className='py-16 bg-gray-50 dark:bg-gray-900'>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4' id="about-section">
                <div className='text-center mb-16' >
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>What We Offer</p>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white mx-auto max-w-3xl'>Discover Our Special Features</h2>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {FeaturesData.map((items, i) => (
                        <div 
                            className='group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2' 
                            key={i}
                        >
                            {/* Image Container */}
                            <div className='relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5'>
                                <Image 
                                    src={items.imgSrc} 
                                    alt={items.heading} 
                                    width={400} 
                                    height={300} 
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                                />
                                {/* Overlay on hover */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>
                            
                            {/* Content */}
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300'>
                                    {items.heading}
                                </h3>
                                <p className='text-base font-normal text-gray-600 dark:text-gray-400 leading-relaxed'>
                                    {items.subheading}
                                </p>
                            </div>

                            {/* Decorative accent */}
                            <div className='absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;
