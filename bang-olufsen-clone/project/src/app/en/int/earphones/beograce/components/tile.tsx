import type { TileStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <td data-cid={cids[0]} className="hidden 2xl:h-[9.0625rem] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-top 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:text-center">
      <div data-cid={cids[1]} className={cn("hidden 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center", styles.className)}>
        <p data-cid={cids[2]} className={cn("hidden 2xl:block 2xl:min-w-37.5 2xl:text-muted-foreground 2xl:whitespace-pre-wrap", styles.className2)}>
          {d.description}
        </p>
      </div>
    </td>
  );
}
