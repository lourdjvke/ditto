import type { TileStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type TileData = {
  ariaLabel: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("box-content flex mb-[35.5px] flex-col items-start text-sm leading-[1.0625rem] tracking-[2px] uppercase whitespace-nowrap text-nowrap cursor-pointer max-lg:hidden 2xl:mb-12", styles.className)} aria-label={d.ariaLabel}>
      <span data-cid={cids[1]} className="box-content block max-lg:hidden">
        {d.text}
      </span>
      <span data-cid={cids[2]} className="box-content h-[1.0625rem] block max-lg:hidden">
        {" "}
      </span>
    </div>
  );
}
