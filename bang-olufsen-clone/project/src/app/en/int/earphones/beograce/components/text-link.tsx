import type { TextLinkStyles } from "../_styles";
import { cn } from "@/lib/utils";
export type TextLinkData = {
  download: string;
  href: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, cids, styles }: { d: TextLinkData; cids: string[]; styles: TextLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("flex p-2.5 text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]", styles.className)} data-component="link" download={d.download} href={d.href} rel="noopener" target="_blank">
      <div data-cid={cids[1]} className={cn("w-6 block relative [background-position:50%_50%] bg-no-repeat", styles.className2)} style={{ backgroundImage: "url(\"/assets/cloned/svg/5e692c870c40.svg\")" }} />
      <div data-cid={cids[2]} className="block ml-5">
        <p data-cid={cids[3]} className="block text-border text-sm font-bold leading-6 tracking-[0.1px] whitespace-pre-wrap max-md:text-xs max-md:leading-5">
          {d.description}
        </p>
        <p data-cid={cids[4]} className="block mt-[0.3125rem] text-xs leading-5 tracking-[0.1px] whitespace-pre-wrap">
          {"Download "}
        </p>
      </div>
      <span data-cid={cids[5]} className="w-px h-px block absolute min-w-0 overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
        {" opens in a new tab "}
      </span>
    </a>
  );
}
