import type { Tile5Styles } from "../_styles";
import { cn } from "@/lib/utils";
export type Tile5Data = {
  description: string;
};
/** A content tile. */
export default function Tile5({ d, cids, styles }: { d: Tile5Data; cids: string[]; styles: Tile5Styles }) {
  return (
    <td data-cid={cids[0]} className={cn("hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-top 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:text-center", styles.className)}>
      <div data-cid={cids[1]} className={cn("hidden 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center", styles.className2)}>
        <p data-cid={cids[2]} className="hidden 2xl:block 2xl:min-w-37.5 2xl:text-muted-foreground 2xl:whitespace-pre-wrap">
          {d.description}
        </p>
      </div>
    </td>
  );
}
