import React from 'react';


const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-yellow-500">EdgeCaseMaster</a>
          <div>
            <a href="#features" className="text-lg mx-2 hover:text-yellow-400">Features</a>
            <a href="#contact" className="text-lg mx-2 hover:text-yellow-400">Contact</a>
            <a href="#signup" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400">Sign Up</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <section id="introduction" className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to EdgeCaseMaster</h1>
          <p className="text-lg mb-6">
            At EdgeCaseMaster, our mission is to empower developers to write resilient and robust code effortlessly.
            Whether you're a beginner or an experienced coder, our platform provides the tools you need to improve
            your coding skills and develop an intuition for edge cases.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Development Phase Notice</h2>
          <p className="text-lg">
            EdgeCaseMaster is currently in its development phase and, for now, supports only array data types. We are
            continuously working to expand our support to more data types and features.
          </p>
        </section>

        <section id="features" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Instant Coding Environment"
              description="Write your code and see the results immediately. Our real-time coding environment helps you quickly debug and refine your code, providing instant feedback to accelerate your learning process."
            />
            <FeatureCard
              title="Custom Test Cases"
              description="Create and test your own test cases to ensure your code handles every scenario. With EdgeCaseMaster, you can design specific test cases that mimic real-world situations, ensuring your code is prepared for any challenge."
            />
            <FeatureCard
              title="Edge Case Analysis"
              description="Get insights and suggestions on potential edge cases your code might encounter. Our advanced analysis tools help you identify and address edge cases, preventing unexpected bugs and improving overall code quality."
            />
            <FeatureCard
              title="Robust Code Development"
              description="Enhance your coding skills by learning to write code that withstands all edge cases. By mastering edge cases, you'll become a more proficient coder, capable of developing reliable and efficient software."
            />
          </div>
        </section>

        <section id="signup" className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-lg mb-6">
            Ready to take your coding skills to the next level? Sign up now and start exploring the endless possibilities with EdgeCaseMaster!
          </p>
          <a href="#signup" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded hover:bg-yellow-400 text-lg">Sign Up</a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="/" className="text-lg mx-2 hover:text-yellow-400">Home</a>
            <a href="#features" className="text-lg mx-2 hover:text-yellow-400">Features</a>
            <a href="#blog" className="text-lg mx-2 hover:text-yellow-400">Blog</a>
            <a href="#contact" className="text-lg mx-2 hover:text-yellow-400">Contact</a>
          </div>
          <p className="text-sm mb-4">© 2024 EdgeCaseMaster. All rights reserved.</p>
          <a href="#terms" className="text-sm mx-2 hover:text-yellow-400">Terms of Service</a>
          <a href="#privacy" className="text-sm mx-2 hover:text-yellow-400">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default About;
