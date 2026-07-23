export type ListRowData = {
  description: string;
};
/** A list row. */
export default function ListRow({ d, cids }: { d: ListRowData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item pl-3.5 2xl:hidden">
      <p data-cid={cids[1]} className="block text-muted-foreground whitespace-pre-wrap 2xl:hidden">
        {d.description}
      </p>
    </li>
  );
}
