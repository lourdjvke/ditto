import ListRow4 from "../components/list-row4";
import ListRow5 from "../components/list-row5";
import MobileFooterAccordion from "../components/mobile-footer-accordion";
import { ListRow4_cids, ListRow5_cids } from "../_cids";
import { ListRow4_styles, ListRow5_styles } from "../_styles";
import { listRow4Data as listRow4DataContent, listRow5Data as listRow5DataContent } from "../content";
/** Site footer. */
export default function Footer({ listRow4Data = listRow4DataContent, listRow5Data = listRow5DataContent } = {}) {
  return (
    <footer className="h-auto block relative p-6 bg-primary max-md:p-4" data-cid="n1032" id="main-footer">
      <div className="h-full flex justify-center items-center gap-[6.0625rem] max-lg:block max-lg:max-w-378 max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:gap-[initial] 2xl:justify-between 2xl:gap-24" data-cid="n1033">
        <div className="w-35 h-[54.7125rem] block absolute top-[1.3125rem] left-6 min-w-0 pointer-events-none max-lg:hidden 2xl:static" data-cid="n1034">
          <span className="inline-block relative max-w-full overflow-hidden pointer-events-none" data-cid="n1035">
            <span className="block max-w-full pointer-events-none" data-cid="n1036">
              <img className="w-35 h-218 block max-w-full overflow-clip pointer-events-none" data-cid="n1037" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </span>
            <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip pointer-events-none" data-cid="n1038" data-component="image" alt="footer-left-text" src="https://images.ctfassets.net/8cd2csgvqd3m/ogHuOZpvRur5rZBkoEwvC/0c202e855fcf5d598af41f8e8cef57d3/footer-left-side-text.svg?q=90&w=256&fit=fill&fm=webp" srcSet="https://images.ctfassets.net/8cd2csgvqd3m/ogHuOZpvRur5rZBkoEwvC/0c202e855fcf5d598af41f8e8cef57d3/footer-left-side-text.svg?q=90&w=256&fit=fill&fm=webp 1x" />
          </span>
        </div>
        <div className="h-[54.2125rem] flex max-w-192 flex-col justify-between items-start self-stretch grow shrink-0 basis-0 gap-14 max-md:h-[50.15rem] max-lg:max-w-378 max-md:gap-9 md:max-lg:h-[61.675rem] 2xl:h-[54.7125rem] 2xl:max-w-378" data-cid="n1039">
          <div className="w-full h-[49.4625rem] flex flex-col gap-y-14 max-md:h-[42.4rem] max-md:gap-y-12 2xl:h-[49.9625rem] 2xl:justify-between" data-cid="n1040">
            <div className="flex flex-wrap max-lg:hidden" data-cid="n1041">
              <div className="w-144 block max-w-[75%] px-4 shrink-0 basis-3/4 max-lg:hidden 2xl:w-350.5 2xl:basis-full 2xl:max-w-none" data-cid="n1042">
                <div className="h-full block max-lg:hidden" data-cid="n1043">
                  <div className="h-full flex -mx-4 flex-wrap items-start gap-y-14 max-lg:hidden" data-cid="n1044">
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n1045">
                      <div className="block max-lg:hidden" data-cid="n1046">
                        <button className="w-full h-10.5 inline-block text-left cursor-default max-lg:hidden" data-cid="n1047" data-component="button" aria-controls="customercare_0_wrapper" aria-expanded="true" aria-hidden="true" id="customercare_0_accordionBtn" type="button">
                          <p className="h-10.5 flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n1048">
                            Customer Care
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n1049">
                          <div className="block max-lg:hidden" data-cid="n1050" aria-labelledby="customercare_0_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n1051" id="customercare_0_wrapper">
                              {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} cids={ListRow4_cids[i]} styles={ListRow4_styles[i]} />)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n1064">
                      <div className="block max-lg:hidden" data-cid="n1065">
                        <button className="w-full inline-block text-left cursor-default max-lg:hidden" data-cid="n1066" data-component="button" aria-controls="ourpolicies_1_wrapper" aria-expanded="true" aria-hidden="true" id="ourpolicies_1_accordionBtn" type="button">
                          <p className="flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n1067">
                            Our Policies
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n1068">
                          <div className="block max-lg:hidden" data-cid="n1069" aria-labelledby="ourpolicies_1_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n1070" id="ourpolicies_1_wrapper">
                              <li className="list-item max-lg:hidden" data-cid="n1071">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[69.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[69.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[69.3125px_0.375px] max-lg:after:hidden" data-cid="n1072" data-component="link" href="/en/int/story/accessibility-statement" rel="noopener" target="_blank">
                                  Accessibility
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n1073">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1074">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[62.1px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[62.1px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[62.1094px_0.375px] max-lg:after:hidden" data-cid="n1075" data-component="link" href="/en/int/story/counterfeit" rel="noopener" target="_blank">
                                  Counterfeit
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n1076">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1077">
                                <button className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] text-left cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[8.325rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[8.325rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[133.203px_0.375px] max-lg:after:hidden" data-cid="n1078" data-component="button" aria-haspopup="dialog" type="button">
                                  Change Cookie Settings
                                </button>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1079">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[74.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[74.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[74.3125px_0.375px] max-lg:after:hidden" data-cid="n1080" data-component="link" href="/en/int/legal/cookie-policy" rel="noopener" target="_blank">
                                  Cookie Policy
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n1081">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1082">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[4.775rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[4.775rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[76.4062px_0.375px] max-lg:after:hidden" data-cid="n1083" data-component="link" href="/en/int/legal/privacy-policy" rel="noopener" target="_blank">
                                  Privacy Policy
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n1084">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1085">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[6.175rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[6.175rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[98.8125px_0.375px] max-lg:after:hidden" data-cid="n1086" data-component="link" href="/en/int/legal" target="_parent">
                                  Policies and terms
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n1087">
                      <div className="block max-lg:hidden" data-cid="n1088">
                        <button className="w-full inline-block text-left cursor-default max-lg:hidden" data-cid="n1089" data-component="button" aria-controls="ourcompany_2_wrapper" aria-expanded="true" aria-hidden="true" id="ourcompany_2_accordionBtn" type="button">
                          <p className="flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n1090">
                            Our Company
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n1091">
                          <div className="block max-lg:hidden" data-cid="n1092" aria-labelledby="ourcompany_2_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n1093" id="ourcompany_2_wrapper">
                              {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} cids={ListRow5_cids[i]} styles={ListRow5_styles[i]} />)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n1110">
                      <div className="block max-lg:hidden" data-cid="n1111">
                        <button className="w-full inline-block text-left cursor-default max-lg:hidden" data-cid="n1112" data-component="button" aria-controls="socialshare_3_wrapper" aria-expanded="true" aria-hidden="true" id="socialshare_3_accordionBtn" type="button">
                          <p className="flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n1113">
                            Social Links
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n1114">
                          <div className="block max-lg:hidden" data-cid="n1115" aria-labelledby="socialshare_3_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n1116" id="socialshare_3_wrapper">
                              <li className="list-item max-lg:hidden" data-cid="n1117">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[3.3625rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[3.3625rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[53.8125px_0.375px] max-lg:after:hidden" data-cid="n1118" data-component="link" aria-label="Facebook - Footer Link (opens in a new tab)" href="https://www.facebook.com/bangolufsen/" rel="noopener" target="_blank">
                                  Facebook
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1119">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-14 before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-14 after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[55.9062px_0.375px] max-lg:after:hidden" data-cid="n1120" data-component="link" href="https://www.instagram.com/bangolufsen/?hl=en" rel="noopener" target="_blank">
                                  Instagram
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n1121">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1122">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[2.925rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[2.925rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[46.8125px_0.375px] max-lg:after:hidden" data-cid="n1123" data-component="link" aria-label="Aria Label - LinkedIn (opens in a new tab)" href="https://www.linkedin.com/company/bangolufsen/" rel="noopener" target="_blank">
                                  LinkedIn
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1124">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-10 before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-10 after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[40px_0.375px] max-lg:after:hidden" data-cid="n1125" data-component="link" aria-label="Twitter - Footer Link (opens in a new tab)" href="https://twitter.com/BangOlufsen" rel="noopener" target="_blank">
                                  X
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1126">
                                <a className="h-7 inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[43.7px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[43.7px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[43.7031px_0.375px] max-lg:after:hidden" data-cid="n1127" data-component="link" href="https://www.youtube.com/user/bangolufsen" rel="noopener" target="_blank">
                                  Youtube
                                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] max-lg:hidden" data-cid="n1128">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1129">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-10 before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-10 after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[40px_0.375px] max-lg:after:hidden" data-cid="n1130" data-component="link" aria-label="Aria label - TikTok (opens in a new tab)" href="https://www.tiktok.com/@bangolufsen" rel="noopener" target="_blank">
                                  TikTok
                                </a>
                              </li>
                              <li className="list-item mt-2 max-lg:hidden" data-cid="n1131">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[3.0625rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[3.0625rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[48.9062px_0.375px] max-lg:after:hidden" data-cid="n1132" data-component="link" href="https://www.pinterest.dk/bangolufsen/">
                                  Pinterest
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 h-80.5 min-h-80.5 block max-w-[33.3333%] pr-6 shrink-0 basis-1/3 max-lg:hidden 2xl:w-[17.525rem] 2xl:max-w-[20%] 2xl:basis-1/5" data-cid="n1133">
                      <div className="block max-lg:hidden" data-cid="n1134">
                        <button className="w-full h-10.5 inline-block text-left cursor-default max-lg:hidden" data-cid="n1135" data-component="button" aria-controls="downloadapp_4_wrapper" aria-expanded="true" aria-hidden="true" id="downloadapp_4_accordionBtn" type="button">
                          <p className="h-10.5 flex relative pb-4 items-center gap-2 text-background leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:hidden" data-cid="n1136">
                            Download Our App
                          </p>
                        </button>
                        <div className="block max-lg:hidden" data-cid="n1137">
                          <div className="block max-lg:hidden" data-cid="n1138" aria-labelledby="downloadapp_4_accordionBtn" role="region">
                            <ul className="block [list-style-type:none] list-outside max-lg:hidden" data-cid="n1139" id="downloadapp_4_wrapper">
                              <li className="list-item max-lg:hidden" data-cid="n1140">
                                <a className="inline-block relative min-w-10 py-1 text-color-001 text-xs leading-5 tracking-[0.1px] cursor-pointer max-lg:hidden before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[161.7px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[161.7px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[161.703px_0.375px] max-lg:after:hidden" data-cid="n1141" data-component="link" href="/en/int/story/apps" target="_parent">
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
            <div className="h-[2.2125rem] flex flex-wrap" data-cid="n1142">
              <div className="h-[2.2125rem] block" data-cid="n1143">
                <div className="h-[2.2125rem] block" data-cid="n1144">
                  <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n1145" aria-hidden="true" id="selectCountryLang">
                    {"Select country and language : International "}
                  </span>
                  <button className="h-8 inline-block text-center cursor-pointer" data-cid="n1146" data-component="button" aria-haspopup="dialog" aria-label="International undefined : Select country and language" type="button">
                    <div className="h-8 flex relative" data-cid="n1147" aria-hidden="true">
                      <div className="w-[2.6875rem] h-8 block" data-cid="n1148">
                        <span className="inline" data-cid="n1149">
                          <span className="inline-block relative max-w-full overflow-hidden" data-cid="n1150">
                            <span className="block max-w-full" data-cid="n1151">
                              <img className="w-10.5 h-8 block max-w-full overflow-clip" data-cid="n1152" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                            </span>
                            <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip" data-cid="n1153" data-component="image" alt="International flag" src="/assets/cloned/svg/5e1c75d49e6e.svg" srcSet="/assets/cloned/svg/a7c2e0d806a8.svg 1x, /assets/cloned/svg/5e1c75d49e6e.svg 2x" />
                          </span>
                        </span>
                      </div>
                      <div className="h-8 block ml-2 text-color-001" data-cid="n1154" id="lang-locale-display">
                        <div className="block text-sm font-bold leading-6 tracking-[0.1px] text-left max-md:text-xs max-md:leading-5" data-cid="n1155">
                          {"International "}
                        </div>
                        <div className="block text-xs leading-5 tracking-[0.1px] text-left" data-cid="n1156" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden max-lg:flex max-lg:flex-wrap" data-cid="n1157">
              <div className="hidden max-lg:w-full max-lg:max-w-150 max-lg:block max-md:px-1.5 max-lg:shrink-0 max-md:basis-full md:max-lg:px-3 md:max-lg:basis-5/6" data-cid="n1158">
                <div className="hidden max-lg:h-full max-lg:block" data-cid="n1159">
                  <div className="hidden max-lg:h-full max-lg:flex max-md:-mx-1.5 max-lg:flex-wrap max-lg:items-start max-md:gap-y-12 md:max-lg:-mx-3 md:max-lg:gap-y-14" data-cid="n1160">
                    <MobileFooterAccordion />
                    <div className="hidden max-md:w-[21.4375rem] max-md:h-[18.6875rem] max-md:border-t max-md:border-solid max-md:border-t-color-001 max-lg:block max-md:max-w-full max-md:pt-12 max-lg:shrink-0 max-md:basis-full md:max-lg:w-50 md:max-lg:h-80.5 md:max-lg:min-h-80.5 md:max-lg:max-w-[33.3333%] md:max-lg:pr-6 md:max-lg:basis-1/3" data-cid="n1181">
                      <div className="hidden max-lg:block" data-cid="n1182">
                        <button className="hidden max-md:w-full max-md:inline-block max-md:text-left max-md:cursor-default" data-cid="n1183" aria-controls="ourpolicies_4_wrapper" aria-expanded="true" aria-hidden="true" id="ourpolicies_4_accordionBtn" type="button">
                          <p className="hidden max-md:flex max-md:relative max-md:pb-4 max-md:items-center max-md:gap-2 max-md:text-background max-md:leading-6.5 max-md:tracking-[0.2px] max-md:whitespace-pre-wrap" data-cid="n1184">
                            Our Policies
                          </p>
                        </button>
                        <div className="hidden max-lg:block" data-cid="n1185">
                          <div className="hidden max-lg:block md:max-lg:h-7" data-cid="n1186" aria-labelledby="ourpolicies_4_accordionBtn" role="region">
                            <ul className="hidden max-md:block max-md:[list-style-type:none] max-md:list-outside" data-cid="n1187" id="ourpolicies_4_wrapper">
                              <li className="hidden max-md:list-item" data-cid="n1188">
                                <a className="hidden max-md:w-[69.3px] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[69.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[69.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[69.3125px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n1189" href="/en/int/story/accessibility-statement" rel="noopener" target="_blank">
                                  Accessibility
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n1190">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n1191">
                                <a className="hidden max-md:w-[62.1px] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[62.1px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[62.1px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[62.1094px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n1192" href="/en/int/story/counterfeit" rel="noopener" target="_blank">
                                  Counterfeit
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n1193">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n1194">
                                <button className="hidden max-md:w-[8.325rem] max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:text-left max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[8.325rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[8.325rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[133.203px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n1195" aria-haspopup="dialog" type="button">
                                  Change Cookie Settings
                                </button>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n1196">
                                <a className="hidden max-md:w-[74.3px] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[74.3px] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[74.3px] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[74.3125px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n1197" href="/en/int/legal/cookie-policy" rel="noopener" target="_blank">
                                  Cookie Policy
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n1198">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n1199">
                                <a className="hidden max-md:w-[4.775rem] max-md:h-7 max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[4.775rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[4.775rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[76.4062px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n1200" href="/en/int/legal/privacy-policy" rel="noopener" target="_blank">
                                  Privacy Policy
                                  <span className="hidden max-md:w-px max-md:h-px max-md:block max-md:absolute max-md:overflow-hidden max-md:whitespace-nowrap max-md:text-nowrap max-md:[clip-path:inset(50%)]" data-cid="n1201">
                                    {" opens in a new tab "}
                                  </span>
                                </a>
                              </li>
                              <li className="hidden max-md:list-item max-md:mt-2" data-cid="n1202">
                                <a className="hidden max-md:w-[6.175rem] max-md:inline-block max-md:relative max-md:min-w-10 max-md:py-1 max-md:text-color-001 max-md:text-xs max-md:leading-5 max-md:tracking-[0.1px] max-md:cursor-pointer before:content-[''] before:block before:absolute before:top-[27.3px] before:bottom-0 before:inset-x-0 before:w-[6.175rem] before:h-[0.05rem] before:bg-color-001 before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.375px] md:max-lg:before:hidden 2xl:before:hidden after:content-[''] after:block after:absolute after:top-[27.3px] after:bottom-0 after:inset-x-0 after:w-[6.175rem] after:h-[0.05rem] after:bg-color-001 after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[98.8125px_0.375px] md:max-lg:after:hidden 2xl:after:hidden" data-cid="n1203" href="/en/int/legal" target="_parent">
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
          <div className="hidden min-w-0 max-lg:block" data-cid="n1204">
            <span className="inline-block relative max-w-full overflow-hidden" data-cid="n1205">
              <span className="block max-w-full" data-cid="n1206">
                <img className="block max-w-full overflow-clip max-md:w-[21.4375rem] max-md:h-[1.8125rem] md:max-lg:w-180 md:max-lg:h-15" data-cid="n1207" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              </span>
              <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full my-auto overflow-clip max-lg:my-0" data-cid="n1208" alt="Brand Word Mark Centre" aria-hidden="true" src="/assets/cloned/svg/616e0fd96861.svg" srcSet="/assets/cloned/svg/3bad5d6e4ecc.svg 1x, /assets/cloned/svg/616e0fd96861.svg 2x" />
            </span>
          </div>
          <div className="block text-color-001 text-xs leading-5 tracking-[0.1px]" data-cid="n1209">
            {"© Bang & Olufsen 2026"}
          </div>
        </div>
        <div className="w-34.5 h-[54.4rem] block absolute top-[1.5375rem] left-281.5 min-w-0 pointer-events-none max-lg:hidden 2xl:right-4 2xl:bottom-[1.6875rem] 2xl:static 2xl:top-auto 2xl:left-auto" data-cid="n1210">
          <span className="inline-block relative max-w-full overflow-hidden pointer-events-none" data-cid="n1211">
            <span className="block max-w-full pointer-events-none" data-cid="n1212">
              <img className="w-34.5 h-[54.1875rem] block max-w-full overflow-clip pointer-events-none" data-cid="n1213" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </span>
            <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip pointer-events-none" data-cid="n1214" data-component="image" alt="Brand Word Mark Right" aria-hidden="true" src="https://images.ctfassets.net/8cd2csgvqd3m/67NjOWCsdBAqrnArJ1TigX/f56927bc52be07ffeab6d938ddcbc455/footer-right-side-text.svg?q=90&w=256&fit=fill&fm=webp" srcSet="https://images.ctfassets.net/8cd2csgvqd3m/67NjOWCsdBAqrnArJ1TigX/f56927bc52be07ffeab6d938ddcbc455/footer-right-side-text.svg?q=90&w=256&fit=fill&fm=webp 1x" />
          </span>
        </div>
      </div>
    </footer>
  );
}
