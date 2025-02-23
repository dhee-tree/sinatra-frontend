import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Assuming Shadcn UI is set up

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#5A7D7C] to-[#D9C2A7] text-white py-20 backdrop-blur-md relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Network for Social Good
    </h1>
    <p className="text-lg md:text-xl mb-8">
      Pebble reflects how everyday people can come together to make a meaningful difference.
    </p>
    <Button size="lg" asChild className="relative overflow-hidden group">
      <Link href="/signup">
        Get Started
        <span className="absolute inset-0 bg-[#F28C38]/20 scale-0 rounded-full group-hover:scale-150 transition-transform duration-300 origin-center"></span>
      </Link>
    </Button>
  </div>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
    <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="90"
        r="12"
        className="pebble pebble-1"
        fill="#F28C38"
      />
      <circle
        cx="45"
        cy="80"
        r="12"
        className="pebble pebble-2"
        fill="#F28C38"
      />
      <circle
        cx="55"
        cy="80"
        r="12"
        className="pebble pebble-3"
        fill="#F28C38"
      />
      <circle
        cx="40"
        cy="70"
        r="12"
        className="pebble pebble-4"
        fill="#F28C38"
      />
      <circle
        cx="60"
        cy="70"
        r="12"
        className="pebble pebble-5"
        fill="#F28C38"
      />
    </svg>
  </div>
</section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Join Network for Social Good?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="#5A7D7C" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  Community Connection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with like-minded individuals and organisations to make
                  a difference together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="#5A7D7C" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  Impact Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  See the real impact of your contributions with our tracking
                  tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="#5A7D7C" viewBox="0 0 24 24">
                    <path d="M12 2L1 9l11 7 11-7L12 2zm0 14.17L4.83 11.7 12 7.25l7.17 4.45L12 16.17z" />
                  </svg>
                  Rewards and Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn badges and rewards for your contributions to the
                  community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="#5A7D7C" viewBox="0 0 24 24">
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  Easy to Get Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join the network in just a few clicks and start making a
                  difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
