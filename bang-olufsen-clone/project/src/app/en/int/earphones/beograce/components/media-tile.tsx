import type { MediaTileStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type MediaTileData = {
  href: string;
  alt: string;
  imgSrc: string;
  alt2: string;
  imgSrc2: string;
  label: string;
  label2: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, cids, styles }: { d: MediaTileData; cids: string[]; styles: MediaTileStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("w-73.5 list-item max-w-[95%] max-h-[28.8rem] shrink-0 basis-[calc(25%_-_16px)] bg-surface-2 [animation-name:gDibJC] [animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] [animation-fill-mode:forwards] max-md:w-[337.3px] max-md:min-h-[262.5px] max-md:basis-full max-lg:max-h-none md:max-lg:w-[300.7px] md:max-lg:basis-[calc(41.6667%_-_16px)] 2xl:w-88 2xl:max-h-124", styles.className)}>
      <div data-cid={cids[1]} className="h-full flex relative pb-4 flex-col justify-center bg-surface-2">
        <article data-cid={cids[2]} className="h-full flex relative flex-col overflow-hidden text-center">
          <div data-cid={cids[3]} className="h-full block">
            <a data-cid={cids[4]} className="h-full flex relative flex-col justify-between overflow-hidden text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-component="link" href={d.href}>
              <div data-cid={cids[5]} className="flex relative flex-col justify-between overflow-hidden">
                <div data-cid={cids[6]} className="block overflow-hidden object-cover">
                  <div data-cid={cids[7]} className="block relative group">
                    <div data-cid={cids[8]} className="block relative pt-[63.5px] pb-[49.5px] px-8 object-cover bg-surface-2 max-md:py-[2.4375rem] max-md:px-3 md:max-lg:pt-18 md:max-lg:pb-14 md:max-lg:px-[26.5px] hover:opacity-100 focus:opacity-100">
                      <div data-cid={cids[9]} className="block">
                        <picture data-cid={cids[10]} className="inline">
                          <img data-cid={cids[11]} className="w-full h-57 block relative max-w-full px-px overflow-clip object-cover max-md:h-78 md:max-lg:h-61.5 2xl:h-71.5" data-component="image" alt={d.alt} sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src={d.imgSrc} />
                        </picture>
                      </div>
                    </div>
                    <div data-cid={cids[12]} className="w-73.5 h-[21.3125rem] block absolute top-0 left-0 z-1 opacity-0 object-cover bg-surface-2 pointer-events-none group-hover:opacity-100">
                      <div data-cid={cids[13]} className="h-full block pointer-events-none">
                        <picture data-cid={cids[14]} className="inline pointer-events-none">
                          <img data-cid={cids[15]} className="w-full h-[21.3125rem] block relative max-w-full px-px overflow-clip object-cover pointer-events-none max-md:h-97.5 md:max-lg:h-93.5 2xl:h-[24.8125rem]" data-component="image" alt={d.alt2} sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src={d.imgSrc2} />
                        </picture>
                      </div>
                    </div>
                    <div data-cid={cids[16]} className="block" />
                  </div>
                </div>
              </div>
              <div data-cid={cids[17]} className={cn("flex pt-4 px-4 flex-col justify-end items-start self-stretch max-lg:justify-center", styles.className2)}>
                <div data-cid={cids[18]} className={cn("block text-border text-left", styles.className3)}>
                  <span data-cid={cids[19]} className="inline text-xs leading-5 tracking-[0.1px]">
                    {d.label}
                  </span>
                </div>
                <div data-cid={cids[20]} className="w-full flex relative justify-between">
                  <div data-cid={cids[21]} className="w-full flex relative flex-col justify-start items-start text-border text-left max-lg:[text-align:inherit]">
                    <div data-cid={cids[22]} className="block max-md:flex max-md:items-center">
                      <div data-cid={cids[23]} className="block max-md:flex max-md:flex-wrap max-md:items-center">
                        <span data-cid={cids[24]} className="inline max-md:block">
                          <span data-cid={cids[25]} className="inline text-xs leading-5 tracking-[0.1px]">
                            {d.label2}
                          </span>
                          {" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-cid={cids[26]} className="w-full flex relative z-3 max-h-[1.5625rem] px-4 justify-between items-center self-start bg-surface-2">
                <p data-cid={cids[27]} className="flex text-border text-xs leading-5 tracking-[0.1px] whitespace-pre-wrap">
                  <span data-cid={cids[28]} className="block">
                    {d.description}
                  </span>
                </p>
                <div data-cid={cids[29]} className="block max-w-[1.5625rem] max-h-[1.5625rem] text-foreground cursor-default" data-component="button" type="button">
                  <span data-cid={cids[30]} className="inline-block relative max-w-full overflow-hidden">
                    <span data-cid={cids[31]} className="block max-w-full">
                      <img data-cid={cids[32]} className="w-[1.5625rem] h-[1.5625rem] block max-w-full overflow-clip" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                    </span>
                    <img data-cid={cids[33]} className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full rounded-[50%] justify-center items-center overflow-clip cursor-pointer" data-component="avatar" alt="plus-open-variants-icon" src="/assets/cloned/svg/b333d902dbee.svg" srcSet="/assets/cloned/svg/b333d902dbee.svg 1x, /assets/cloned/svg/b333d902dbee.svg 2x" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </article>
      </div>
    </li>
  );
}
