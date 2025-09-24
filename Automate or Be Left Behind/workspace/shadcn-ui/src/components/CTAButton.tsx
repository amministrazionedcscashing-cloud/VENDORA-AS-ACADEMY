import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg' | 'xl';
  className?: string;
}

export default function CTAButton({ 
  text, 
  variant = 'primary', 
  size = 'default',
  className = '' 
}: CTAButtonProps) {
  const baseClasses = "font-black text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border-glow-red";
  
  const variantClasses = {
    primary: "bg-red-600 hover:bg-red-700 text-white border-2 border-red-700 shadow-2xl pulse-red",
    secondary: "bg-white hover:bg-gray-100 text-red-600 border-2 border-red-600 shadow-xl hover:shadow-2xl"
  };

  const sizeClasses = {
    default: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
    xl: "px-12 py-6 text-2xl"
  };

  return (
    <Button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={() => {
        // Add click tracking or form submission logic here
        console.log('CTA clicked:', text);
      }}
    >
      {text}
    </Button>
  );
}