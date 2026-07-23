import MediaCard, { type MediaCardData } from "../components/media-card";
import { MediaCard_cids } from "../_cids";
import { MediaCard_styles } from "../_styles";
const MediaCard_data: MediaCardData[] = [
    { id: "item-list-index-0", ariaLabel: "Bringing the past into the future | Recreated Classics", href: "/en/int/story/recreated-classics", alt: "Beogram 3000c with the Beolab 8", imgSrc: "/assets/cloned/images/f34b4d1328a5.png", href2: "/en/int/story/recreated-classics", title: "Recreated Classics", title2: "Bringing the past into the future" },
    { id: "item-list-index-1", ariaLabel: "Moving towards circularity | Our ambitions", href: "/en/int/story/longevity", alt: "Aluminium baths in the bang and Olufsen factory in Struer Denmark", imgSrc: "/assets/cloned/images/dee2b008a76d.jpg", href2: "/en/int/story/longevity", title: "Our ambitions", title2: "Moving towards circularity" },
    { id: "item-list-index-2", ariaLabel: "You dream it. We craft it. | Bang & Olufsen Atelier", href: "/en/int/story/atelier", alt: "Man holding an Atelier edition Beosound 2", imgSrc: "/assets/cloned/images/4d4e291a6043.jpg", href2: "/en/int/story/atelier", title: "Bang & Olufsen Atelier", title2: "You dream it. We craft it." }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection2({ mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="block max-w-378 mt-7.5 mb-15 px-9 mx-auto max-lg:mb-[4.6875rem] max-lg:px-4" data-cid="n231">
      <ul className="flex -mx-4 flex-wrap [list-style-type:none] list-outside max-md:-mx-1.5 md:max-lg:-mx-3" data-cid="n232">
        {mediaCardData.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
      </ul>
    </div>
  );
}
