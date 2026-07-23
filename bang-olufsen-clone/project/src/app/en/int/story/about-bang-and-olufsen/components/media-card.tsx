import type { MediaCardStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type MediaCardData = {
  id: string;
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  href2: string;
  title: string;
  title2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("w-[413.3px] list-item max-w-[33.3333%] my-3 px-4 shrink-0 basis-1/3 [animation-name:gDibJC] [animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] [animation-fill-mode:forwards] md:max-lg:w-[253.3px] md:max-lg:px-3 2xl:w-[490.7px]", styles.className)} id={d.id}>
      <div data-cid={cids[1]} className={cn("block mb-14 md:max-lg:mb-10", styles.className2)}>
        <article data-cid={cids[2]} className={cn("block", styles.className3)} aria-label={d.ariaLabel}>
          <div data-cid={cids[3]} className={cn("block", styles.className4)}>
            <a data-cid={cids[4]} className={cn("block text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]", styles.className5)} data-component="link" href={d.href}>
              {" "}
              <div data-cid={cids[5]} className={cn("block relative", styles.className6)}>
                <div data-cid={cids[6]} className={cn("block isolate overflow-hidden", styles.className7)}>
                  <picture data-cid={cids[7]} className={cn("inline", styles.className8)}>
                    <img data-cid={cids[8]} className={cn("w-[23.8125rem] h-[23.8125rem] block relative max-w-full overflow-clip md:max-lg:w-[14.3125rem] md:max-lg:h-[14.3125rem] 2xl:w-[28.6875rem] 2xl:h-[35.8125rem]", styles.className9)} data-component="image" alt={d.alt} sizes="(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px" src={d.imgSrc} />
                  </picture>
                </div>
              </div>
            </a>
          </div>
          <div data-cid={cids[9]} className={cn("block", styles.className10)}>
            <div data-cid={cids[10]} className={cn("block", styles.className11)}>
              <a data-cid={cids[11]} className={cn("block text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]", styles.className12)} data-component="link" href={d.href2}>
                {" "}
                <h2 data-cid={cids[12]} className={cn("block mt-6 pb-1 text-sm leading-6 tracking-[1.7px] uppercase md:max-lg:mt-4", styles.className13)} data-component="heading">
                  {d.title}
                </h2>
                <h3 data-cid={cids[13]} className={cn("h-9 block mb-5 text-border text-2xl leading-9 md:max-lg:h-16 md:max-lg:text-[1.375rem] md:max-lg:leading-8", styles.className14)} data-component="heading">
                  <span data-cid={cids[14]} className={cn("inline", styles.className15)}>
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
