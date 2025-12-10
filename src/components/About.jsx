function About() {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">About Me</span>
                </h2>

                <div className="glass-card p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Passionate software developer with a background in <span className="text-cyan-400 font-semibold">B.Tech in Artificial Intelligence and Data Science</span>, and hands-on experience in UI and web application development.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Actively building a strong foundation in <span className="text-purple-400 font-semibold">full stack development</span> while exploring AI and emerging technologies.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Committed to contributing to <span className="text-pink-400 font-semibold">innovative projects</span> and continuously enhancing technical skills.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl mb-3">🎓</div>
                                <h3 className="text-xl font-bold text-white mb-1">B.Tech</h3>
                                <p className="text-gray-400 text-sm">AI & Data Science</p>
                            </div>
                            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl mb-3">💻</div>
                                <h3 className="text-xl font-bold text-white mb-1">Full Stack</h3>
                                <p className="text-gray-400 text-sm">Web Developer</p>
                            </div>
                            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl mb-3">🤖</div>
                                <h3 className="text-xl font-bold text-white mb-1">AI</h3>
                                <p className="text-gray-400 text-sm">Enthusiast</p>
                            </div>
                            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl mb-3">🚀</div>
                                <h3 className="text-xl font-bold text-white mb-1">Innovator</h3>
                                <p className="text-gray-400 text-sm">Problem Solver</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
