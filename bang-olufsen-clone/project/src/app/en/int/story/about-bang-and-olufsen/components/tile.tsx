import type { TileStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type TileData = {
  ariacontrols: string;
  id: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className="hidden max-md:w-[228.7px] max-md:h-6.5 max-lg:block max-md:max-w-[66.6667%] max-lg:shrink-0 max-md:basis-2/3 md:max-lg:w-50 md:max-lg:h-80.5 md:max-lg:min-h-80.5 md:max-lg:max-w-[33.3333%] md:max-lg:pr-6 md:max-lg:basis-1/3">
      <div data-cid={cids[1]} className={cn("hidden max-lg:block", styles.className)}>
        <button data-cid={cids[2]} className={cn("hidden max-md:cursor-pointer", styles.className2)} aria-controls={d.ariacontrols} aria-expanded="false" id={d.id} type="button">
          <p data-cid={cids[3]} className={cn("hidden", styles.className3)}>
            {d.description}
          </p>
        </button>
        <div data-cid={cids[4]} className="hidden max-lg:block" />
      </div>
    </div>
  );
}
