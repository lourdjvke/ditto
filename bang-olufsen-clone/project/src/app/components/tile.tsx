import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <tr data-cid={cids[0]} className={cn("hidden 2xl:table-row 2xl:relative 2xl:align-middle", styles.className)}>
      <th data-cid={cids[1]} className={cn("hidden 2xl:w-[333.5px] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:min-w-35 2xl:mb-5 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:text-border 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:text-left 2xl:uppercase", styles.className2)}>
        {d.text}
      </th>
      <td data-cid={cids[2]} className={cn("hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-top 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:text-center", styles.className3)}>
        <div data-cid={cids[3]} className={cn("hidden 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center", styles.className4)}>
          <p data-cid={cids[4]} className="hidden 2xl:block 2xl:min-w-37.5 2xl:text-muted-foreground 2xl:whitespace-pre-wrap">
            {d.description}
          </p>
        </div>
      </td>
      <td data-cid={cids[5]} className={cn("hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-top 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:text-center", styles.className5)}>
        <div data-cid={cids[6]} className={cn("hidden 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center", styles.className6)}>
          <p data-cid={cids[7]} className="hidden 2xl:block 2xl:min-w-37.5 2xl:text-muted-foreground 2xl:whitespace-pre-wrap">
            {d.description2}
          </p>
        </div>
      </td>
      <td data-cid={cids[8]} className={cn("hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-top 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:text-center", styles.className7)}>
        <div data-cid={cids[9]} className={cn("hidden 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center", styles.className8)}>
          <p data-cid={cids[10]} className={cn("hidden 2xl:block 2xl:min-w-37.5 2xl:text-muted-foreground 2xl:whitespace-pre-wrap", styles.className9)}>
            {d.description3}
          </p>
        </div>
      </td>
    </tr>
  );
}
