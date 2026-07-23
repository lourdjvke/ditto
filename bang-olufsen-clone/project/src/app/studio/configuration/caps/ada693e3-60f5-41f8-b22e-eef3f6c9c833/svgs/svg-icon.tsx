export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-4 block overflow-hidden align-middle pointer-events-none 2xl:hidden focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-cid={cid}>
      <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" d="M7 8.76c.252.355.573.649.942.861a2.79 2.79 0 0 0 2.43.184 2.9 2.9 0 0 0 1.047-.71l1.758-1.856c.534-.583.83-1.364.823-2.174a3.18 3.18 0 0 0-.858-2.16A2.86 2.86 0 0 0 11.095 2a2.85 2.85 0 0 0-2.061.868L8.026 3.925" />
      <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" d="M9 7.24a3 3 0 0 0-.942-.862 2.79 2.79 0 0 0-2.43-.184 2.9 2.9 0 0 0-1.047.712L2.823 8.76A3.18 3.18 0 0 0 2 10.935c.007.81.315 1.586.858 2.16A2.86 2.86 0 0 0 4.905 14a2.85 2.85 0 0 0 2.061-.868l1.002-1.057" />
    </svg>
  );
}
