export type MediaTileData = {
  alt: string;
  imgSrc: string;
  label: string;
  href: string;
  label2: string;
};
/** A media tile. */
export default function MediaTile({ d, cids }: { d: MediaTileData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="hidden 2xl:h-9 2xl:block 2xl:pb-2.5 2xl:text-muted-foreground">
      <img data-cid={cids[1]} className="hidden 2xl:w-7.5 2xl:h-7.5 2xl:inline 2xl:max-w-full 2xl:mr-2.5 2xl:-mb-2.5 2xl:overflow-clip" alt={d.alt} src={d.imgSrc} title={d.label} />
      <a data-cid={cids[2]} className="hidden 2xl:inline 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:cursor-pointer" href={d.href} rel="noopener" target="_blank">
        {d.label2}
        <span data-cid={cids[3]} className="hidden 2xl:w-px 2xl:h-px 2xl:block 2xl:absolute 2xl:overflow-hidden 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:[clip-path:inset(50%)]">
          {" opens in a new tab "}
        </span>
      </a>
    </li>
  );
}
