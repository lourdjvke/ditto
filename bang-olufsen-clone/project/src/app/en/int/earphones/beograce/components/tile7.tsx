export type Tile7Data = {
  description: string;
};
/** A content tile. */
export default function Tile7({ d, cids }: { d: Tile7Data; cids: string[] }) {
  return (
    <td data-cid={cids[0]} className="h-[3.3125rem] border-b border-solid border-b-surface table-cell py-4 align-top text-xs leading-5 tracking-[0.1px] text-center max-md:pr-2.5 max-md:text-left 2xl:hidden">
      <div data-cid={cids[1]} className="h-5 flex flex-col justify-center items-center max-md:items-start 2xl:hidden">
        <p data-cid={cids[2]} className="w-37.5 block min-w-37.5 text-muted-foreground whitespace-pre-wrap 2xl:hidden">
          {d.description}
        </p>
      </div>
    </td>
  );
}
