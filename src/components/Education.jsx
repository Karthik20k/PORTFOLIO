function Education() {
    const education = [
        {
            degree: "B.Tech in Artificial Intelligence & Data Science",
            institution: "Velammal Institute of Technology",
            period: "Currently Pursuing",
            grade: "8.56 CGPA",
            icon: "🎓",
            color: "from-cyan-500 to-blue-500"
        },
        {
            degree: "Higher Secondary (12th)",
            institution: "Saraswathi Matric. Hr. Sec. School",
            period: "Completed",
            grade: "82%",
            icon: "📚",
            color: "from-purple-500 to-pink-500"
        },
        {
            degree: "Secondary (10th)",
            institution: "Saraswathi Matric. Hr. Sec. School",
            period: "Completed",
            grade: "67%",
            icon: "📖",
            color: "from-orange-500 to-red-500"
        }
    ]

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">Education</span>
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                                        <div className="flex items-center gap-4 mb-4 flex-wrap">
                                            <span className="text-4xl">{edu.icon}</span>
                                            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-semibold`}>
                                                {edu.grade}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                        <p className="text-cyan-400 font-medium mb-1">{edu.institution}</p>
                                        <p className="text-gray-400 text-sm">{edu.period}</p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>

                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
