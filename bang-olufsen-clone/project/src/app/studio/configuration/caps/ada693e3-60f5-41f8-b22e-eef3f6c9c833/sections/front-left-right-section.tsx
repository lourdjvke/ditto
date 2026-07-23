import TextLink, { type TextLinkData } from "../components/text-link";
import { TextLink_cids } from "../_cids";
import { TextLink_styles } from "../_styles";
const TextLink_data: TextLinkData[] = [
    { ariachecked: "true", value: "front", label: "Front" },
    { ariachecked: "false", value: "left", label: "Left" },
    { ariachecked: "false", value: "right", label: "Right" },
    { ariachecked: "false", value: "back", label: "Back" },
    { ariachecked: "false", value: "label", label: "Label" }
];
/** Front Left Right section. */
export default function FrontLeftRightSection({ textLinkData = TextLink_data } = {}) {
  return (
    <div className="h-179 block relative rounded-2xl flex-1 overflow-hidden pointer-events-none max-md:h-182 md:max-lg:h-235 2xl:hidden" data-cid="n18">
      <div className="h-full block relative pointer-events-none 2xl:hidden" data-cid="n19">
        <img className="w-189 h-179 block overflow-clip aspect-[auto_1512/1432] align-middle pointer-events-none max-md:w-0 max-md:h-182 max-md:aspect-[auto_0/1456] md:max-lg:w-88 md:max-lg:h-235 md:max-lg:aspect-[auto_704/1880] 2xl:hidden" data-cid="n20" height="1432" src="/assets/cloned/images/157730738db1.png" width="1512" alt="" />
      </div>
      <div className="h-8 flex absolute bottom-4 inset-x-0 justify-center pointer-events-none 2xl:hidden" data-cid="n21">
        <div className="flex relative p-1.5 rounded-full text-[0.6875rem] font-medium leading-3.5 tracking-[0.06px] bg-clr-1 shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-2)_0px_2px_4px_0px_inset] pointer-events-none 2xl:hidden" data-cid="n22" aria-required="false" dir="ltr" role="radiogroup">
          <div className="grid relative gap-1 grid-cols-[62.2812px_62.2812px_62.2812px_62.2812px_62.2812px] grid-rows-[20px] pointer-events-none max-md:grid-cols-[60.2812px_55.2344px_62.2812px_58.2344px_62.2812px] 2xl:hidden" data-cid="n23">
            <div className="w-[62.3px] block absolute top-0 min-w-0 rounded-full bg-background shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-3)_0px_1px_2px_0px] pointer-events-none h-5 2xl:hidden" data-cid="n24" />
            {textLinkData.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} styles={TextLink_styles[i]} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
