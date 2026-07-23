import type { Tile6Styles } from "../_styles";
import { cn } from "@/lib/utils";
export type Tile6Data = {
  description: string;
};
/** A content tile. */
export default function Tile6({ d, cids, styles }: { d: Tile6Data; cids: string[]; styles: Tile6Styles }) {
  return (
    <td data-cid={cids[0]} className={cn("border-b border-solid border-b-surface table-cell py-4 align-top text-xs leading-5 tracking-[0.1px] text-center max-md:pr-2.5 max-md:text-left 2xl:hidden", styles.className)}>
      <div data-cid={cids[1]} className={cn("flex flex-col justify-center items-center max-md:items-start 2xl:hidden", styles.className2)}>
        <p data-cid={cids[2]} className={cn("h-full block min-w-37.5 text-muted-foreground whitespace-pre-wrap max-lg:w-full 2xl:hidden", styles.className3)}>
          {d.description}
        </p>
      </div>
    </td>
  );
}
