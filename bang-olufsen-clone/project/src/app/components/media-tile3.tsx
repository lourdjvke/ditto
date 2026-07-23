import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
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
export default function MediaTile3({ d, cids, styles }: { d: MediaTile3Data; cids: string[]; styles: MediaTile3Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("hidden 2xl:w-88 2xl:h-124 2xl:list-item 2xl:max-w-[95%] 2xl:max-h-124 2xl:shrink-0 2xl:basis-[calc(25%_-_16px)] 2xl:bg-clr-0 2xl:[animation-name:gDibJC] 2xl:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] 2xl:[animation-fill-mode:forwards]", styles.className)}>
      <div data-cid={cids[1]} className="hidden 2xl:h-full 2xl:flex 2xl:relative 2xl:pb-4 2xl:flex-col 2xl:justify-center 2xl:bg-clr-0">
        <article data-cid={cids[2]} className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:overflow-hidden 2xl:text-center", styles.className2)}>
          <div data-cid={cids[3]} className="hidden 2xl:h-full 2xl:block">
            <a data-cid={cids[4]} className="hidden 2xl:h-full 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-between 2xl:overflow-hidden 2xl:text-muted-foreground 2xl:cursor-pointer" href={d.href}>
              <div data-cid={cids[5]} className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-between 2xl:overflow-hidden">
                <div data-cid={cids[6]} className="hidden 2xl:block 2xl:overflow-hidden 2xl:object-cover">
                  <div data-cid={cids[7]} className="hidden 2xl:h-full 2xl:block 2xl:relative">
                    <div data-cid={cids[8]} className="hidden 2xl:block 2xl:relative 2xl:pt-[63.5px] 2xl:pb-[49.5px] 2xl:px-8 2xl:object-cover 2xl:bg-clr-0">
                      <div data-cid={cids[9]} className="hidden 2xl:block">
                        <picture data-cid={cids[10]} className="hidden 2xl:inline">
                          <img data-cid={cids[11]} className="hidden 2xl:w-full 2xl:h-71.5 2xl:block 2xl:relative 2xl:max-w-full 2xl:px-px 2xl:overflow-clip 2xl:object-cover" alt={d.alt} sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src={d.imgSrc} />
                        </picture>
                      </div>
                    </div>
                    <div data-cid={cids[12]} className="hidden">
                      <div data-cid={cids[13]} className="hidden 2xl:h-full 2xl:block 2xl:pointer-events-none">
                        <picture data-cid={cids[14]} className="hidden 2xl:inline 2xl:pointer-events-none">
                          <img data-cid={cids[15]} className="hidden 2xl:w-full 2xl:h-[24.8125rem] 2xl:block 2xl:relative 2xl:max-w-full 2xl:px-px 2xl:overflow-clip 2xl:object-cover 2xl:pointer-events-none" alt={d.alt2} sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src={d.imgSrc2} />
                        </picture>
                      </div>
                    </div>
                    <div data-cid={cids[16]} className="hidden 2xl:block" />
                  </div>
                </div>
              </div>
              <div data-cid={cids[17]} className={cn("hidden 2xl:flex 2xl:pt-4 2xl:px-4 2xl:flex-col 2xl:justify-end 2xl:items-start 2xl:self-stretch", styles.className3)}>
                <div data-cid={cids[18]} className={cn("hidden 2xl:block 2xl:text-border 2xl:text-left", styles.className4)}>
                  <span data-cid={cids[19]} className="hidden 2xl:inline 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]">
                    {d.label}
                  </span>
                </div>
                <div data-cid={cids[20]} className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-between">
                  <div data-cid={cids[21]} className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:text-border 2xl:text-left">
                    <div data-cid={cids[22]} className="hidden 2xl:block">
                      <div data-cid={cids[23]} className="hidden 2xl:block">
                        <span data-cid={cids[24]} className="hidden 2xl:inline">
                          <span data-cid={cids[25]} className="hidden 2xl:inline 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]">
                            {d.label2}
                          </span>
                          {" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-cid={cids[26]} className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:z-3 2xl:max-h-[1.5625rem] 2xl:px-4 2xl:justify-between 2xl:items-center 2xl:self-start 2xl:bg-clr-0">
                <p data-cid={cids[27]} className="hidden 2xl:flex 2xl:text-border 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap">
                  <span data-cid={cids[28]} className="hidden 2xl:block">
                    {d.description}
                  </span>
                </p>
                <div data-cid={cids[29]} className="hidden 2xl:block 2xl:max-w-[1.5625rem] 2xl:max-h-[1.5625rem] 2xl:text-foreground 2xl:cursor-default" type="button">
                  <span data-cid={cids[30]} className="hidden 2xl:inline-block 2xl:relative 2xl:max-w-full 2xl:overflow-hidden">
                    <span data-cid={cids[31]} className="hidden 2xl:block 2xl:max-w-full">
                      <img data-cid={cids[32]} className="hidden 2xl:w-[1.5625rem] 2xl:h-[1.5625rem] 2xl:block 2xl:max-w-full 2xl:overflow-clip" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                    </span>
                    <img data-cid={cids[33]} className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-clip 2xl:cursor-pointer" alt="plus-open-variants-icon" src="/assets/cloned/svg/b333d902dbee.svg" srcSet="/assets/cloned/svg/b333d902dbee.svg 1x, /assets/cloned/svg/b333d902dbee.svg 2x" />
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
