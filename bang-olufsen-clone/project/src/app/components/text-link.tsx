import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  download: string;
  href: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, cids, styles }: { d: TextLinkData; cids: string[]; styles: TextLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("hidden 2xl:h-[4.3125rem] 2xl:flex 2xl:p-2.5 2xl:text-muted-foreground 2xl:cursor-pointer", styles.className)} download={d.download} href={d.href} rel="noopener" target="_blank">
      <div data-cid={cids[1]} className="hidden 2xl:w-6 2xl:block 2xl:relative 2xl:[background-position:50%_50%] 2xl:bg-no-repeat" />
      <div data-cid={cids[2]} className={cn("hidden 2xl:block 2xl:ml-5", styles.className2)}>
        <p data-cid={cids[3]} className="hidden 2xl:block 2xl:text-border 2xl:text-sm 2xl:font-bold 2xl:leading-6 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap">
          {d.description}
        </p>
        <p data-cid={cids[4]} className="hidden 2xl:block 2xl:mt-[0.3125rem] 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap">
          {"Download "}
        </p>
      </div>
      <span data-cid={cids[5]} className="hidden 2xl:w-px 2xl:h-px 2xl:block 2xl:absolute 2xl:min-w-0 2xl:overflow-hidden 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:[clip-path:inset(50%)]">
        {" opens in a new tab "}
      </span>
    </a>
  );
}
