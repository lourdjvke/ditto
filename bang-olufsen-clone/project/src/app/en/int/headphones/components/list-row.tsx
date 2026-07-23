import type { ListRowStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type ListRowData = {
  ariaselected: string;
  id: string;
  ariaLabel: string;
  href: string;
  description: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("block mb-[0.1875rem] shrink-0 overflow-hidden", styles.className)} aria-selected={d.ariaselected} id={d.id} role="tab">
      <div data-cid={cids[1]} className={cn("block", styles.className2)}>
        <a data-cid={cids[2]} className={cn("block relative text-muted-foreground text-sm leading-6 tracking-[2px] text-left uppercase cursor-pointer max-lg:text-xs max-lg:leading-5", styles.className3)} data-component="link" aria-label={d.ariaLabel} href={d.href}>
          <span data-cid={cids[3]} className={cn("block", styles.className4)}>
            <p data-cid={cids[4]} className="h-4.5 min-h-4.5 flex items-center text-border text-xs leading-4.5 whitespace-pre-wrap bg-background max-lg:[font-size:inherit]">
              {d.description}
            </p>
          </span>
        </a>
      </div>
    </li>
  );
}
