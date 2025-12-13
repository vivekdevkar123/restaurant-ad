"use client"
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from '@/utils/publicPath';
import { Icon } from "@iconify/react";

const Newsletter = () => {
    const phoneNumber = "919370568621"; // WhatsApp number with country code
    const whatsappMessage = encodeURIComponent(
        "Hello Sopu's Cloud Kitchen! 👋\n\nI would like to place an order for biryani.\n\nPlease share the menu and pricing details.\n\nThank you!"
    );
    
    const emailAddress = "sopudevkar90@gmail.com";
    const emailSubject = encodeURIComponent("Query/Concern - Sopu's Cloud Kitchen");
    const emailBody = encodeURIComponent(
        "Hello Sopu's Cloud Kitchen Team,\n\nI would like to reach out regarding:\n\n[Please describe your query or concern here]\n\nThank you!"
    );

    return (
        <section className='relative py-8' id='contact-section'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="bg-primary rounded-2xl shadow-xl grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-12 xl:gap-x-8 p-6 md:p-8">
                    <div className="col-span-7 flex flex-col justify-center">
                        <div className="md:m-4 lg:ml-10 lg:mt-6 lg:mb-6">
                            <p className="text-lg font-normal text-white mb-2 ls-51 uppercase tracking-widest"> CONTACT US </p>
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                                Get in Touch with Us
                            </h2>
                            <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                Ready to order authentic biryani or have a question? We're here to help! Choose your preferred way to connect with us.
                            </p>

                            <div className="space-y-4">
                                {/* WhatsApp Button */}
                                <Link
                                    href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-5 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    <Icon icon="mdi:whatsapp" width="28" height="28" />
                                    Place an Order
                                </Link>

                                {/* Email Button */}
                                <Link
                                    href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
                                    className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-100 text-primary text-xl font-semibold py-5 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    <Icon icon="mdi:email" width="28" height="28" />
                                    Raise a Concern
                                </Link>

                                {/* Google Review Button */}
                                <Link
                                    href="https://g.page/r/CXWJajn32WDwEBI/review"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl font-semibold py-5 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-3">
                                        <span>Rate Us</span>
                                        <span className="flex gap-0.5 text-yellow-300">
                                            <Icon icon="mdi:star" width="24" height="24" />
                                            <Icon icon="mdi:star" width="24" height="24" />
                                            <Icon icon="mdi:star" width="24" height="24" />
                                            <Icon icon="mdi:star" width="24" height="24" />
                                            <Icon icon="mdi:star" width="24" height="24" />
                                        </span>
                                    </span>
                                </Link>
                            </div>

                            {/* Additional Contact Info */}
                            <div className="mt-8 pt-6 border-t border-white/20">
                                <div className="flex flex-col gap-3 text-white/80">
                                    <div className="flex items-center gap-3">
                                        <Icon icon="mdi:phone" width="20" height="20" />
                                        <span>+91 9370568621</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon icon="mdi:email-outline" width="20" height="20" />
                                        <span>sopudevkar90@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 relative hidden md:flex items-center justify-center">
                        <div className="w-full max-w-sm">
                            <Image src={imageUrl('/images/Newsletter/we-are-open.jpg')} alt="Contact Sopu's Kitchen" width={520} height={502} className='rounded-xl shadow-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;