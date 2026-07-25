export type ListRowData = {
  description: string;
};
/** A list row with a black checkmark bullet. */
export default function ListRow({ d, cids }: { d: ListRowData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item flex items-start gap-2 mb-1 2xl:hidden" style={{ listStyleType: "none" }}>
      <svg className="w-3.5 h-3.5 shrink-0 mt-1" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7L5.5 10.5L12 3.5" stroke="rgb(25,24,23)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span data-cid={cids[1]} className="text-muted-foreground whitespace-pre-wrap 2xl:hidden">
        {d.description}
      </span>
    </li>
  );
}
