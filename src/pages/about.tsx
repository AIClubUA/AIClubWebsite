import Officers from '@/components/Officers';

export default function About() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">About the AI Club</h1>
      <p className="mt-4">Meet the club officers and learn more about our mission.</p>
      
      {/* Officers Section */}
      <h2 className="text-2xl font-bold mt-8">Our Officers</h2>
      <Officers />
    </div>
  );
}
