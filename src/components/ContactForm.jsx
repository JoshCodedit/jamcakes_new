import background1 from '../../public/images/background1.jpg';

export default function ContactForm() {
    return (
        <div 
            className="container relative mx-auto max-w-screen-md mt-7 p-4 
                bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{ 
                backgroundImage: `url(${background1})`,
                boxShadow: 'inset 0 0 25px 12px #FDEFF6'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />
            
            <div className="relative z-10 bg-white/80 rounded-lg shadow-lg m-4 p-4 md:p-6 max-w-72 sm:max-w-xl mx-auto">
                <h2 className="heading-text">Send Us A Message</h2>
                <p className="mb-6 text-center">
                    You can send us an enquiry using the form below.
                </p>
                <p className="mb-8 italic text-center">
                    If you'd like to include a photo with your message then please email us at{' '} <br />
                    <a href="mailto:info@thecakeryleamington.co.uk" className="text-blue-600 hover:underline text-center">
                        jambakescakes@hotmail.com
                    </a>
                </p>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="telephone" className="block mb-2">
                            Contact Telephone (optional)
                        </label>
                        <input
                            type="tel"
                            id="telephone"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2">
                            Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            required
                            rows="3"
                            className="w-full p-2 border rounded-md"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}