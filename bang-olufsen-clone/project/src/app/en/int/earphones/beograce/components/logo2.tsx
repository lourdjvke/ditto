import type { Logo2Styles } from "../_styles";
import { cn } from "@/lib/utils";
export type Logo2Data = {
  alt: string;
  imgSrc: string;
  label: string;
  href: string;
  label2: string;
};
/** A logo. */
export default function Logo2({ d, cids, styles }: { d: Logo2Data; cids: string[]; styles: Logo2Styles }) {
  return (
    <li data-cid={cids[0]} className="h-9 block pb-2.5 text-muted-foreground">
      <img data-cid={cids[1]} className="w-7.5 h-7.5 inline max-w-full mr-2.5 -mb-2.5 overflow-clip" data-component="image" alt={d.alt} src={d.imgSrc} title={d.label} />
      <a data-cid={cids[2]} className={cn("inline text-xs leading-5 tracking-[0.1px] cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label2}
        <span data-cid={cids[3]} className={cn("w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]", styles.className2)}>
          {" opens in a new tab "}
        </span>
      </a>
    </li>
  );
}
