import { memo } from 'react';

type BlurProps = {
  color: 'blue' | 'purple' | string;
  height?: string;
  width?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  filter: string;
  className?: string
};

const colorMap: Record<string, string> = {
  purple: "radial-gradient(circle, rgba(156, 8, 255, 0.6) -10%, rgba(156, 8, 255, 0) 70%)",
  blue: "radial-gradient(circle, rgba(30, 80, 255, 0.6) -30%, rgba(30, 80, 255, 0) 70%)",
};

const Blur = memo(({ color, height, width, top, bottom, left, right, filter, className }: BlurProps) => {
  const background = colorMap[color] || color;

  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
        top,
        bottom,
        left,
        right,
        width,
        height,
        background,
        filter,
        WebkitFilter: filter,
      }}
      className={`${className} absolute rounded-full -z-20 max-[800px]:w-[100px] max-[800px]:h-[100px] pointer-events-none`}
    />
  );
});

Blur.displayName = 'Blur';

export default Blur;