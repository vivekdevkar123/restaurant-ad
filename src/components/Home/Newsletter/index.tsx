"use client"
import Image from "next/image";
import { useState } from "react";

const Newsletter = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section className='relative'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md ">
                <div className="bg-primary rounded-2xl shadow-xl grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-12 xl:gap-x-8 p-8">
                    <div className="col-span-7">
                        <div className="m-4 lg:ml-10 lg:mt-6 lg:mb-6">
                            <p className="text-lg font-normal text-white mb-2 ls-51"> CONTACT US </p>
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                                Send feedback or ask about catering
                            </h2>

                            <form onSubmit={onSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="w-full py-3 px-4 rounded-lg bg-white/95 focus:outline-none focus:ring-2 focus:ring-yellow-300" required />
                                    <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Your email" className="w-full py-3 px-4 rounded-lg bg-white/95 focus:outline-none focus:ring-2 focus:ring-yellow-300" required />
                                </div>
                                <textarea name="message" value={form.message} onChange={onChange} placeholder="Your message" className="w-full py-3 px-4 rounded-lg bg-white/95 focus:outline-none focus:ring-2 focus:ring-yellow-300 h-36" required />
                                <div className="flex items-center gap-4">
                                    <button disabled={status === 'sending'} type="submit" className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform">
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {status === 'success' && <span className="ml-2 text-white">Thanks — we will reply soon.</span>}
                                    {status === 'error' && <span className="ml-2 text-yellow-200">Submission failed. Try again.</span>}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-5 relative hidden md:flex items-center justify-center">
                        <div className="w-full max-w-sm">
                            <Image src='https://picsum.photos/520/502?random=soup' alt="soup-image" width={520} height={502} className='rounded-xl shadow-lg' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Newsletter;