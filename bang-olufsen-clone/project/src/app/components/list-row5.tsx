import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  target?: string;
  label: string;
  ariaLabel?: string;
};
/** A list row. */
export default function ListRow5({ d, cids, styles }: { d: ListRow5Data; cids: string[]; styles: ListRow5Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item max-lg:hidden", styles.className)}>
      <a data-cid={cids[1]} className={cn("inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] max-lg:after:hidden", styles.className2)} data-component="link" href={d.href} target={d.target} aria-label={d.ariaLabel}>
        {d.label}
      </a>
    </li>
  );
}
