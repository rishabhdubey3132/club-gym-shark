import { Dumbbell, Phone, MessageCircle, MapPin, Clock, Users, Target, Award } from 'lucide-react';

function App() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919893366490', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919893366490';
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">Club Gym Shark</span>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={handleCall} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors">
              Call Now
            </button>
            <button onClick={handleWhatsApp} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Club Gym Shark
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-8 font-light">
            Train Strong. Stay Fit. Build Confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsApp} className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-xl font-bold transition-colors">
              Join Now
            </button>
            <button onClick={handleWhatsApp} className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-xl font-bold transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Club Gym Shark</h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Welcome to <span className="text-orange-500 font-semibold">Club Gym Shark</span>, your premier fitness destination in Bhopal. Located on Kolar Road, we pride ourselves on creating a welcoming and motivating environment for fitness enthusiasts of all levels.
            </p>
            <p>
              Our team of experienced and certified trainers is dedicated to helping you achieve your fitness goals, whether you're just starting your journey or looking to take your training to the next level. We believe in personalized attention and proper guidance to ensure safe and effective workouts.
            </p>
            <p>
              At Club Gym Shark, we maintain a clean, well-equipped facility with modern strength training and cardio equipment. Our gym is designed to be beginner-friendly while providing everything serious athletes need. We focus on building a community that supports consistency, celebrates progress, and delivers real fitness results.
            </p>
            <p className="text-xl font-semibold text-orange-500">
              Join us and experience the difference that quality training and a supportive environment can make.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Facilities & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Target className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Strength Training</h3>
              <p className="text-zinc-400">Complete range of free weights and strength equipment for building muscle and power.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Clock className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Cardio Equipment</h3>
              <p className="text-zinc-400">Modern treadmills, cycles, and cardio machines for endurance and fat loss.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Dumbbell className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Weight Training</h3>
              <p className="text-zinc-400">Professional-grade weights and equipment for serious bodybuilding and fitness.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Personal Training</h3>
              <p className="text-zinc-400">One-on-one guidance from certified trainers to help you reach your goals faster.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Award className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Beginner Guidance</h3>
              <p className="text-zinc-400">Special attention for newcomers with proper form training and workout planning.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Target className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Clean Environment</h3>
              <p className="text-zinc-400">Well-maintained, hygienic facility with regular cleaning and equipment maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-black border-2 border-zinc-800 rounded-xl p-8 hover:border-orange-500 transition-colors">
              <h3 className="text-3xl font-bold mb-4 text-orange-500">Monthly</h3>
              <p className="text-zinc-400 mb-6">Perfect for trying out our gym and getting started on your fitness journey.</p>
              <ul className="space-y-3 text-zinc-300 mb-6">
                <li>✓ Full gym access</li>
                <li>✓ All equipment</li>
                <li>✓ Trainer guidance</li>
                <li>✓ Flexible timing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-black border-2 border-orange-500 rounded-xl p-8 transform scale-105">
              <div className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">POPULAR</div>
              <h3 className="text-3xl font-bold mb-4 text-orange-500">Quarterly</h3>
              <p className="text-zinc-400 mb-6">Best value for serious fitness enthusiasts committed to transformation.</p>
              <ul className="space-y-3 text-zinc-300 mb-6">
                <li>✓ Full gym access</li>
                <li>✓ All equipment</li>
                <li>✓ Trainer guidance</li>
                <li>✓ Special offers</li>
              </ul>
            </div>
            <div className="bg-black border-2 border-zinc-800 rounded-xl p-8 hover:border-orange-500 transition-colors">
              <h3 className="text-3xl font-bold mb-4 text-orange-500">Yearly</h3>
              <p className="text-zinc-400 mb-6">Maximum savings for dedicated members committed to long-term fitness.</p>
              <ul className="space-y-3 text-zinc-300 mb-6">
                <li>✓ Full gym access</li>
                <li>✓ All equipment</li>
                <li>✓ Priority support</li>
                <li>✓ Best pricing</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-zinc-300 mb-6">
              <span className="text-orange-500 font-semibold">Contact us</span> to know current offers and pricing.
            </p>
            <button onClick={handleWhatsApp} className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-xl font-bold transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg" alt="Gym equipment" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg" alt="Weight training" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" alt="Cardio area" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" alt="Training session" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg" alt="Workout area" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg" alt="Gym interior" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/3838937/pexels-photo-3838937.jpeg" alt="Equipment rack" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg" alt="Training zone" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Location & Contact</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-black border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      S11 Second Floor, Guru Kripa Tower,<br />
                      Near Vishal Mega Mart,<br />
                      Sarvdharm Colony, Kolar Rd,<br />
                      Bhopal, Madhya Pradesh 462042
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-zinc-300 text-lg">098933 66490</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleCall} className="flex-1 px-6 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
                <button onClick={handleWhatsApp} className="flex-1 px-6 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </button>
              </div>
            </div>
            <div className="h-96 rounded-xl overflow-hidden border-2 border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4167524468744!2d77.44284087536632!3d23.215891979056566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426c9f17f3f7%3A0x15c6f9b4d1f7e37a!2sS11%20Second%20Floor%2C%20Guru%20Kripa%20Tower%2C%20Near%20Vishal%20Mega%20Mart%2C%20Sarvdharm%20Colony%2C%20Kolar%20Rd%2C%20Bhopal%2C%20Madhya%20Pradesh%20462042!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-zinc-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Dumbbell className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold">Club Gym Shark</span>
          </div>
          <p className="text-zinc-400">Kolar Road, Bhopal</p>
          <p className="text-zinc-500 mt-4">© Club Gym Shark</p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 md:hidden">
        <button onClick={handleWhatsApp} className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;
