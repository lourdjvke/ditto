import type { ListRowStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type ListRowData = {
  ariahidden: string;
  ariaLabel: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className="w-9 h-5 min-h-5 flex min-w-9 justify-center items-center align-middle">
      <button data-cid={cids[1]} className={cn("block relative rounded-[50%] text-[0rem] leading-0 indent-[-9999px] cursor-pointer before:content-[''] before:hidden before:absolute before:bottom-[0.1875rem] before:left-0.5 before:w-0.5", styles.className)} data-component="button" aria-hidden={d.ariahidden} aria-label={d.ariaLabel} aria-pressed="false" type="button">
        {d.label}
      </button>
    </li>
  );
}
