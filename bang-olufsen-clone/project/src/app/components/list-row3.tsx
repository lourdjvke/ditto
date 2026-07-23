export type ListRow3Data = {
  description: string;
};
export default function ListRow3({ d, cids }: { d: ListRow3Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="hidden 2xl:list-item 2xl:flex 2xl:items-start 2xl:gap-2 2xl:mb-1">
      <svg className="hidden 2xl:block 2xl:w-4 2xl:h-4 2xl:mt-[2px] 2xl:shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 8L6.5 12L13.5 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p data-cid={cids[1]} className="hidden 2xl:block 2xl:tracking-[0.4px] 2xl:whitespace-pre-wrap">
        {d.description}
      </p>
    </li>
  );
}
