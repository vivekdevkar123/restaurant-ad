"use client"
import Image from 'next/image';
import { imageUrl } from '@/utils/publicPath';
import Link from 'next/link';


const Hero = () => {

    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                            Sopu's Biryani — Authentic Flavour, Timeless Recipe
                        </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>Experience handcrafted biryanis made with time-honoured spices and slow-cooked perfection — each plate prepared by Chef Sopu.</p>
                        <div className='md:flex align-middle justify-center lg:justify-start gap-4 mb-8 md:mb-0'>
                            <Link href='https://zomato.onelink.me/xqzv/m1g9ltnd' target='_blank' rel='noopener noreferrer' className='flex border w-full md:w-auto mt-5 md:mt-0 border-red-500 bg-red-500 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-white hover:bg-red-600 transition-colors'>Order on Zomato</Link>
                            <Link href='https://www.swiggy.com/menu/1271738?source=sharing' target='_blank' rel='noopener noreferrer' className='flex border w-full md:w-auto mt-5 md:mt-0 border-orange-500 bg-orange-500 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-white hover:bg-orange-600 transition-colors'>Order on Swiggy</Link>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <div className='flex bg-white p-2 gap-2 md:gap-5 items-center bottom-4 right-4 md:bottom-10 md:left-10 md:right-auto rounded-lg md:rounded-xl absolute shadow-lg'>
                            <Image src={imageUrl('/images/logo/icon.jpg')} alt="pizza-image" width={68} height={68} className='w-10 h-10 md:w-[68px] md:h-[68px] rounded-lg object-cover' />
                            <p className='text-sm md:text-lg font-normal text-black'>More than 100+ <br /> recipes.</p>
                        </div>
                        <Image src={imageUrl('/images/hero/banner_image.JPG')} alt="Sopu's Biryani hero image" width={500} height={1000} className="rounded-3xl w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
