import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  ariaLabel2: string;
  href2: string;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids, styles }: { d: MediaTile2Data; cids: string[]; styles: MediaTile2Styles }) {
  return (
    <th data-cid={cids[0]} className={cn("hidden 2xl:w-[333.5px] 2xl:table-cell 2xl:min-w-35 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:font-bold 2xl:text-center", styles.className)}>
      <div data-cid={cids[1]} className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col", styles.className2)}>
        <span data-cid={cids[2]} className="hidden 2xl:w-37.5 2xl:h-37.5 2xl:flex 2xl:my-2.5 2xl:mx-[5.1125rem]">
          <div data-cid={cids[3]} className="hidden 2xl:block">
            <a data-cid={cids[4]} className="hidden 2xl:block 2xl:text-muted-foreground 2xl:cursor-pointer" aria-label={d.ariaLabel} href={d.href}>
              <span data-cid={cids[5]} className="hidden 2xl:inline-block 2xl:relative 2xl:max-w-full 2xl:overflow-hidden">
                <span data-cid={cids[6]} className="hidden 2xl:block 2xl:max-w-full">
                  <img data-cid={cids[7]} className="hidden 2xl:w-37.5 2xl:h-37.5 2xl:block 2xl:max-w-full 2xl:overflow-clip" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </span>
                <img data-cid={cids[8]} className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip" alt={d.alt} src={d.imgSrc} srcSet={d.srcSet} />
              </span>
            </a>
          </div>
        </span>
        <span data-cid={cids[9]} className="hidden 2xl:w-[313.5px] 2xl:h-6 2xl:block 2xl:text-border 2xl:text-sm 2xl:font-normal 2xl:leading-6 2xl:tracking-[1.7px] 2xl:uppercase">
          <div data-cid={cids[10]} className={cn("hidden 2xl:block", styles.className3)}>
            <a data-cid={cids[11]} className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:cursor-pointer" aria-label={d.ariaLabel2} href={d.href2}>
              {d.label}
            </a>
          </div>
        </span>
      </div>
    </th>
  );
}
