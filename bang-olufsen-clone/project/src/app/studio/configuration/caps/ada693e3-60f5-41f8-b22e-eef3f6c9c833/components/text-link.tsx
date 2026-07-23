import type { TextLinkStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type TextLinkData = {
  ariachecked: string;
  value: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids, styles }: { d: TextLinkData; cids: string[]; styles: TextLinkStyles }) {
  return (
    <button data-cid={cids[0]} className={cn("block relative px-2 rounded-full flex-1 text-center whitespace-nowrap text-nowrap cursor-pointer pointer-events-none h-5 2xl:hidden before:content-[''] before:block before:absolute before:inset-0 before:w-[66.3px] before:h-6 before:-m-0.5 before:p-0.5 2xl:before:hidden", styles.className)} data-component="button" aria-checked={d.ariachecked} role="radio" type="button" value={d.value}>
      <span data-cid={cids[1]} className="inline px-2 pointer-events-none 2xl:hidden">
        {d.label}
      </span>
    </button>
  );
}
