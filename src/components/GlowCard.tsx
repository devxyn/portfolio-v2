import React, { useRef } from "react";

interface GlowCardProps {
  card: { review: string };
  children?: React.ReactNode;
  index: number;
  isCompany?: boolean;
  companyName?: string;
  companyLogo?: string;
}

const GlowCard = ({ card, children, index, isCompany, companyName, companyLogo }: GlowCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: { clientX: number; clientY: number }) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", (angle + 60).toString());
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className='card card-border timeline-card rounded-xl p-5 md:p-10 mb-5 break-inside-auto'>
      <div className='glow' />
      <div className='flex items-center gap-1 mb-5'>
        {isCompany && <img src={companyLogo} alt={companyName} className='w-32 object-cover mr-20' />}
        {Array.from({ length: 5 }, (_, i) => (
          <img src='/images/star.png' alt='star' key={i} className='size-5' />
        ))}
      </div>
      {companyName && (
        <div className='mt-2'>
          <h3 className='text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white-50 via-blue-400 to-purple-500 bg-clip-text text-transparent'>
            {companyName}
          </h3>
        </div>
      )}
      {card.review && (
        <div className='mb-5'>
          <p className='text-white-50 text-lg'>{card.review}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default GlowCard;
