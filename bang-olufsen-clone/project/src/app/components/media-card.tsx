import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
  ariaLabel: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <div data-cid={cids[0]} className="hidden 2xl:block 2xl:relative">
      <div data-cid={cids[1]} className="hidden 2xl:h-264 2xl:block 2xl:relative">
        <span data-cid={cids[2]} className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden">
          <img data-cid={cids[3]} className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" alt={d.alt} sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} />
        </span>
      </div>
      <div data-cid={cids[4]} className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
        <div data-cid={cids[5]} className="hidden 2xl:h-full 2xl:block 2xl:relative 2xl:max-w-425 2xl:mx-27.5">
          <div data-cid={cids[6]} className={cn("hidden 2xl:w-150 2xl:block 2xl:absolute 2xl:z-1 2xl:max-w-150 2xl:py-20 2xl:px-21.5 2xl:shrink-0 2xl:basis-[41.6667%]", styles.className)}>
            <h2 data-cid={cids[7]} className="hidden 2xl:block 2xl:mb-6 2xl:text-background 2xl:text-4xl 2xl:leading-13.5 2xl:tracking-[-0.5px]">
              {d.title}
            </h2>
            <p data-cid={cids[8]} className="hidden 2xl:block 2xl:mb-6 2xl:text-background 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap">
              {d.description}
            </p>
            <div data-cid={cids[9]} className="hidden 2xl:block">
              <div data-cid={cids[10]} className="hidden 2xl:block">
                <button data-cid={cids[11]} className="hidden 2xl:h-7.5 2xl:border-2 2xl:border-solid 2xl:border-clr-2 2xl:inline-flex 2xl:relative 2xl:items-center 2xl:gap-3 2xl:text-background 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:text-center 2xl:cursor-pointer before:content-[''] before:block before:absolute before:top-[24.5px] before:right-0 before:bottom-0 before:left-[2.3125rem] before:w-[8.55rem] before:h-[1.5px] before:bg-background before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.75px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[24.5px] after:right-0 after:bottom-0 after:left-[2.3125rem] after:w-[8.55rem] after:h-[1.5px] after:bg-background after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[136.812px_0.75px] max-lg:after:hidden" aria-label={d.ariaLabel} type="button">
                  <span data-cid={cids[12]} className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:relative" />
                  Explore the details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
