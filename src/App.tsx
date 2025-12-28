import { Dumbbell, Phone, MessageCircle, MapPin, Clock, Users, Target, Award } from 'lucide-react';
import { useEffect } from 'react';

function App() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/91XXXXXXXXXX', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+91XXXXXXXXXX';
  };

  // Subtle JS: trigger CSS entry animations when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ( 
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Visual theme styles: floating shapes, power glow, card plates, button depth, and entry animations */}
      <style>{`
        /* Respect user preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-slow-1, .animate-slow-2, .gradient-move { animation: none !important; }
          [data-animate] { transition: none !important; }
        }

        /* Floating background shapes */
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-slow-1 { animation: float-slow 9s ease-in-out infinite; }
        .animate-slow-2 { animation: float-slow 12s ease-in-out infinite; }

        /* Subtle moving gradient for hero background (slow) */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-move { background: linear-gradient(120deg, rgba(63,63,246,0.08), rgba(244,114,182,0.04), rgba(250,204,21,0.03)); background-size: 200% 200%; animation: gradientShift 18s ease-in-out infinite; }

        /* Heading power glow */
        .heading-strong { text-shadow: 0 8px 30px rgba(15,23,42,0.6); letter-spacing: 0.6px; font-weight: 900; }

        /* Ensure hero fills most of mobile viewport */
        .hero-fill { min-height: 75vh; }
        @media(min-width:768px) { .hero-fill { min-height: 55vh; } }

        /* Entry animations (triggered by in-view class) */
        [data-animate] { opacity: 0; transform: translateY(10px) scale(.98); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.9,.2,1); }
        [data-animate].in-view { opacity: 1; transform: translateY(0) scale(1); }

        /* Card plate look */
        .card-plate { transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s, border-color .28s; }
        .card-plate:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(2,6,23,0.6); border-color: rgba(249,115,22,0.35); }

        /* Plans: badge */
        .plan-badge { background: linear-gradient(90deg,#ffedd5,#f97316); color: #1f2937; font-weight:700; padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: .75rem; box-shadow: 0 6px 20px rgba(249,115,22,0.12); }

        /* Button depth */
        .btn-solid { transition: transform .15s ease, box-shadow .15s ease; box-shadow: 0 8px 24px rgba(2,6,23,0.6); }
        .btn-solid:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(2,6,23,0.6); }
        .btn-solid:active { transform: translateY(0) scale(.98); }

        /* Icon accents */
        .icon-accent { transition: transform .18s ease, filter .18s ease; }
        .icon-accent:hover { transform: scale(1.08); filter: drop-shadow(0 8px 20px rgba(99,102,241,0.14)); }

        /* Gallery image hover */
        .gallery-img { transition: transform .35s cubic-bezier(.2,.9,.2,1), box-shadow .35s; }
        .gallery-img:hover { transform: scale(1.06); box-shadow: 0 20px 40px rgba(2,6,23,0.55); }

        /* Subtle elevated footer glow */
        .footer-brand { text-shadow: 0 6px 18px rgba(0,0,0,0.55); }
      `}</style>

      <header className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50"> 
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-indigo-400 icon-accent" />
            <span className="text-2xl font-bold">Your Gym Name</span>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={handleCall} className="px-4 py-2 btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg font-semibold tracking-wide" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}>
              Call Now
            </button>
            <button onClick={handleWhatsApp} className="px-4 py-2 btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg font-semibold tracking-wide flex items-center gap-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}>
              <MessageCircle className="w-4 h-4 icon-accent" />
              WhatsApp
            </button>
          </div>
        </div>
      </header>

      <section className="relative hero-fill pt-32 pb-20 px-4 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558611848-73f7eb4001d0?auto=format&fit=crop&w=1600&q=80')" }}>
        {/* Decorative floating gradients (slow, subtle) + moving gradient overlay for mobile-first WOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-gradient-to-br from-indigo-600 to-amber-400 opacity-25 rounded-full filter blur-3xl animate-slow-1" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-rose-500 via-indigo-600 to-transparent opacity-18 rounded-full filter blur-2xl animate-slow-2" />
          {/* subtle moving gradient overlay */}
          <div className="absolute inset-0 gradient-move opacity-40 mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto text-center relative z-10"> 
          {/* power glow behind heading */}
          <div className="absolute inset-0 flex justify-center items-start -z-10 pointer-events-none">
            <div className="w-96 h-40 bg-gradient-to-r from-indigo-500 to-amber-400 opacity-20 rounded-xl filter blur-3xl transform scale-105"></div>
          </div>
          <h1 data-animate className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-indigo-400 to-amber-400 bg-clip-text text-transparent heading-strong" style={{ textShadow: '0 6px 30px rgba(0,0,0,0.65), 0 2px 0 rgba(255,255,255,0.03)' }}>
            Your Gym Name
          </h1> 
          <p className="text-2xl md:text-3xl text-zinc-300 mb-8 font-light">
            Train Strong. Stay Fit. Build Confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsApp} className="px-8 py-4 btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg text-xl font-extrabold tracking-wide" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
              Join Now
            </button>
            <button onClick={handleWhatsApp} className="px-8 py-4 btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg text-xl font-semibold tracking-wide flex items-center justify-center gap-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
              <MessageCircle className="w-5 h-5 icon-accent" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      <section data-animate className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>About Your Gym Name</h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Welcome to <span className="text-amber-400 font-semibold" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.55)' }}>Your Gym Name</span>, serving fitness enthusiasts across Bhopal and conveniently accessible within the city.
              We focus on creating a clean, motivating, and supportive environment for all fitness levels.
            </p>
            <p>
              Our trainers provide proper guidance for beginners as well as experienced members,
              ensuring safe and effective workouts with consistent progress.
            </p>
            <p>
              With modern equipment, disciplined training culture, and a premium setup,
              Your Gym Name helps members stay consistent and confident in their fitness journey.
            </p>
          </div>
        </div>
      </section>

      <section data-animate className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-12 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>Facilities & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate hover:border-orange-500 transition-colors">
              <Target className="w-12 h-12 text-indigo-400 mb-4 icon-accent" />
              <h3 className="text-2xl font-semibold tracking-wide mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Strength Training</h3>
              <p className="text-zinc-400">Complete range of strength equipment and free weights.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate hover:border-orange-500 transition-colors">
              <Clock className="w-12 h-12 text-indigo-400 mb-4 icon-accent" />
              <h3 className="text-2xl font-semibold tracking-wide mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Cardio Training</h3>
              <p className="text-zinc-400">Modern machines for endurance and fat loss.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate hover:border-orange-500 transition-colors">
              <Users className="w-12 h-12 text-indigo-400 mb-4 icon-accent" />
              <h3 className="text-2xl font-semibold tracking-wide mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Personal Guidance</h3>
              <p className="text-zinc-400">Trainer support for proper form and consistency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans — extended with realistic guidance */}
      <section data-animate className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>Membership Plans</h2>
          <p className="text-center text-zinc-400 mb-8">Plans designed to suit different fitness goals.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Monthly */}
            <div data-animate className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-wide">Monthly</h3>
                <span className="text-zinc-400 text-sm">Full flexibility</span>
              </div>
              <p className="text-zinc-400 mt-3">Full gym access · All equipment included · Basic trainer guidance · Flexible timings</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-zinc-300 text-sm">Best for: Short-term commitment</div>
                <button className="btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold">Choose</button>
              </div>
            </div>

            {/* Quarterly */}
            <div data-animate className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate">
              <div className="absolute -top-3 right-3 plan-badge">Most Popular</div>
              <h3 className="text-2xl font-semibold tracking-wide">Quarterly</h3>
              <p className="text-zinc-400 mt-3">Full gym access · Consistent trainer support · Better workout structure · Ideal for visible progress</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-zinc-300 text-sm">Best for: Committed short-term growth</div>
                <button className="btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold">Choose</button>
              </div>
            </div>

            {/* Yearly */}
            <div data-animate className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate">
              <h3 className="text-2xl font-semibold tracking-wide">Yearly</h3>
              <p className="text-zinc-400 mt-3">Full gym access · Priority trainer guidance · Long-term discipline · Maximum consistency & savings</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-zinc-300 text-sm">Best for: Long-term transformation</div>
                <button className="btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold">Choose</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Gym — strong trust points */}
      <section data-animate className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>Why Choose This Gym</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-animate className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate flex items-start gap-4">
              <Award className="w-10 h-10 text-indigo-400 mt-1 icon-accent" />
              <div>
                <h3 className="font-semibold">Clean & hygienic</h3>
                <p className="text-zinc-400 text-sm">Maintained spaces and regular equipment sanitation.</p>
              </div>
            </div>

            <div data-animate className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate flex items-start gap-4">
              <Target className="w-10 h-10 text-indigo-400 mt-1 icon-accent" />
              <div>
                <h3 className="font-semibold">Modern equipment</h3>
                <p className="text-zinc-400 text-sm">Strength & cardio gear for every level.</p>
              </div>
            </div>

            <div data-animate className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate flex items-start gap-4">
              <Users className="w-10 h-10 text-indigo-400 mt-1 icon-accent" />
              <div>
                <h3 className="font-semibold">Friendly & disciplined</h3>
                <p className="text-zinc-400 text-sm">Supportive community with focused training culture.</p>
              </div>
            </div>

            <div data-animate className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate flex items-start gap-4">
              <Clock className="w-10 h-10 text-indigo-400 mt-1 icon-accent" />
              <div>
                <h3 className="font-semibold">Flexible timings</h3>
                <p className="text-zinc-400 text-sm">Morning to late-evening availability to suit routines.</p>
              </div>
            </div>

            <div data-animate className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 card-plate flex items-start gap-4">
              <Dumbbell className="w-10 h-10 text-indigo-400 mt-1 icon-accent" />
              <div>
                <h3 className="font-semibold">Focused on consistency</h3>
                <p className="text-zinc-400 text-sm">Long-term progress and realistic routines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Experience / Gallery */}
      <section data-animate className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8 text-center" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>Gym Experience</h2>
          <p className="text-center text-zinc-400 mb-8">A peek into our strength-focused spaces.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img data-animate alt="Dumbbells rack" className="gallery-img rounded-xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1594737625785-6b3b5f0a6b9f?auto=format&fit=crop&w=800&q=60" />
            <img data-animate alt="Weight plates" className="gallery-img rounded-xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=60" />
            <img data-animate alt="Training floor" className="gallery-img rounded-xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60" />
            <img data-animate alt="Gym interior" className="gallery-img rounded-xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1546483863-7e06f0c7f0b8?auto=format&fit=crop&w=800&q=60" />
          </div>
        </div>
      </section>

      {/* Continue with Location & Contact (unchanged structure) */}
      <section data-animate className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-black border border-zinc-800 rounded-xl p-6 card-plate">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-indigo-400 mt-1 icon-accent" />
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide mb-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Address</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Bhopal, Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-zinc-800 rounded-xl p-6 card-plate">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-indigo-400 mt-1 icon-accent" />
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide mb-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Phone</h3>
                    <p className="text-zinc-300 text-lg">Contact Number</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={handleCall} className="flex-1 px-6 py-4 btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg font-extrabold tracking-wide" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
                  Call Now
                </button>
                <button onClick={handleWhatsApp} className="flex-1 px-6 py-4 btn-solid bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg font-extrabold tracking-wide" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="h-96 rounded-xl overflow-hidden border-2 border-zinc-800">
              <iframe
                src="https://maps.google.com/maps?q=Bhopal%2C%20Madhya%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - conversion closer */}
      <section data-animate className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 heading-strong">Start Your Fitness Journey Today</h2>
          <p className="text-zinc-400 mb-8">Join a serious, premium gym experience designed for real progress.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsApp} className="btn-solid px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg text-xl font-extrabold">Join Now</button>
            <button onClick={handleWhatsApp} className="btn-solid px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg text-xl font-semibold flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5 icon-accent" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-zinc-800 py-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Dumbbell className="w-6 h-6 text-indigo-400 icon-accent" />
          <span className="text-xl font-extrabold tracking-wide footer-brand heading-strong" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>Your Gym Name</span>
        </div>
        <p className="text-zinc-400">Bhopal, Madhya Pradesh</p>
        <p className="text-zinc-500 mt-2">© Your Gym Name</p>
      </footer>
    </div>
  );
}

export default App;
