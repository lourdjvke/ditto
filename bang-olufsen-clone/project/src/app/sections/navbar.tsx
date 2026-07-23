import Icon from "../svgs/svg-icon";
/** Top navigation bar. */
export default function Navbar() {
  return (
    <div className="block relative z-1 max-md:bg-background max-md:bg-[none] 2xl:bg-background 2xl:bg-[none]" data-cid="n15">
      <div className="h-29 flex relative px-9 items-center max-md:h-[5.3125rem] max-md:px-4 md:max-lg:h-20.5 md:max-lg:px-6" data-cid="n16">
        <button className="w-19 h-4.5 flex relative items-center text-center cursor-pointer" data-cid="n17" data-component="button" aria-haspopup="dialog" aria-label="Menu" type="button">
          <Icon cid={"n18"} />
          <em className="w-5 h-[1.5px] block relative -mt-[0.5625rem] mr-[0.6875rem] italic indent-[-999px] bg-background max-md:bg-border 2xl:bg-border before:content-[''] before:block before:absolute before:top-2 before:-bottom-2 before:inset-x-0 before:w-5 before:h-[1.5px] before:bg-background max-md:before:bg-border 2xl:before:bg-border" data-cid="n19" />
          <p className="block text-background text-xs leading-5 tracking-[0.1px] whitespace-pre-wrap max-md:text-border 2xl:text-border" data-cid="n20">
            Menu
          </p>
        </button>
        <div className="w-160 h-8 flex absolute left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] -z-1 min-w-0 justify-center items-center transform-[matrix(1,0,0,1,-320,0)] max-md:w-[187.5px] max-md:transform-[matrix(1,0,0,1,-93.75,0)] md:max-lg:w-96 md:max-lg:transform-[matrix(1,0,0,1,-192,0)] 2xl:w-240 2xl:transform-[matrix(1,0,0,1,-480,0)]" data-cid="n21">
          <div className="block" data-cid="n22">
            <a className="block text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-cid="n23" data-component="link" aria-label={"Bang & Olufsen : click to navigate to homepage"} href="/en/int">
              <p className="block text-border text-[0rem] leading-0 tracking-[-0.5px] text-center whitespace-pre-wrap" data-cid="n24">
                <img className="w-50 h-[1.0625rem] flex max-w-full max-h-20 overflow-clip max-lg:w-29.5 max-lg:h-2.5" data-cid="n25" data-component="image" alt="Header logo white" id="header-logo" src="/assets/cloned/svg/82d176b7faa2.svg" title={"Bang & Olufsen"} />
                <img className="w-12.5 h-4 inline max-w-full mt-1 overflow-clip text-[0.5625rem] leading-[0.5625rem] max-lg:hidden" data-cid="n26" data-component="image" alt="Est 1925 logo subline in white font" src="/assets/cloned/svg/a19aaf71a505.svg" />
              </p>
            </a>
          </div>
        </div>
        <div className="h-8 flex ml-255 items-center order-[1] max-md:ml-[14.6875rem] md:max-lg:ml-153 2xl:ml-415" data-cid="n27">
          <div className="flex" data-cid="n28">
            <div className="block max-lg:hidden" data-cid="n29">
              <button className="w-8 h-8 flex min-w-8 mr-2 justify-center text-center cursor-pointer max-lg:hidden" data-cid="n30" data-component="button" aria-label="Account" role="link" type="button">
                <div className="block max-lg:hidden" data-cid="n31">
                  <img className="w-8 h-8 inline max-w-full overflow-clip max-lg:hidden" data-cid="n32" data-component="image" alt="Login/Create account" src="/assets/cloned/svg/a865def8fb17.svg" />
                </div>
              </button>
            </div>
            <div className="flex mr-2 flex-col items-start max-lg:hidden" data-cid="n33">
              <a className="w-8 h-8 flex flex-col justify-center text-muted-foreground cursor-pointer max-lg:hidden hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-cid="n34" data-component="link" aria-label="Store Locator" href="https://stores.bang-olufsen.com/en/search?country=INT">
                <div className="w-8 h-8 block max-lg:hidden" data-cid="n35">
                  <img className="w-8 h-8 inline max-w-full overflow-clip max-lg:hidden" data-cid="n36" data-component="image" alt="Store Locator" aria-hidden="false" src="/assets/cloned/svg/cf54b34802e9.svg" title="Store Locator" />
                </div>
              </a>
            </div>
          </div>
          <div className="h-8 block" data-cid="n37">
            <span className="w-8 h-8 block" data-cid="n38">
              <img className="w-8 h-8 inline max-w-full overflow-clip" data-cid="n39" data-component="image" alt="View Cart" src="/assets/cloned/svg/9155dccf36cd.svg" title="View Cart" />
            </span>
            <p className="w-px h-px block absolute overflow-hidden text-muted-foreground leading-6.5 tracking-[0.4px] whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n40" aria-atomic="true" aria-live="assertive" role="alert">
              <span className="inline" data-cid="n41">
                Basket Preview Modal is Closed
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
