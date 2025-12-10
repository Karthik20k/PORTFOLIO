function Footer() {
    const contactInfo = [
        {
            icon: "📱",
            label: "Phone",
            value: "9600227768",
            link: "tel:9600227768",
            color: "from-green-500 to-teal-500"
        },
        {
            icon: "📧",
            label: "Email",
            value: "karthikeyanmuthukumaran04@gmail.com",
            link: "mailto:karthikeyanmuthukumaran04@gmail.com",
            color: "from-red-500 to-orange-500"
        },
        {
            icon: "💼",
            label: "LinkedIn",
            value: "Karthikeyan Muthukumaran",
            link: "https://linkedin.com/in/karthikeyan-muthukumaran",
            color: "from-blue-500 to-cyan-500"
        }
    ]

    return (
        <footer id="contact" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Contact Information */}
                <h2 className="section-title">
                    <span className="gradient-text">Contact Information</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            target={info.label === "LinkedIn" ? "_blank" : undefined}
                            rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                            className="glass-card p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${info.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4`}>
                                {info.icon}
                            </div>
                            <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300 break-all">
                                {info.value}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Quick Connect */}
                <div className="glass-card p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">Quick Connect</h3>
                    <p className="text-gray-400 mb-6">
                        Have a question or want to work together? Drop me a message!
                    </p>

                    <a
                        href="mailto:karthikeyanmuthukumaran04@gmail.com?subject=Hello from your Portfolio&body=Hi Karthikeyan,%0D%0A%0D%0AI visited your portfolio and wanted to reach out.%0D%0A%0D%0A"
                        className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Send Me a Message
                    </a>

                    <p className="text-gray-500 text-sm mt-6">
                        Click the button above to compose an email directly to me
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
