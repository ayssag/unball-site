export interface ColoredCircleProps {
  color: string;
  size?: number;
}

export function ColoredCircle({ color, size = 12 }: ColoredCircleProps) {
  const radius = size / 2;
  return (
    <svg width={size} height={size}>
      <circle r={radius} cx={radius} cy={radius} fill={color} />
    </svg>
  );
}

export default ColoredCircle;
