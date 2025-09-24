import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  result: string;
  emoji: string;
}

export default function TestimonialCard({ name, result, emoji }: TestimonialCardProps) {
  return (
    <Card className="bg-white border-2 border-gray-200 hover:border-red-500 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="text-3xl mb-3">{emoji}</div>
        <h3 className="font-bold text-lg text-black mb-2">{name}</h3>
        <p className="text-gray-700 font-medium">{result}</p>
      </CardContent>
    </Card>
  );
}