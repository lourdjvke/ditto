export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-full h-full hidden min-w-0 overflow-hidden" aria-hidden="true" aria-label="closeIconBlack" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-icon="closeIconBlack" fill="currentColor" data-cid={cid}>
      <path fill="currentFill" style={{ stroke: "#000", strokeWidth: "2" }} d="M0 15.839L15.839 0M0 0L15.839 15.839" />
    </svg>
  );
}
