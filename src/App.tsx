import { Dumbbell, Phone, MessageCircle, MapPin, Clock, Users, Target, Award } from 'lucide-react';

function App() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919893476857', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919893476857';
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-indigo-400" />
            <span className="text-2xl font-bold">Pure Fitness Zone</span>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={handleCall} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold tracking-wide transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}>
              Call Now
            </button>
            <button onClick={handleWhatsApp} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold tracking-wide transition-colors flex items-center gap-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558611848-73f7eb4001d0?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-indigo-400 to-amber-400 bg-clip-text text-transparent" style={{ textShadow: '0 6px 18px rgba(0,0,0,0.65), 0 1px 0 rgba(255,255,255,0.03)' }}>
            Pure Fitness Zone
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-8 font-light">
            Train Strong. Stay Fit. Build Confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsApp} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xl font-extrabold tracking-wide transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
              Join Now
            </button>
            <button onClick={handleWhatsApp} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xl font-semibold tracking-wide transition-colors flex items-center justify-center gap-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>About Pure Fitness Zone</h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Welcome to <span className="text-amber-400 font-semibold" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.55)' }}>Pure Fitness Zone</span>, a professional fitness studio on Kolar Road, Bhopal.
              We focus on creating a clean, motivating, and supportive environment for all fitness levels.
            </p>
            <p>
              Our trainers provide proper guidance for beginners as well as experienced members,
              ensuring safe and effective workouts with consistent progress.
            </p>
            <p>
              With modern equipment, disciplined training culture, and a premium setup,
              Pure Fitness Zone helps members stay consistent and confident in their fitness journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-12 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>Facilities & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Target className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold tracking-wide mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Strength Training</h3>
              <p className="text-zinc-400">Complete range of strength equipment and free weights.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Clock className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold tracking-wide mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Cardio Training</h3>
              <p className="text-zinc-400">Modern machines for endurance and fat loss.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <Users className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold tracking-wide mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Personal Guidance</h3>
              <p className="text-zinc-400">Trainer support for proper form and consistency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-12 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>Location & Contact</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-black border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide mb-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Address</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      2nd Floor, Ultimate Arcade,<br />
                      Above Sagar Gaire,<br />
                      Near Vishal Mega Mart,<br />
                      Mandakini Colony, Kolar Rd,<br />
                      Bhopal, Madhya Pradesh 462042
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide mb-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Phone</h3>
                    <p className="text-zinc-300 text-lg">09893476857</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={handleCall} className="flex-1 px-6 py-4 bg-indigo-600 rounded-lg font-extrabold tracking-wide" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
                  Call Now
                </button>
                <button onClick={handleWhatsApp} className="flex-1 px-6 py-4 bg-indigo-600 rounded-lg font-extrabold tracking-wide" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="h-96 rounded-xl overflow-hidden border-2 border-zinc-800">
              <iframe
                src="https://maps.google.com/maps?q=Pure%20Fitness%20Zone%20Kolar%20Road%20Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-zinc-800 py-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Dumbbell className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-extrabold tracking-wide" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Pure Fitness Zone</span>
        </div>
        <p className="text-zinc-400">Kolar Road, Bhopal</p>
        <p className="text-zinc-500 mt-2">© Pure Fitness Zone</p>
      </footer>
    </div>
  );
}

export default App;
