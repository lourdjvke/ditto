import type { ProductCardStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type ProductCardData = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  ariaLabel2: string;
  href2: string;
  title: string;
};
/** A product card. */
export default function ProductCard({ d, cids, styles }: { d: ProductCardData; cids: string[]; styles: ProductCardStyles }) {
  return (
    <th data-cid={cids[0]} className={cn("w-100.5 table-cell min-w-35 py-5 px-2.5 align-middle font-bold text-center max-md:w-40 max-md:sticky max-md:top-0 max-md:z-1 max-lg:py-4 max-md:bg-background max-lg:px-0 md:max-lg:w-[250.3px] 2xl:w-[333.5px]", styles.className)}>
      <div data-cid={cids[1]} className={cn("flex relative flex-col", styles.className2)}>
        <span data-cid={cids[2]} className="h-37.5 flex my-2.5 mx-auto max-md:h-25 max-md:mx-0">
          <div data-cid={cids[3]} className="block">
            <a data-cid={cids[4]} className={cn("h-full block text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]", styles.className3)} data-component="link" aria-label={d.ariaLabel} href={d.href}>
              <span data-cid={cids[5]} className="inline-block relative max-w-full overflow-hidden">
                <span data-cid={cids[6]} className="block max-w-full">
                  <img data-cid={cids[7]} className="w-37.5 h-37.5 block max-w-full overflow-clip max-md:w-25 max-md:h-25" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </span>
                <img data-cid={cids[8]} className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip" data-component="image" alt={d.alt} src={d.imgSrc} srcSet={d.srcSet} />
              </span>
            </a>
          </div>
        </span>
        <span data-cid={cids[9]} className="w-95.5 h-6 block text-border text-sm font-normal leading-6 tracking-[1.7px] uppercase max-md:w-25 max-md:h-12.5 max-md:min-h-12.5 max-md:mr-2.5 max-md:self-start max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] md:max-lg:w-[250.3px] md:max-lg:h-5 2xl:w-[313.5px]">
          <div data-cid={cids[10]} className={cn("block", styles.className4)}>
            <a data-cid={cids[11]} className="inline text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-component="link" aria-label={d.ariaLabel2} href={d.href2}>
              {d.title}
            </a>
          </div>
        </span>
      </div>
    </th>
  );
}
