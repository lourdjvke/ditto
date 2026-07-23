import Illustration from "../svgs/svg-illustration";
import Icon from "../svgs/svg-icon";
/** Top navigation bar. */
export default function Navbar() {
  return (
    <nav className="h-6.5 grid gap-4 grid-rows-[26px] pointer-events-none grid-cols-[1fr_auto_1fr] 2xl:hidden" data-cid="n7" data-component="nav">
      <div className="h-6.5 flex gap-2 pointer-events-none 2xl:hidden" data-cid="n8">
        <span className="h-6.5 block py-1 px-2 overflow-hidden text-muted-foreground text-[0.6875rem] font-medium leading-3.5 tracking-[0.06px] whitespace-nowrap text-nowrap bg-background pointer-events-none 2xl:hidden" data-cid="n9" title="Classic Dad Cap">
          Classic Dad Cap
        </span>
      </div>
      <a className="h-6.5 flex rounded-sm items-center gap-1 cursor-pointer pointer-events-none 2xl:hidden" data-cid="n10" data-component="link" aria-disabled="false" href="/">
        <Illustration cid={"n11"} />
        <span className="block text-sm font-medium leading-5 pointer-events-none 2xl:hidden" data-cid="n12">
          Studio
        </span>
      </a>
      <div className="flex gap-2 pointer-events-none 2xl:hidden" data-cid="n13">
        <div className="block relative pointer-events-none 2xl:hidden" data-cid="n14">
          <button className="border border-solid border-clr-0 flex relative px-3 rounded-full justify-center items-center gap-2 text-color-001 text-sm font-medium leading-[1.125rem] text-center whitespace-nowrap text-nowrap cursor-pointer pointer-events-none h-[1.625rem] 2xl:hidden 2xl:h-6.5 hover:bg-clr-2" data-cid="n15" data-component="button">
            <Icon cid={"n16"} />
            Share
          </button>
          <div className="block pointer-events-none 2xl:hidden" data-cid="n17" aria-label="Notifications (F8)" role="region" />
        </div>
      </div>
    </nav>
  );
}
