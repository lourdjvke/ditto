import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  ariahidden: string;
  ariaLabel: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, cids, styles }: { d: ListRow2Data; cids: string[]; styles: ListRow2Styles }) {
  return (
    <li data-cid={cids[0]} className="hidden 2xl:w-9 2xl:h-5 2xl:min-h-5 2xl:flex 2xl:min-w-9 2xl:justify-center 2xl:items-center 2xl:align-middle">
      <button data-cid={cids[1]} className={cn("hidden 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:text-[0rem] 2xl:leading-0 2xl:indent-[-9999px] 2xl:cursor-pointer before:content-[''] before:hidden before:absolute before:bottom-[0.1875rem] before:left-0.5 before:w-0.5 max-lg:before:hidden", styles.className)} aria-hidden={d.ariahidden} aria-label={d.ariaLabel} aria-pressed="false" type="button">
        {d.label}
      </button>
    </li>
  );
}
