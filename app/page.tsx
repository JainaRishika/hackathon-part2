import { Sidebar } from "@/components/ui/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Book Catalog</h1>
        {/* Book listing content will go here */}
      </main>
    </div>
  );
}