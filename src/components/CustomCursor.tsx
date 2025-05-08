import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (!isLargeScreen) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursor);
    };
  }, [isLargeScreen]);

  if (!isLargeScreen) return null;

  return (
    <div
      className='fixed pointer-events-none z-[9999] mix-blend-difference'
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}>
      <div className={`transition-all duration-200 ease-out ${isPointer ? "scale-150" : "scale-100"}`}>
        <div className='w-4 h-4 bg-white rounded-full' />
      </div>
    </div>
  );
};

export default CustomCursor;
