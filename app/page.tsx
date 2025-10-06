import Image from 'next/image';
import { Motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-custom-center h-screen bg-gradient-to-r from-zl-00 to-black text-white antialiased">
      <Motion
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ duration: 1.5, easing: 'easeIn' }
      >
        <h1 className="text-7xl font-bold tracking-tight text-center">Hello, I'm Creator GPT-5</h1>
        <p className="text-neutral-tone mt-4 text-center max-w-md">A minimalistic, simple and stunning site deployed on Vercel.</p>
      </Motion>
    </div>
  );
}