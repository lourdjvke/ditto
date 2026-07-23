import MediaCard, { type MediaCardData } from "../components/media-card";
import { MediaCard_cids } from "../_cids";
import { MediaCard_styles } from "../_styles";
const MediaCard_data: MediaCardData[] = [
    { id: "item-list-index-0", ariaLabel: "A landmark partnership with EGOT-winning artist John Legend | New Global Brand Ambassador", href: "/en/int/story/bang-olufsen-brand-ambassador-john-legend", alt: "John Legend depicted wearing Bang & Olufsen Beoplay H100 over-ear headphones in the Hourglass Sand colorway, photographed against a green background in a relaxed, music-listening pose.", sizes: "(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px", imgSrc: "/assets/cloned/images/e4d8bf7e91af.webp", href2: "/en/int/story/bang-olufsen-brand-ambassador-john-legend", title: "New Global Brand Ambassador", title2: "A landmark partnership with EGOT-winning artist John Legend" },
    { id: "item-list-index-1", ariaLabel: "Fernando Alonso on silence, precision, and the moments that stay with you | When everything works, nothing distracts you.", href: "/en/int/story/fernando-alonso-travel-music-interview", alt: "Fernando Alonso holding Bang & Olufsen Beoplay H100 headphones", sizes: "(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px", imgSrc: "/assets/cloned/images/d821bfa4e32f.webp", href2: "/en/int/story/fernando-alonso-travel-music-interview", title: "When everything works, nothing distracts you.", title2: "Fernando Alonso on silence, precision, and the moments that stay with you" },
    { id: "item-list-index-2", ariaLabel: "Give every journey the soundtrack it deserves | Travel collection", href: "/en/int/story/moved-by-beautiful-sound", alt: "A couple lying face-to-face on a picnic mat with a Bang & Olufsen Beosound A1 in Lavender placed between them, sharing a relaxed moment through music.", sizes: "(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px", imgSrc: "/assets/cloned/images/f1ecd17258e1.webp", href2: "/en/int/story/moved-by-beautiful-sound", title: "Travel collection", title2: "Give every journey the soundtrack it deserves" },
    { id: "item-list-index-3", ariaLabel: "3daysofdesign 2026 | Bang & Olufsen’s Residence of Beautiful Sound", href: "/en/int/story/3-days-of-design-2026", alt: "A corner of the 3 Days of Design event including a Beosound 2", sizes: "(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px", imgSrc: "/assets/cloned/images/71219b1a1e59.webp", href2: "/en/int/story/3-days-of-design-2026", title: "Bang & Olufsen’s Residence of Beautiful Sound", title2: "3daysofdesign 2026" }
];
/** Global Brand Ambassador section. */
export default function GlobalBrandAmbassadorSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="h-[1538.3px] block overflow-hidden max-md:h-[1185.5px] md:max-lg:h-[69.175rem] 2xl:h-[1680.7px]" data-cid="n76">
      <div className="block max-w-378 mt-7.5 mb-15 px-9 mx-auto max-lg:mb-[4.6875rem] max-lg:px-4" data-cid="n77">
        <ul className="flex -mx-4 flex-wrap [list-style-type:none] list-outside max-md:-mx-1.5 md:max-lg:-mx-3" data-cid="n78">
          {mediaCardData.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
        </ul>
      </div>
    </div>
  );
}
