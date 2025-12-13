"use client"
import Image from 'next/image';
import Link from 'next/link';
import { imageUrl } from '@/utils/publicPath';
import { Icon } from "@iconify/react";


const Cook = () => {

    return (
        <section className='relative' id="cook-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 lg:space-x-5 gap-8 lg:gap-0'>
                    <div className='col-span-6 flex justify-start px-4 lg:px-0'>
                        <Image src={imageUrl('/images/cook/cook.jpg')} alt="Chef Sopu cooking biryani" width={636} height={808} className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 w-full h-auto" />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center px-4 lg:px-0'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>BIRYANI CRAFT</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                            Learn the art of biryani from Chef Sopu
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>Chef Sopu prepares each biryani with layered rice, marinated meat, and a secret blend of spices. Our process celebrates slow-cooking and balance of aroma and texture.</p>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1'>From dum-cooking techniques to spice-roasting tips, discover how Sopu crafts authentic biryanis.</p>
                        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-4'>
                            <Link 
                                href='tel:+919370568621'
                                className='flex items-center justify-center gap-2 text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 w-fit border border-primary hover:bg-transparent hover:text-primary transition-all duration-300'
                            >
                                <Icon icon="mdi:phone" width="24" height="24" />
                                +91 9370568621
                            </Link>
                            <Link 
                                href='https://maps.app.goo.gl/1U935c44DknKhRRs6?g_st=aw' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='flex items-center justify-center gap-2 text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 w-fit border border-primary hover:bg-transparent hover:text-primary transition-all duration-300'
                            >
                                <Icon icon="mdi:map-marker" width="24" height="24" />
                                Get Location
                            </Link>
                            <Link 
                                href='https://g.page/r/CXWJajn32WDwEBI/review' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='flex items-center justify-center gap-2 text-xl font-medium rounded-full text-white py-5 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 lg:px-10 w-fit border border-blue-600 hover:border-blue-700 transition-all duration-300 shadow-md'
                            >
                                <span className="flex items-center gap-2">
                                    <span>Rate Us</span>
                                    <span className="flex gap-0.5 text-yellow-300">
                                        <Icon icon="mdi:star" width="22" height="22" />
                                        <Icon icon="mdi:star" width="22" height="22" />
                                        <Icon icon="mdi:star" width="22" height="22" />
                                        <Icon icon="mdi:star" width="22" height="22" />
                                        <Icon icon="mdi:star" width="22" height="22" />
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cook;
