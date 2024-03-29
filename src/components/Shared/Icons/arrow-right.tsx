import { vars } from 'style/vars';

function ArrowRight({ stroke = vars.color.default }: { stroke?: string }) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
    >
      <path d="M9.5 7L14.5 12L9.5 17" />
    </svg>
  );
}
export default ArrowRight;
