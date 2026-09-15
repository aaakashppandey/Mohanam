import Layout from "@/src/app/layout";
import BookingBar from "@/src/component/booking/BookingBar";

export default function BookingPage() {
  return (
    <Layout>
      <BookingBar layout="stacked" />

      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-2xl font-semibold mb-4">Book a stay</h1>
        <p className="text-gray-600 mb-6">Use the availability bar above to select dates and guests.</p>

        <section className="space-y-6">
          <div className="p-6 border border-gray-200 rounded-md bg-white">Booking details and forms go here.</div>
          <div className="p-6 border border-gray-200 rounded-md bg-white">Payment and confirmation placeholder.</div>
        </section>
      </main>
    </Layout>
  );
}
