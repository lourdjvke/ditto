import type { TileStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type TileData = {
  htmlFor: string;
  text: string;
  ariadescribedby: string;
  id: string;
  value: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className="block mb-12">
      <label data-cid={cids[1]} className="block relative cursor-default" htmlFor={d.htmlFor}>
        <span data-cid={cids[2]} className={cn("h-5 block absolute -top-2.5 z-1 text-muted-foreground text-sm leading-5 tracking-[0.5px] transform-[matrix(1,0,0,1,0,-10.0078)]", styles.className)} aria-hidden="false">
          {d.text}
        </span>
        <span data-cid={cids[3]} className="inline relative mt-2.5 leading-6.5 tracking-[0.2px]">
          <input data-cid={cids[4]} className="w-full h-9.5 min-h-9.5 border-b border-solid border-b-border inline-block mt-2.5 py-px pr-0.5 overflow-clip text-color-001 leading-[1.125rem] bg-background cursor-text focus:border-b-color-001" data-component="input" aria-describedby={d.ariadescribedby} aria-invalid="false" id={d.id} name="dateOfBirth" type="text" value={d.value} />
        </span>
      </label>
    </div>
  );
}
