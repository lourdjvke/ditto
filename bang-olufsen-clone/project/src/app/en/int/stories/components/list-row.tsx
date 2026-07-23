import type { ListRowStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type ListRowData = {
  ariaLabel: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("block max-md:relative before:content-[''] before:block before:absolute before:top-0 before:bottom-9.5 before:h-0 md:max-lg:before:hidden 2xl:before:hidden", styles.className)} aria-selected="false" role="tab">
      <div data-cid={cids[1]} className="block">
        <a data-cid={cids[2]} className={cn("flex relative mx-4 pt-3 pb-[0.5625rem] items-center text-muted-foreground text-sm leading-[1.3125rem] tracking-[2px] text-left uppercase [word-break:break-word] cursor-pointer max-md:block max-lg:text-xs max-lg:leading-4.5 before:content-[''] before:hidden before:absolute before:-bottom-px before:left-0 before:w-full before:h-0.5 before:bg-border max-md:before:block max-md:before:top-9.5 max-md:before:right-0 max-md:before:transform-[matrix(0,0,0,1,0,0)] max-md:before:origin-[0px_1px] after:content-[''] after:block after:absolute after:top-[2.5625rem] after:-bottom-px after:inset-x-0 after:h-0.5 after:bg-border after:transform-[matrix(0,0,0,1,0,0)] max-lg:after:top-9.5 hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)] focus:border-border focus:text-border focus:outline-border focus:[text-decoration-color:var(--border)]", styles.className2)} data-component="link" aria-label={d.ariaLabel} href={d.href}>
          {d.label}
        </a>
      </div>
    </li>
  );
}
