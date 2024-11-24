function About() {
    return (
      <div className="page about-page">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to deliver exceptional value to our clients through innovative solutions
              and outstanding service. We believe in creating lasting relationships built on trust,
              integrity, and mutual success.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4 text-gray-600">
              <li>• Innovation: We constantly push boundaries to find better solutions</li>
              <li>• Integrity: We conduct business with the highest ethical standards</li>
              <li>• Excellence: We strive for excellence in everything we do</li>
              <li>• Collaboration: We believe in the power of teamwork</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default About;