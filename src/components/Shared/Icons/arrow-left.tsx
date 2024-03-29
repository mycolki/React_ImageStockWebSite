import { vars } from 'style/vars';

function ArrowLeft({ stroke = vars.color.default }: { stroke?: string }) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.5 17L9.5 12L14.5 7" />
    </svg>
  );
}
export default ArrowLeft;
