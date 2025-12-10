function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "💻",
            skills: ["Java", "Python", "JavaScript"],
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Frontend",
            icon: "🎨",
            skills: ["React JS", "HTML", "CSS"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: ["Node JS"],
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Database",
            icon: "🗄️",
            skills: ["PostgreSQL"],
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Areas of Interest",
            icon: "🎯",
            skills: ["Data Structures & Algorithms", "Web Development"],
            color: "from-pink-500 to-purple-500"
        }
    ]

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">Skills & Expertise</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                            </div>

                            <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:w-full transition-all duration-500`}></div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="skill-badge text-sm text-gray-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
