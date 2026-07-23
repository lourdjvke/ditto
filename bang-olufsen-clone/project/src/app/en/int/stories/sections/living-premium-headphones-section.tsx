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
              <div className="block relative max-md:h-90.5 max-md:flex max-md:overflow-auto max-md:static max-md:inset-auto" data-cid="n156" dir="ltr">
                <div className="h-full block relative overflow-hidden max-md:hidden" data-cid="n157">
                  <div className="w-2581 h-full flex relative max-md:hidden md:max-lg:w-[393.3125rem] 2xl:w-3074" data-cid="n158">
                    {mediaTileData.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} />)}
                  </div>
                </div>
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
              <div className="block relative max-md:h-83.5 max-md:flex max-md:overflow-auto max-md:static max-md:inset-auto" data-cid="n218" dir="ltr">
                <a className="hidden max-md:h-83.5 max-md:block max-md:text-muted-foreground max-md:cursor-pointer" data-cid="n219" href="/en/int/story/atelier-editions-beolab-18-antolini-edition">
                  <div className="hidden max-md:w-52.5 max-md:h-full max-md:block max-md:mr-[0.9375rem]" data-cid="n220" id="carousel-item-0-beolab-18-antolini®-limited-edition">
                    <div className="hidden max-md:block" data-cid="n221">
                      <div className="hidden max-md:block max-md:relative max-md:bg-surface" data-cid="n222">
                        <div className="hidden max-md:block" data-cid="n223">
                          <picture className="hidden max-md:inline" data-cid="n224">
                            <img className="hidden max-md:w-52.5 max-md:h-52.5 max-md:block max-md:relative max-md:max-w-full max-md:overflow-clip" data-cid="n226" alt="Beolab 18 Antolini Limited edition Amazonite variant displayed in a showroom" sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src="/assets/cloned/images/af892f2d225d.webp" />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div className="hidden max-md:block max-md:pr-5" data-cid="n227">
                      <p className="hidden max-md:block max-md:mt-6 max-md:mb-1 max-md:text-border max-md:text-[0.625rem] max-md:leading-4.5 max-md:tracking-[2px] max-md:text-left max-md:uppercase" data-cid="n228">
                        {"Atelier Edition | 04.2026 "}
                      </p>
                      <p className="hidden max-md:block max-md:text-border max-md:leading-6.5 max-md:tracking-[0.2px] max-md:text-left" data-cid="n229">
                        Beolab 18 Antolini® Limited Edition
                      </p>
                    </div>
                  </div>
                </a>
                <a className="hidden max-md:h-83.5 max-md:block max-md:text-muted-foreground max-md:cursor-pointer" data-cid="n230" href="/en/int/story/atelier-editions-beolab-90-titan">
                  <div className="hidden max-md:w-52.5 max-md:h-full max-md:block max-md:mr-[0.9375rem]" data-cid="n231" id="carousel-item-1-beolab-90-titan">
                    <div className="hidden max-md:block" data-cid="n232">
                      <div className="hidden max-md:block max-md:relative max-md:bg-surface" data-cid="n233">
                        <div className="hidden max-md:block" data-cid="n234">
                          <picture className="hidden max-md:inline" data-cid="n235">
                            <img className="hidden max-md:w-52.5 max-md:h-52.5 max-md:block max-md:relative max-md:max-w-full max-md:overflow-clip" data-cid="n237" alt="Beolab 90 Titan edition" sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src="/assets/cloned/images/c5102e3bf9f0.webp" />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div className="hidden max-md:block max-md:pr-5" data-cid="n238">
                      <p className="hidden max-md:block max-md:mt-6 max-md:mb-1 max-md:text-border max-md:text-[0.625rem] max-md:leading-4.5 max-md:tracking-[2px] max-md:text-left max-md:uppercase" data-cid="n239">
                        {"Atelier Edition | 11.2025 "}
                      </p>
                      <p className="hidden max-md:block max-md:text-border max-md:leading-6.5 max-md:tracking-[0.2px] max-md:text-left" data-cid="n240">
                        Beolab 90 Titan
                      </p>
                    </div>
                  </div>
                </a>
                <a className="hidden max-md:h-83.5 max-md:block max-md:text-muted-foreground max-md:cursor-pointer" data-cid="n241" href="/en/int/story/atelier-editions-beoplay-ex-lilac-purple">
                  <div className="hidden max-md:w-52.5 max-md:h-83.5 max-md:block max-md:mr-[0.9375rem]" data-cid="n242" id="carousel-item-14-beoplay-ex-lilac-purple">
                    <div className="hidden max-md:h-52.5 max-md:block max-md:relative" data-cid="n243">
                      <div className="hidden max-md:h-52.5 max-md:block max-md:aspect-square" data-cid="n244">
                        <div className="hidden max-md:w-52.5 max-md:h-52.5 max-md:block max-md:relative max-md:flex-1 max-md:overflow-hidden max-md:[animation-name:jTBhup] max-md:[animation-duration:1.2s] max-md:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] max-md:[animation-fill-mode:forwards] before:content-[''] before:block before:w-52.5 before:h-52.5 before:pt-[118.1px] md:max-lg:before:hidden 2xl:before:hidden" data-cid="n245">
                          <div className="hidden" data-cid="n246">
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n247" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n248" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n249" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="hidden max-md:h-83.5 max-md:block max-md:text-muted-foreground max-md:cursor-pointer" data-cid="n250" href="/en/int/story/atelier-editions-beoplay-ex-forest-green">
                  <div className="hidden max-md:w-52.5 max-md:h-83.5 max-md:block max-md:mr-[0.9375rem]" data-cid="n251" id="carousel-item-16-beoplay-ex-forest-green">
                    <div className="hidden max-md:h-52.5 max-md:block max-md:relative" data-cid="n252">
                      <div className="hidden max-md:h-52.5 max-md:block max-md:aspect-square" data-cid="n253">
                        <div className="hidden max-md:w-52.5 max-md:h-52.5 max-md:block max-md:relative max-md:flex-1 max-md:overflow-hidden max-md:[animation-name:jTBhup] max-md:[animation-duration:1.2s] max-md:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] max-md:[animation-fill-mode:forwards] before:content-[''] before:block before:w-52.5 before:h-52.5 before:pt-[118.1px] md:max-lg:before:hidden 2xl:before:hidden" data-cid="n254">
                          <div className="hidden" data-cid="n255">
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n256" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n257" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n258" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="hidden max-md:h-83.5 max-md:block max-md:text-muted-foreground max-md:cursor-pointer" data-cid="n259" href="/en/int/story/atelier-editions-beoplay-ex-peach-pink">
                  <div className="hidden max-md:w-52.5 max-md:h-83.5 max-md:block max-md:mr-[0.9375rem]" data-cid="n260" id="carousel-item-17-beoplay-ex-peach-pink">
                    <div className="hidden max-md:h-52.5 max-md:block max-md:relative" data-cid="n261">
                      <div className="hidden max-md:h-52.5 max-md:block max-md:aspect-square" data-cid="n262">
                        <div className="hidden max-md:w-52.5 max-md:h-52.5 max-md:block max-md:relative max-md:flex-1 max-md:overflow-hidden max-md:[animation-name:jTBhup] max-md:[animation-duration:1.2s] max-md:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] max-md:[animation-fill-mode:forwards] before:content-[''] before:block before:w-52.5 before:h-52.5 before:pt-[118.1px] md:max-lg:before:hidden 2xl:before:hidden" data-cid="n263">
                          <div className="hidden" data-cid="n264">
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n265" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n266" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n267" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="hidden max-md:h-83.5 max-md:block max-md:text-muted-foreground max-md:cursor-pointer" data-cid="n268" href="/en/int/story/atelier-editions-beoplay-ex-pineapple-yellow">
                  <div className="hidden max-md:w-52.5 max-md:h-83.5 max-md:block max-md:mr-[0.9375rem]" data-cid="n269" id="carousel-item-18-beoplay-ex-pineapple-yellow">
                    <div className="hidden max-md:h-52.5 max-md:block max-md:relative" data-cid="n270">
                      <div className="hidden max-md:h-52.5 max-md:block max-md:aspect-square" data-cid="n271">
                        <div className="hidden max-md:w-52.5 max-md:h-52.5 max-md:block max-md:relative max-md:flex-1 max-md:overflow-hidden max-md:[animation-name:jTBhup] max-md:[animation-duration:1.2s] max-md:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] max-md:[animation-fill-mode:forwards] before:content-[''] before:block before:w-52.5 before:h-52.5 before:pt-[118.1px] md:max-lg:before:hidden 2xl:before:hidden" data-cid="n272">
                          <div className="hidden" data-cid="n273">
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n274" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n275" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n276" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="hidden max-md:h-83.5 max-md:block max-md:text-muted-foreground max-md:cursor-pointer" data-cid="n277" href="/en/int/story/atelier-editions-beoplay-ex-lime-green">
                  <div className="hidden max-md:w-52.5 max-md:h-83.5 max-md:block max-md:mr-[0.9375rem]" data-cid="n278" id="carousel-item-19-beoplay-ex-lime-green">
                    <div className="hidden max-md:h-52.5 max-md:block max-md:relative" data-cid="n279">
                      <div className="hidden max-md:h-52.5 max-md:block max-md:aspect-square" data-cid="n280">
                        <div className="hidden max-md:w-52.5 max-md:h-52.5 max-md:block max-md:relative max-md:flex-1 max-md:overflow-hidden max-md:[animation-name:jTBhup] max-md:[animation-duration:1.2s] max-md:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] max-md:[animation-fill-mode:forwards] before:content-[''] before:block before:w-52.5 before:h-52.5 before:pt-[118.1px] md:max-lg:before:hidden 2xl:before:hidden" data-cid="n281">
                          <div className="hidden" data-cid="n282">
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n283" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n284" />
                            <div className="hidden max-md:w-px max-md:h-0 max-md:block max-md:fixed max-md:top-px max-md:left-px max-md:overflow-hidden" data-cid="n285" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="h-full block relative overflow-hidden max-md:hidden" data-cid="n286">
                  <div className="w-2047 h-full flex relative max-md:hidden md:max-lg:w-[311.9375rem] 2xl:w-2438" data-cid="n287">
                    {mediaTileData2.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids2[i]} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
