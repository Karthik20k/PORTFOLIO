function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
            <div className="max-w-4xl mx-auto text-center">
                {/* Profile Image */}
                <div className="mb-8 relative inline-block">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 animate-glow">
                        <img
                            src="/profile.jpg"
                            alt="Karthikeyan"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Name */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
                    <span className="text-white">Hi, I'm </span>
                    <span className="gradient-text">Karthikeyan</span>
                </h1>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
