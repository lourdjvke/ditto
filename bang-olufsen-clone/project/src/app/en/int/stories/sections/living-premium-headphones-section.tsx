import MediaTile, { type MediaTileData } from "../components/media-tile";
import { MediaTile_cids, MediaTile_cids2 } from "../_cids";
const MediaTile_data: MediaTileData[] = [
    { href: "/en/int/story/premium-headphones-speakers-for-travel", id: "carousel-item-0-beautiful-sound-for-every-journey", alt: "Suitcase with a pair of Beoplay H100 on the handle", imgSrc: "/assets/cloned/images/9fa56ed0446a.webp", description: "Premium Headphones and Speakers for Travel ", description2: "Beautiful sound for every journey" },
    { href: "/en/int/story/moved-by-beautiful-sound", id: "carousel-item-1-give-every-journey-the-soundtrack-it-deserves", alt: "A couple lying face-to-face on a picnic mat with a Bang & Olufsen Beosound A1 in Lavender placed between them, sharing a relaxed moment through music.", imgSrc: "/assets/cloned/images/1a2cb75ebab8.webp", description: "Travel collection ", description2: "Give every journey the soundtrack it deserves" },
    { href: "/en/int/story/vinyl-revival", id: "carousel-item-2-is-vinyl-making-a-comeback?", alt: "The Beogram 3000c system with a man sitting in front", imgSrc: "/assets/cloned/images/4687e11d677f.jpg", description: "The vinyl revival ", description2: "Is vinyl making a comeback?" },
    { href: "/en/int/story/luxury-home-theater-system", id: "carousel-item-3-building-a-luxury-home-theater-system", alt: "Image of Beovision theatre with a pair of Beolab 28's", imgSrc: "/assets/cloned/images/582841851331.webp", description: "The lights dim. The world slips away. You’re not in your living room anymore. ", description2: "Building a luxury Home Theater System" }
];
const MediaTile_data2: MediaTileData[] = [
    { href: "/en/int/story/atelier-editions-beolab-18-antolini-edition", id: "carousel-item-0-beolab-18-antolini®-limited-edition", alt: "Beolab 18 Antolini Limited edition Amazonite variant displayed in a showroom", imgSrc: "/assets/cloned/images/af892f2d225d.webp", description: "Atelier Edition | 04.2026 ", description2: "Beolab 18 Antolini® Limited Edition" },
    { href: "/en/int/story/atelier-editions-beolab-90-titan", id: "carousel-item-1-beolab-90-titan", alt: "Beolab 90 Titan edition", imgSrc: "/assets/cloned/images/c5102e3bf9f0.webp", description: "Atelier Edition | 11.2025 ", description2: "Beolab 90 Titan" },
    { href: "/en/int/story/atelier-editions-beosound-premiere-haute", id: "carousel-item-2-beosound-premiere-haute-edition", alt: "Close-up of a sleek silver and black Beosound Premiere Haute soundbar with ribbed texture and control buttons mounted on a wall.", imgSrc: "/assets/cloned/images/ceaccea1c13d.webp", description: "Atelier Edition | 11.2025 ", description2: "Beosound Premiere Haute Edition" },
    { href: "/en/int/story/atelier-editions-art-deco", id: "carousel-item-3-art-deco", alt: "Art Deco Atelier Limited Edition with Beovision Theatre and Beolab 28", imgSrc: "/assets/cloned/images/193cafa7ba96.jpg", description: "Atelier Edition | 04.2025 ", description2: "Art Deco" }
];
/** Living Premium Headphones section. */
export default function LivingPremiumHeadphonesSection({ mediaTileData = MediaTile_data, mediaTileData2 = MediaTile_data2 } = {}) {
  return (
    <div className="block" data-cid="n148">
      <div className="block max-w-378 px-9 mx-auto max-lg:px-4" data-cid="n149">
        <div className="block mb-24 max-lg:mb-14" data-cid="n150" id="Living">
          <a className="w-[49.5%] flex text-muted-foreground cursor-pointer max-md:w-[26%] md:max-lg:w-[12%] 2xl:w-[41.5%] hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)] focus:border-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-cid="n151" data-component="link" href="/en/int/stories/living">
            <p className="w-full flex relative py-8 text-border font-medium leading-6 tracking-[2px] uppercase whitespace-pre-wrap max-lg:text-sm max-lg:leading-[1.3125rem]" data-cid="n152">
              Living
              <span className="h-6 block max-lg:h-[1.3125rem] max-lg:flex max-lg:ml-4 after:content-['_'] after:block after:relative after:top-[10.5px] after:bottom-[-10.5px] after:inset-x-0 after:w-2.5 after:h-2.5 after:text-border after:text-sm after:font-medium after:leading-[1.3125rem] after:tracking-[2px] after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,-6,-6)] after:origin-[6px_6px] 2xl:after:hidden" data-cid="n153" />
            </p>
          </a>
          <div className="block" data-cid="n154">
            <div className="block relative text-center" data-cid="n155">
              {/* Mobile carousel */}
              <div className="flex overflow-x-auto md:hidden h-83.5" dir="ltr">
                {mediaTileData.map((d) => (
                  <a key={d.id} className="h-83.5 block text-muted-foreground cursor-pointer flex-shrink-0" href={d.href}>
                    <div className="w-52.5 h-full block mr-[0.9375rem]">
                      <img className="w-52.5 h-52.5 block relative max-w-full overflow-clip" alt={d.alt} src={d.imgSrc} />
                      <div className="block pr-5"><p className="block mt-6 mb-1 text-border text-[0.625rem] leading-4.5 tracking-[2px] text-left uppercase">{d.description}</p><p className="block text-border leading-6.5 tracking-[0.2px] text-left">{d.description2}</p></div>
                    </div>
                  </a>
                ))}
              </div>
              {/* Desktop carousel */}
              <div className="hidden md:flex overflow-x-auto" dir="ltr">
                {mediaTileData.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block max-w-378 px-9 mx-auto max-lg:px-4" data-cid="n211">
        <div className="block mb-24 max-lg:mb-14" data-cid="n212" id="Atelier">
          <a className="w-[49.5%] flex text-muted-foreground cursor-pointer max-md:w-[27%] md:max-lg:w-[12.5%] 2xl:w-[41.5%] hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-cid="n213" data-component="link" href="/en/int/stories/Atelier">
            <p className="w-full flex relative py-8 text-border font-medium leading-6 tracking-[2px] uppercase whitespace-pre-wrap max-lg:text-sm max-lg:leading-[1.3125rem]" data-cid="n214">
              Atelier
              <span className="h-6 block max-lg:h-[1.3125rem] max-lg:flex max-lg:ml-4 after:content-['_'] after:block after:relative after:top-[10.5px] after:bottom-[-10.5px] after:inset-x-0 after:w-2.5 after:h-2.5 after:text-border after:text-sm after:font-medium after:leading-[1.3125rem] after:tracking-[2px] after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,-6,-6)] after:origin-[6px_6px] 2xl:after:hidden" data-cid="n215" />
            </p>
          </a>
          <div className="block" data-cid="n216">
            <div className="block relative text-center" data-cid="n217">
              {/* Mobile carousel */}
              <div className="flex overflow-x-auto md:hidden h-83.5" dir="ltr">
                <a className="h-83.5 block text-muted-foreground cursor-pointer flex-shrink-0" href="/en/int/story/atelier-editions-beolab-18-antolini-edition">
                  <div className="w-52.5 h-full block mr-[0.9375rem]">
                    <div className="block relative bg-surface"><img className="w-52.5 h-52.5 block relative max-w-full overflow-clip" alt="Beolab 18 Antolini Limited edition Amazonite variant displayed in a showroom" src="/assets/cloned/images/af892f2d225d.webp" /></div>
                    <div className="block pr-5"><p className="block mt-6 mb-1 text-border text-[0.625rem] leading-4.5 tracking-[2px] text-left uppercase">{"Atelier Edition | 04.2026 "}</p><p className="block text-border leading-6.5 tracking-[0.2px] text-left">Beolab 18 Antolini® Limited Edition</p></div>
                  </div>
                </a>
                <a className="h-83.5 block text-muted-foreground cursor-pointer flex-shrink-0" href="/en/int/story/atelier-editions-beolab-90-titan">
                  <div className="w-52.5 h-full block mr-[0.9375rem]">
                    <div className="block relative bg-surface"><img className="w-52.5 h-52.5 block relative max-w-full overflow-clip" alt="Beolab 90 Titan edition" src="/assets/cloned/images/c5102e3bf9f0.webp" /></div>
                    <div className="block pr-5"><p className="block mt-6 mb-1 text-border text-[0.625rem] leading-4.5 tracking-[2px] text-left uppercase">{"Atelier Edition | 11.2025 "}</p><p className="block text-border leading-6.5 tracking-[0.2px] text-left">Beolab 90 Titan</p></div>
                  </div>
                </a>
                <a className="h-83.5 block text-muted-foreground cursor-pointer flex-shrink-0" href="/en/int/story/atelier-editions-beosound-premiere-haute">
                  <div className="w-52.5 h-full block mr-[0.9375rem]">
                    <div className="block relative bg-surface"><img className="w-52.5 h-52.5 block relative max-w-full overflow-clip" alt="Close-up of a sleek silver and black Beosound Premiere Haute soundbar" src="/assets/cloned/images/ceaccea1c13d.webp" /></div>
                    <div className="block pr-5"><p className="block mt-6 mb-1 text-border text-[0.625rem] leading-4.5 tracking-[2px] text-left uppercase">{"Atelier Edition | 11.2025 "}</p><p className="block text-border leading-6.5 tracking-[0.2px] text-left">Beosound Premiere Haute Edition</p></div>
                  </div>
                </a>
                <a className="h-83.5 block text-muted-foreground cursor-pointer flex-shrink-0" href="/en/int/story/atelier-editions-art-deco">
                  <div className="w-52.5 h-full block mr-[0.9375rem]">
                    <div className="block relative bg-surface"><img className="w-52.5 h-52.5 block relative max-w-full overflow-clip" alt="Art Deco Atelier Limited Edition with Beovision Theatre and Beolab 28" src="/assets/cloned/images/193cafa7ba96.jpg" /></div>
                    <div className="block pr-5"><p className="block mt-6 mb-1 text-border text-[0.625rem] leading-4.5 tracking-[2px] text-left uppercase">{"Atelier Edition | 04.2025 "}</p><p className="block text-border leading-6.5 tracking-[0.2px] text-left">Art Deco</p></div>
                  </div>
                </a>
              </div>
              {/* Desktop carousel */}
              <div className="hidden md:flex overflow-x-auto" dir="ltr">
                {mediaTileData2.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids2[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
