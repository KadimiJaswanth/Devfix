import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Page</h1>

      <p className="text-gray-700 mb-6">
        This is a sample About page created with Next.js, Tailwind, and ShadCN.
      </p>

      <Button variant="outline">Back to Home</Button>
    </main>
  );
}
<Link href="/about">
  <Button className="mt-6" variant="secondary">Go to About</Button>
</Link>
