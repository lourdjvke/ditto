import type { Tile8Styles } from "../_styles";
import { cn } from "@/lib/utils";
export type Tile8Data = {
  description: string;
};
/** A content tile. */
export default function Tile8({ d, cids, styles }: { d: Tile8Data; cids: string[]; styles: Tile8Styles }) {
  return (
    <td data-cid={cids[0]} className={cn("border-b border-solid border-b-surface table-cell py-4 align-top text-xs leading-5 tracking-[0.1px] text-center max-md:pr-2.5 max-md:text-left 2xl:hidden", styles.className)}>
      <div data-cid={cids[1]} className={cn("flex flex-col justify-center items-center max-md:items-start 2xl:hidden", styles.className2)}>
        <p data-cid={cids[2]} className="w-37.5 block min-w-37.5 text-muted-foreground whitespace-pre-wrap 2xl:hidden">
          {d.description}
        </p>
      </div>
    </td>
  );
}
