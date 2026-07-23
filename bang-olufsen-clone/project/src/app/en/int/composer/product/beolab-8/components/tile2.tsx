import type { Tile2Styles } from "../_styles";
import { cn } from "@/lib/utils";
export type Tile2Data = {
  text: string;
};
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("box-content block pr-4 text-color-001 text-xs leading-5 tracking-[0.1px] text-right capitalize [font-feature-settings:'clig'_0,_'liga'_0] cursor-pointer max-lg:hidden 2xl:leading-[inherit]", styles.className)}>
      <div data-cid={cids[1]} className={cn("box-content block overflow-hidden max-lg:hidden", styles.className2)}>
        <div data-cid={cids[2]} className={cn("box-content flex flex-col max-lg:hidden", styles.className3)}>
          <span data-cid={cids[3]} className={cn("box-content block text-base leading-6.5 tracking-[0.2px] max-lg:hidden", styles.className4)}>
            {d.text}
          </span>
        </div>
      </div>
    </div>
  );
}
