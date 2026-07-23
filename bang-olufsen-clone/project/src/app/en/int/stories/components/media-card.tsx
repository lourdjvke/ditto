import type { MediaCardStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type MediaCardData = {
  id: string;
  ariaLabel: string;
  href: string;
  alt: string;
  sizes: string;
  imgSrc: string;
  href2: string;
  title: string;
  title2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item my-3 px-4 shrink-0 [animation-name:gDibJC] [animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] [animation-fill-mode:forwards] max-md:max-w-full max-md:my-1.5 max-md:px-1.5 max-md:grow md:max-lg:px-3", styles.className)} id={d.id}>
      <div data-cid={cids[1]} className={cn("block mb-14 max-md:mb-4 md:max-lg:mb-10", styles.className2)}>
        <article data-cid={cids[2]} className="block" aria-label={d.ariaLabel}>
          <div data-cid={cids[3]} className="block">
            <a data-cid={cids[4]} className="block text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-component="link" href={d.href}>
              {" "}
              <div data-cid={cids[5]} className="block relative">
                <div data-cid={cids[6]} className="block isolate overflow-hidden">
                  <picture data-cid={cids[7]} className="inline">
                    <img data-cid={cids[8]} className={cn("block relative max-w-full overflow-clip", styles.className3)} data-component="image" alt={d.alt} sizes={d.sizes} src={d.imgSrc} />
                  </picture>
                </div>
              </div>
            </a>
          </div>
          <div data-cid={cids[9]} className="block">
            <div data-cid={cids[10]} className="block">
              <a data-cid={cids[11]} className="block text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-component="link" href={d.href2}>
                {" "}
                <h2 data-cid={cids[12]} className="block mt-6 pb-1 text-sm leading-6 tracking-[1.7px] uppercase max-md:mt-2 max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] md:max-lg:mt-4" data-component="heading">
                  {d.title}
                </h2>
                <h3 data-cid={cids[13]} className={cn("block mb-5 text-border text-2xl leading-9 max-md:text-lg max-md:leading-7 md:max-lg:text-[1.375rem] md:max-lg:leading-8", styles.className4)} data-component="heading">
                  <span data-cid={cids[14]} className="inline">
                    {d.title2}
                  </span>
                </h3>
                {" "}
              </a>
            </div>
          </div>
        </article>
      </div>
    </li>
  );
}
