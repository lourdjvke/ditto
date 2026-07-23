export type ListRow3Data = {
  description: string;
};
/** A list row. */
export default function ListRow3({ d, cids }: { d: ListRow3Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="hidden 2xl:list-item">
      <p data-cid={cids[1]} className="hidden 2xl:block 2xl:tracking-[0.4px] 2xl:whitespace-pre-wrap">
        {d.description}
      </p>
    </li>
  );
}
