function Workshops() {
    const workshops = [
        {
            title: "PostgreSQL Workshop",
            organization: "Velammal Institute of Technology",
            year: "2024",
            description: "Gained hands-on experience with PostgreSQL database management and query optimization.",
            icon: "🗄️",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: '"How To CSS" Bootcamp',
            organization: "Codekaro (Online)",
            year: "2025",
            description: "Intensive bootcamp focusing on modern CSS techniques, layouts, and responsive design.",
            icon: "🎨",
            color: "from-purple-500 to-pink-500"
        }
    ]

    return (
        <section id="workshops" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">Workshops & Training</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {workshops.map((workshop, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Decorative Background */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-r ${workshop.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-linear-to-r ${workshop.color} flex items-center justify-center text-2xl shadow-lg`}>
                                        {workshop.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                                {workshop.title}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${workshop.color} text-white text-xs font-semibold`}>
                                                {workshop.year}
                                            </span>
                                        </div>
                                        <p className="text-cyan-400 text-sm mt-1">{workshop.organization}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {workshop.description}
                                </p>

                                <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Completed</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Workshops
