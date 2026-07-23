export type ListRow2Data = {
  description: string;
};
/** A list row. */
export default function ListRow2({ d, cids }: { d: ListRow2Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <p data-cid={cids[1]} className="block tracking-[0.4px] whitespace-pre-wrap">
        {d.description}
      </p>
    </li>
  );
}
