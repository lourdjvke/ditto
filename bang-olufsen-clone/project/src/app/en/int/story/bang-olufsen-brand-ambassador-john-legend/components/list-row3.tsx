export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, cids }: { d: ListRow3Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="hidden 2xl:flex 2xl:mb-4 2xl:items-center 2xl:overflow-hidden 2xl:leading-6.5 2xl:tracking-[0.2px]">
      <a data-cid={cids[1]} className="hidden 2xl:block 2xl:relative 2xl:pb-1 2xl:text-color-001 2xl:[background-size:0%_2px] 2xl:[background-position:0%_100%] 2xl:bg-no-repeat 2xl:cursor-pointer" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
