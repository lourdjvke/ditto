import ListRow2 from "../components/list-row2";
import ListRow3 from "../components/list-row3";
import Tile, { type TileData } from "../components/tile";
import { ListRow2_cids, ListRow3_cids, Tile_cids } from "../_cids";
import { ListRow2_styles, ListRow3_styles, Tile_styles } from "../_styles";
import { listRow2Data as listRow2DataContent, listRow3Data as listRow3DataContent } from "../content";
const Tile_data: TileData[] = [
    { ariacontrols: "customercare_0_wrapper", id: "customercare_0_accordionBtn", description: "Customer Care" },
    { ariacontrols: "ourcompany_1_wrapper", id: "ourcompany_1_accordionBtn", description: "Our Company" },
    { ariacontrols: "socialshare_2_wrapper", id: "socialshare_2_accordionBtn", description: "Social Links" },
    { ariacontrols: "downloadapp_3_wrapper", id: "downloadapp_3_accordionBtn", description: "Download Our App" }
];
/** Site footer. */
export default function Footer({ listRow2Data = listRow2DataContent, listRow3Data = listRow3DataContent, tileData = Tile_data } = {}) {
  return (
    <footer className="h-230.5 min-h-230.5 block relative p-6 bg-primary max-md:h-[52.15rem] max-md:p-4 max-lg:min-h-0 md:max-lg:h-[64.675rem] 2xl:h-[57.7125rem]" data-cid="n355" id="main-footer">
      <div className="h-full flex justify-center items-center gap-[6.0625rem] max-lg:block max-lg:max-w-378 max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:gap-[initial] 2xl:justify-between 2xl:gap-24" data-cid="n356">
        <div className="w-35 h-[54.7125rem] block absolute top-[1.3125rem] left-6 min-w-0 pointer-events-none max-lg:hidden 2xl:static" data-cid="n357">
          <span className="inline-block relative max-w-full overflow-hidden pointer-events-none" data-cid="n358">
            <span className="block max-w-full pointer-events-none" data-cid="n359">
              <img className="w-35 h-218 block max-w-full overflow-clip pointer-events-none" data-cid="n360" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </span>
            <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip pointer-events-none" data-cid="n361" data-component="image" alt="footer-left-text" src="/assets/cloned/svg/b30878aca917.svg" srcSet="/assets/cloned/svg/280f2d2e2a77.svg 1x, /assets/cloned/svg/b30878aca917.svg 2x" />
          </span>
        </div>
        <div className="h-[54.2125rem] flex max-w-192 flex-col justify-between items-start self-stretch grow shrink-0 basis-0 gap-14 max-md:h-[50.15rem] max-lg:max-w-378 max-md:gap-9 md:max-lg:h-[61.675rem] 2xl:h-[54.7125rem] 2xl:max-w-378" data-cid="n362">
          <div className="w-full h-[49.4625rem] flex flex-col gap-y-14 max-md:h-[42.4rem] max-md:gap-y-12 2xl:h-[49.9625rem] 2xl:justify-between" data-cid="n363">
            <div className="flex flex-wrap max-lg:hidden" data-cid="n364">
              <div className="w-144 block max-w-[75%] px-4 shrink-0 basis-3/4 max-lg:hidden 2xl:w-350.5 2xl:basis-full 2xl:max-w-none" data-cid="n365">
                <div className="h-full block max-lg:hidden" data-cid="n366">
                  <div className="h-full flex -mx-4 flex-wrap items-start gap-y-14 max-lg:hidden" data-cid="n367">
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n368">
                      <div className="block max-lg:hidden" data-cid="n369">
                        <button className="w-full h-10.5 inline-block text-left cursor-default max-lg:hidden" data-cid="n370" data-component="button" aria-controls="customercare_0_wrapper" aria-expanded="true" aria-hidden="true" id="customercare_0_accordionBtn" type="button">
                          <p className="h-10.5 flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n371">
                            Customer Care
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n372">
                          <div className="block max-lg:hidden" data-cid="n373" aria-labelledby="customercare_0_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n374" id="customercare_0_wrapper">
                              {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} cids={ListRow2_cids[i]} styles={ListRow2_styles[i]} />)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n387">
                      <div className="block max-lg:hidden" data-cid="n388">
                        <button className="w-full inline-block text-left cursor-default max-lg:hidden" data-cid="n389" data-component="button" aria-controls="ourpolicies_1_wrapper" aria-expanded="true" aria-hidden="true" id="ourpolicies_1_accordionBtn" type="button">
                          <p className="flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n390">
                            Our Policies
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n391">
                          <div className="block max-lg:hidden" data-cid="n392" aria-labelledby="ourpolicies_1_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n393" id="ourpolicies_1_wrapper">
                              <li className="list-item max-lg:hidden" data-cid="n394">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[69.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[69.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[69.3125px_0.375px] max-lg:after:hidden" data-cid="n395" data-component="link" href="/en/int/story/accessibility-statement" rel="noopener" target="_blank">
                                  Accessibility
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n396">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n397">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[62.1px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[62.1px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[62.1094px_0.375px] max-lg:after:hidden" data-cid="n398" data-component="link" href="/en/int/story/counterfeit" rel="noopener" target="_blank">
                                  Counterfeit
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n399">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n400">
                                <button className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] text-left cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[8.325rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[8.325rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[133.203px_0.375px] max-lg:after:hidden" data-cid="n401" data-component="button" aria-haspopup="dialog" type="button">
                                  Change Cookie Settings
                                </button>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n402">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[74.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[74.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[74.3125px_0.375px] max-lg:after:hidden" data-cid="n403" data-component="link" href="/en/int/legal/cookie-policy" rel="noopener" target="_blank">
                                  Cookie Policy
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n404">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n405">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[4.775rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[4.775rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[76.4062px_0.375px] max-lg:after:hidden" data-cid="n406" data-component="link" href="/en/int/legal/privacy-policy" rel="noopener" target="_blank">
                                  Privacy Policy
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n407">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n408">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[6.175rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[6.175rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[98.8125px_0.375px] max-lg:after:hidden" data-cid="n409" data-component="link" href="/en/int/legal" target="_parent">
                                  Policies and terms
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n410">
                      <div className="block max-lg:hidden" data-cid="n411">
                        <button className="w-full inline-block text-left cursor-default max-lg:hidden" data-cid="n412" data-component="button" aria-controls="ourcompany_2_wrapper" aria-expanded="true" aria-hidden="true" id="ourcompany_2_accordionBtn" type="button">
                          <p className="flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n413">
                            Our Company
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n414">
                          <div className="block max-lg:hidden" data-cid="n415" aria-labelledby="ourcompany_2_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n416" id="ourcompany_2_wrapper">
                              {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} cids={ListRow3_cids[i]} styles={ListRow3_styles[i]} />)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n433">
                      <div className="block max-lg:hidden" data-cid="n434">
                        <button className="w-full inline-block text-left cursor-default max-lg:hidden" data-cid="n435" data-component="button" aria-controls="socialshare_3_wrapper" aria-expanded="true" aria-hidden="true" id="socialshare_3_accordionBtn" type="button">
                          <p className="flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n436">
                            Social Links
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n437">
                          <div className="block max-lg:hidden" data-cid="n438" aria-labelledby="socialshare_3_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n439" id="socialshare_3_wrapper">
                              <li className="list-item max-lg:hidden" data-cid="n440">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[3.3625rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[3.3625rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[53.8125px_0.375px] max-lg:after:hidden" data-cid="n441" data-component="link" aria-label="Facebook - Footer Link (opens in a new tab)" href="https://www.facebook.com/bangolufsen/" rel="noopener" target="_blank">
                                  Facebook
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n442">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-14 before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-14 after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[55.9062px_0.375px] max-lg:after:hidden" data-cid="n443" data-component="link" href="https://www.instagram.com/bangolufsen/?hl=en" rel="noopener" target="_blank">
                                  Instagram
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n444">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n445">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[2.925rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[2.925rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[46.8125px_0.375px] max-lg:after:hidden" data-cid="n446" data-component="link" aria-label="Aria Label - LinkedIn (opens in a new tab)" href="https://www.linkedin.com/company/bangolufsen/" rel="noopener" target="_blank">
                                  LinkedIn
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n447">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-10 before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-10 after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[40px_0.375px] max-lg:after:hidden" data-cid="n448" data-component="link" aria-label="Twitter - Footer Link (opens in a new tab)" href="https://twitter.com/BangOlufsen" rel="noopener" target="_blank">
                                  X
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n449">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[43.7px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[43.7px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[43.7031px_0.375px] max-lg:after:hidden" data-cid="n450" data-component="link" href="https://www.youtube.com/user/bangolufsen" rel="noopener" target="_blank">
                                  Youtube
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n451">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n452">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-10 before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-10 after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[40px_0.375px] max-lg:after:hidden" data-cid="n453" data-component="link" aria-label="Aria label - TikTok (opens in a new tab)" href="https://www.tiktok.com/@bangolufsen" rel="noopener" target="_blank">
                                  TikTok
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n454">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[3.0625rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[3.0625rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[48.9062px_0.375px] max-lg:after:hidden" data-cid="n455" data-component="link" href="https://www.pinterest.dk/bangolufsen/">
                                  Pinterest
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n456">
                      <div className="block max-lg:hidden" data-cid="n457">
                        <button className="w-full h-10.5 inline-block text-left cursor-default max-lg:hidden" data-cid="n458" data-component="button" aria-controls="downloadapp_4_wrapper" aria-expanded="true" aria-hidden="true" id="downloadapp_4_accordionBtn" type="button">
                          <p className="h-10.5 flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n459">
                            Download Our App
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n460">
                          <div className="block max-lg:hidden" data-cid="n461" aria-labelledby="downloadapp_4_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n462" id="downloadapp_4_wrapper">
                              <li className="list-item max-lg:hidden" data-cid="n463">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[161.7px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[161.7px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[161.703px_0.375px] max-lg:after:hidden" data-cid="n464" data-component="link" href="/en/int/story/apps" target="_parent">
                                  {"Discover Bang & Olufsen app"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[2.2125rem] flex flex-wrap" data-cid="n465">
              <div className="h-[2.2125rem] block" data-cid="n466">
                <div className="h-[2.2125rem] block" data-cid="n467">
                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n468" aria-hidden="true" id="selectCountryLang">
                    {"Select country and language : International "}
                  </span>
                  <button className="h-8 inline-block text-center cursor-pointer" data-cid="n469" data-component="button" aria-haspopup="dialog" aria-label="International undefined : Select country and language" type="button">
                    <div className="h-8 flex relative" data-cid="n470" aria-hidden="true">
                      <div className="w-[2.6875rem] h-8 block" data-cid="n471">
                        <span className="inline" data-cid="n472">
                          <span className="inline-block relative max-w-full overflow-hidden" data-cid="n473">
                            <span className="block max-w-full" data-cid="n474">
                              <img className="w-10.5 h-8 block max-w-full overflow-clip" data-cid="n475" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                            </span>
                            <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip" data-cid="n476" data-component="image" alt="International flag" src="/assets/cloned/svg/5e1c75d49e6e.svg" srcSet="/assets/cloned/svg/a7c2e0d806a8.svg 1x, /assets/cloned/svg/5e1c75d49e6e.svg 2x" />
                          </span>
                        </span>
                      </div>
                      <div className="h-8 block ml-2 text-color-001" data-cid="n477" id="lang-locale-display">
                        <div className="block text-sm font-bold leading-6 tracking-[0.1px] text-left max-md:text-xs max-md:leading-5" data-cid="n478">
                          {"International "}
                        </div>
                        <div className="block text-xs leading-5 tracking-[0.1px] text-left" data-cid="n479" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden max-lg:flex max-lg:flex-wrap" data-cid="n480">
              <div className="hidden max-lg:w-full max-lg:max-w-150 max-lg:block max-md:px-1.5 max-lg:shrink-0 max-md:basis-full md:max-lg:px-3 md:max-lg:basis-5/6" data-cid="n481">
                <div className="hidden max-lg:h-full max-lg:block" data-cid="n482">
                  <div className="hidden max-lg:h-full max-lg:flex max-md:-mx-1.5 max-lg:flex-wrap max-lg:items-start max-md:gap-y-12 md:max-lg:-mx-3 md:max-lg:gap-y-14 hover:bg-clr-2 hover:border-clr-3 hover:text-clr-4 hover:outline-clr-4 hover:[text-decoration-color:var(--clr-4)] focus:bg-border focus:border-clr-6 focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-cid="n483">
                    {tileData.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                    <div className="hidden max-md:w-[21.4375rem] max-md:h-[18.6875rem] max-md:border-t max-md:border-solid max-md:border-t-color-001 max-lg:block max-md:max-w-full max-md:pt-12 max-lg:shrink-0 max-md:basis-full md:max-lg:w-50 md:max-lg:h-80.5 md:max-lg:min-h-80.5 md:max-lg:max-w-[33.3333%] md:max-lg:pr-6 md:max-lg:basis-1/3" data-cid="n504">
                      <div className="hidden max-lg:block" data-cid="n505">
                        <button className="hidden max-md:w-full max-md:inline-block max-md:text-left max-md:cursor-default" data-cid="n506" aria-controls="ourpolicies_4_wrapper" aria-expanded="true" aria-hidden="true" id="ourpolicies_4_accordionBtn" type="button">
                          <p className="hidden max-md:flex max-md:relative max-md:pb-4 max-md:items-center max-md:gap-2 max-md:text-background max-md:leading-6.5 max-md:tracking-[0.2px] max-md:whitespace-pre-wrap" data-cid="n507">
                            Our Policies
                          </p>
                        </button>
                        <div className="hidden max-lg:block" data-cid="n508">
                          <div className="hidden max-lg:block md:max-lg:h-7" data-cid="n509" aria-labelledby="ourpolicies_4_accordionBtn" role="region">
                            <ul className="hidden max-md:block max-md:[list-style-type:none] max-md:list-outside" data-cid="n510" id="ourpolicies_4_wrapper">
                              <li className="hidden max-md:list-item" data-cid="n511">
                                <a className="hidden max-md:w-[69.3px] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[69.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[69.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[69.3125px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n512" href="/en/int/story/accessibility-statement" rel="noopener" target="_blank">
                                  Accessibility
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n513">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n514">
                                <a className="hidden max-md:w-[62.1px] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[62.1px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[62.1px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[62.1094px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n515" href="/en/int/story/counterfeit" rel="noopener" target="_blank">
                                  Counterfeit
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n516">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n517">
                                <button className="hidden max-md:w-[8.325rem] max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:text-left max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[8.325rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[8.325rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[133.203px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n518" aria-haspopup="dialog" type="button">
                                  Change Cookie Settings
                                </button>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n519">
                                <a className="hidden max-md:w-[74.3px] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[74.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[74.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[74.3125px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n520" href="/en/int/legal/cookie-policy" rel="noopener" target="_blank">
                                  Cookie Policy
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n521">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n522">
                                <a className="hidden max-md:w-[4.775rem] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[4.775rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[4.775rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[76.4062px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n523" href="/en/int/legal/privacy-policy" rel="noopener" target="_blank">
                                  Privacy Policy
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n524">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n525">
                                <a className="hidden max-md:w-[6.175rem] max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[6.175rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[6.175rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[98.8125px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n526" href="/en/int/legal" target="_parent">
                                  Policies and terms
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden min-w-0 max-lg:block" data-cid="n527">
            <span className="inline-block relative max-w-full overflow-hidden" data-cid="n528">
              <span className="block max-w-full" data-cid="n529">
                <img className="block max-w-full overflow-clip max-md:w-[21.4375rem] max-md:h-[1.8125rem] md:max-lg:w-180 md:max-lg:h-15" data-cid="n530" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              </span>
              <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full my-auto overflow-clip max-lg:my-0" data-cid="n531" alt="Brand Word Mark Centre" aria-hidden="true" src="/assets/cloned/svg/616e0fd96861.svg" srcSet="/assets/cloned/svg/3bad5d6e4ecc.svg 1x, /assets/cloned/svg/616e0fd96861.svg 2x" />
            </span>
          </div>
          <div className="block text-color-001 text-xs leading-5 tracking-[0.1px]" data-cid="n532">
            {"© Bang & Olufsen 2026"}
          </div>
        </div>
        <div className="w-34.5 h-[54.4rem] block absolute top-[1.5375rem] left-281.5 min-w-0 pointer-events-none max-lg:hidden 2xl:right-4 2xl:bottom-[1.6875rem] 2xl:static 2xl:top-auto 2xl:left-auto" data-cid="n533">
          <span className="inline-block relative max-w-full overflow-hidden pointer-events-none" data-cid="n534">
            <span className="block max-w-full pointer-events-none" data-cid="n535">
              <img className="w-34.5 h-[54.1875rem] block max-w-full overflow-clip pointer-events-none" data-cid="n536" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </span>
            <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip pointer-events-none" data-cid="n537" data-component="image" alt="Brand Word Mark Right" aria-hidden="true" src="/assets/cloned/svg/18f4ef4357d9.svg" srcSet="/assets/cloned/svg/c7301ed94c9d.svg 1x, /assets/cloned/svg/18f4ef4357d9.svg 2x" />
          </span>
        </div>
      </div>
    </footer>
  );
}
