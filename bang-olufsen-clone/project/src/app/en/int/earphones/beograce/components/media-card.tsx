import type { MediaCardStyles } from "../_styles";
import { cn } from "@/lib/utils";
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
    <div data-cid={cids[0]} className="block relative">
      <div data-cid={cids[1]} className="h-176 block relative max-md:h-203 md:max-lg:h-256 2xl:h-264">
        <span data-cid={cids[2]} className="h-full block absolute top-0 inset-x-0 overflow-hidden">
          <img data-cid={cids[3]} className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip object-cover" data-component="image" alt={d.alt} sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} />
        </span>
      </div>
      <div data-cid={cids[4]} className="h-full block absolute top-0 inset-x-0">
        <div data-cid={cids[5]} className="h-full block relative max-w-425 mx-auto">
          <div data-cid={cids[6]} className={cn("block absolute z-1 max-w-150 py-20 px-21.5 shrink-0 basis-[41.6667%] max-md:max-w-full max-md:py-12 max-md:px-8 max-md:basis-full md:max-lg:max-w-[66.6667%] md:max-lg:basis-2/3", styles.className)}>
            <h2 data-cid={cids[7]} className="block mb-6 text-background text-4xl leading-13.5 tracking-[-0.5px] max-md:text-2xl max-md:leading-8 md:max-lg:text-[1.625rem] md:max-lg:leading-10" data-component="heading">
              {d.title}
            </h2>
            <p data-cid={cids[8]} className="block mb-6 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap">
              {d.description}
            </p>
            <div data-cid={cids[9]} className="block">
              <div data-cid={cids[10]} className="block">
                <button data-cid={cids[11]} className="h-7.5 border-2 border-solid border-clr-0 inline-flex relative items-center gap-3 text-background leading-6.5 tracking-[0.2px] text-center cursor-pointer before:content-[''] before:block before:absolute before:top-[24.5px] before:right-0 before:bottom-0 before:left-[2.3125rem] before:w-[8.55rem] before:h-[1.5px] before:bg-background before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.75px] after:content-[''] after:block after:absolute after:top-[24.5px] after:right-0 after:bottom-0 after:left-[2.3125rem] after:w-[8.55rem] after:h-[1.5px] after:bg-background after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[136.812px_0.75px]" data-component="button" aria-label={d.ariaLabel} type="button">
                  <span data-cid={cids[12]} className="w-6 h-6 block relative" />
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
