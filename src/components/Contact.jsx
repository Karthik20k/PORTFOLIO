function Contact() {
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
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Contact Information Section */}
                <h2 className="section-title">
                    <span className="gradient-text">Contact Information</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
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
            </div>
        </section>
    )
}

export default Contact
