import EvetnsTabs from "@/components/layout/eventTab";

export default function Event() {
    return (
      <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/d0/54/35/d054358ead536ce0f8ae19e8902d990c.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Event Planning</h1>
          </div>
        </div>
      </div>
    
      {/* Section ใหม่ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="mb-8 text-lg">
            We provide top-notch event planning services to make your events
            unforgettable.
          </p>
          <EvetnsTabs />
         
          </div>
        
      </section>
    </>
    
    );
  }
  