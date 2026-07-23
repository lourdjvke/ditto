import type { FeatureCardStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type FeatureCardData = {
  ariacontrols: string;
  id: string;
  title: string;
  ariacontrols2: string;
  id2: string;
  title2: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("border-t border-solid border-t-surface block overflow-hidden", styles.className)} itemProp="mainEntity">
      <button data-cid={cids[1]} className="hidden 2xl:w-full 2xl:h-16 2xl:flex 2xl:py-5 2xl:text-left 2xl:cursor-pointer" aria-controls={d.ariacontrols} aria-expanded="false" id={d.id} type="button">
        <h3 data-cid={cids[2]} className="hidden 2xl:block 2xl:flex-1 2xl:text-border 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:uppercase" itemProp="name">
          {d.title}
        </h3>
        <em data-cid={cids[3]} className="hidden 2xl:w-5 2xl:h-5 2xl:border 2xl:border-solid 2xl:border-border 2xl:block 2xl:relative 2xl:rounded-[100%] 2xl:overflow-hidden 2xl:italic 2xl:indent-[-999px] 2xl:bg-border before:content-[''] before:block before:absolute before:top-[0.5625rem] before:right-[0.4375rem] before:bottom-px before:left-[0.5625rem] before:w-0.5 before:h-2 before:bg-background before:transform-[matrix(1,0,0,1,-1,-4)] before:origin-[1px_4px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[0.5625rem] after:right-px after:bottom-[0.4375rem] after:left-[0.5625rem] after:w-2 after:h-0.5 after:bg-background after:transform-[matrix(1,0,0,1,-4,-1)] after:origin-[4px_1px] max-lg:after:hidden" />
      </button>
      <button data-cid={cids[4]} className={cn("w-full flex py-5 text-left cursor-pointer 2xl:hidden", styles.className2)} data-component="button" aria-controls={d.ariacontrols2} aria-expanded="false" id={d.id2} type="button">
        <h3 data-cid={cids[5]} className="block flex-1 text-border text-sm leading-6 tracking-[1.7px] uppercase max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] 2xl:hidden" data-component="heading" itemProp="name">
          {d.title2}
        </h3>
        <em data-cid={cids[6]} className="w-5 h-5 border border-solid border-border block relative rounded-[100%] overflow-hidden italic indent-[-999px] bg-border 2xl:hidden before:content-[''] before:block before:absolute before:top-[0.5625rem] before:right-[0.4375rem] before:bottom-px before:left-[0.5625rem] before:w-0.5 before:h-2 before:bg-background before:transform-[matrix(1,0,0,1,-1,-4)] before:origin-[1px_4px] 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[0.5625rem] after:right-px after:bottom-[0.4375rem] after:left-[0.5625rem] after:w-2 after:h-0.5 after:bg-background after:transform-[matrix(1,0,0,1,-4,-1)] after:origin-[4px_1px] 2xl:after:hidden" />
      </button>
      <span data-cid={cids[7]} className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" aria-hidden="true">
        Expand
      </span>
    </div>
  );
}
