function Projects() {
    const projects = [
        {
            title: "Notepad Web Application",
            description: "Designed and developed a responsive web-based notepad with full CRUD functionality, tailored for book enthusiasts. Features an intuitive user interface that allows users to easily save and manage book titles, authors, and short descriptions for future reading.",
            tech: ["HTML", "CSS", "JavaScript"],
            icon: "📝",
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Online Clothing Catalogue",
            description: "Developed a responsive web-based clothing catalogue featuring a variety of apparel items with integrated search and filter functionality. Built focusing on clean layout and usability.",
            tech: ["HTML", "CSS", "JavaScript"],
            icon: "👕",
            color: "from-purple-500 to-pink-500"
        }
    ]

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300"
                        >
                            {/* Project Header with Gradient */}
                            <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative`}>
                                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </span>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400 border border-cyan-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium text-white text-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                                        View Details
                                    </button>
                                    <button className="px-4 py-2 border border-gray-600 rounded-lg text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
