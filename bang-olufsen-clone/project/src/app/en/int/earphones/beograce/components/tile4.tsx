import type { Tile4Styles } from "../_styles";
import { cn } from "@/lib/utils";
export type Tile4Data = {
  description: string;
};
/** A content tile. */
export default function Tile4({ d, cids, styles }: { d: Tile4Data; cids: string[]; styles: Tile4Styles }) {
  return (
    <td data-cid={cids[0]} className={cn("border-b border-solid border-b-surface table-cell py-4 align-top text-xs leading-5 tracking-[0.1px] text-center max-md:pr-2.5 max-md:text-left 2xl:py-8", styles.className)}>
      <div data-cid={cids[1]} className={cn("flex flex-col justify-center items-center max-md:items-start 2xl:h-5", styles.className2)}>
        <p data-cid={cids[2]} className="h-full block min-w-37.5 text-muted-foreground whitespace-pre-wrap">
          {d.description}
        </p>
      </div>
    </td>
  );
}
