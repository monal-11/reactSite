function Home() {
    return (
      <div className="page home-page">
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/api/placeholder/1920/1080")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative container mx-auto h-full flex items-center">
          <div className="text-white max-w-2xl p-8">
            <img src="./assets/image1.jpeg" alt="" />
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Company</h1>
            <p className="text-xl mb-8">We provide innovative solutions for your business needs.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Home;

  