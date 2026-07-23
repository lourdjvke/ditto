import ListRow from "../components/list-row";
import { ListRow_cids } from "../_cids";
import { listRowData as listRowDataContent } from "../content";
/** House Of Bang section. */
export default function HouseOfBangSection({ listRowData = listRowDataContent } = {}) {
  return (
    <div className="block bg-primary md:max-lg:px-4 2xl:hidden" data-cid="n165">
      <div className="block max-w-378 py-15 px-9 max-lg:py-7.5 max-lg:px-4 max-md:bg-primary 2xl:hidden" data-cid="n166">
        <div className="flex -mx-4 flex-wrap bg-background max-md:-mx-1.5 md:max-lg:-mx-3 2xl:hidden" data-cid="n167">
          <div className="block relative max-w-[50%] pr-4 shrink-0 basis-1/2 max-lg:max-w-full max-lg:basis-full max-lg:pr-0 max-md:shrink-[initial] 2xl:hidden" data-cid="n168">
            <div className="h-full block 2xl:hidden" data-cid="n169">
              <div className="h-full block relative bg-clr-0 2xl:hidden" data-cid="n170">
                <div className="h-full block 2xl:hidden" data-cid="n171">
                  <picture className="inline 2xl:hidden" data-cid="n172">
                    <img className="w-full h-[58.0625rem] block relative max-w-full overflow-clip object-cover max-md:h-[32.4375rem] md:max-lg:h-[18.4375rem] md:max-lg:max-h-[18.4375rem] 2xl:hidden" data-cid="n174" data-component="image" alt={"A couple lying face-to-face on a picnic mat with a Bang & Olufsen Beosound A1 in Lavender placed between them, sharing a relaxed moment through music."} sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src="/assets/cloned/images/cbe97187bb34.webp" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[58.0375rem] flex max-w-[33.3333%] ml-[103.3px] py-10 px-4 flex-col justify-center shrink-0 basis-1/3 max-md:h-[63.1rem] max-md:max-w-full max-md:pt-5 max-md:pb-8 max-md:px-5 max-md:basis-full max-md:ml-0 max-md:shrink-[initial] md:max-lg:h-[52.2375rem] md:max-lg:max-w-[83.3333%] md:max-lg:ml-[60.7px] md:max-lg:px-3 md:max-lg:basis-5/6 2xl:hidden" data-cid="n175">
            <h2 className="block mb-2 text-border text-sm leading-5 tracking-[2px] uppercase 2xl:hidden" data-cid="n176" data-component="heading">
              {"The House of Bang & Olufsen"}
            </h2>
            <h3 className="block mb-6 text-border text-2xl leading-7.5 tracking-[1px] 2xl:hidden" data-cid="n177" data-component="heading">
              Join our global community for exclusive benefits and news about
            </h3>
            <div className="h-[12.9375rem] block mb-6 leading-[2.1875rem] tracking-[0.4px] 2xl:hidden" data-cid="n178">
              <span className="inline 2xl:hidden" data-cid="n179">
                <ul className="block my-4 pl-[1.5625rem] [list-style-type:disc] list-outside 2xl:hidden" data-cid="n180">
                  {listRowData.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} />)}
                </ul>
                <p className="block mt-[0.9375rem] text-muted-foreground whitespace-pre-wrap 2xl:hidden" data-cid="n191" />
              </span>
            </div>
            <form className="block 2xl:hidden" data-cid="n192" name="newsletter-form">
              <fieldset className="block min-w-[min-content] mx-0.5 2xl:hidden" data-cid="n193">
                <legend className="w-28.5 h-[1.15rem] table absolute max-w-full overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] 2xl:hidden" data-cid="n194">
                  newsletter-form
                </legend>
                <div className="block relative mt-2.5 mb-12 2xl:hidden" data-cid="n195">
                  <label className="block relative cursor-default 2xl:hidden" data-cid="n196" htmlFor="newsletter-email">
                    <span className="w-[6.6875rem] h-5 block absolute top-5 z-1 text-muted-foreground text-sm leading-5 tracking-[0.5px] transform-[matrix(1,0,0,1,0,-10.0078)] cursor-text 2xl:hidden" data-cid="n197" aria-hidden="false">
                      Email
                      <span className="inline opacity-70 2xl:hidden" data-cid="n198">
                        {" (required)"}
                      </span>
                    </span>
                    <span className="inline relative mt-2.5 leading-6.5 tracking-[0.2px] 2xl:hidden" data-cid="n199">
                      <input className="w-full h-9.5 min-h-9.5 border-b border-solid border-b-surface inline-block relative mt-2.5 py-px pr-0.5 overflow-clip text-border leading-[1.125rem] bg-background cursor-text 2xl:hidden focus:border-b-border" data-cid="n200" data-component="input" aria-describedby="input-newsletter-email" aria-invalid="false" aria-required="true" id="newsletter-email" name="email" type="email" value="" />
                    </span>
                  </label>
                </div>
                <div className="w-[181.1px] block relative float-left mr-[7.5px] mb-12 max-md:w-[19.4375rem] max-md:static max-md:inset-auto max-md:[float:initial] max-md:mr-0 md:max-lg:w-[17.3625rem] md:max-lg:mr-[0.725rem] 2xl:hidden" data-cid="n201">
                  <label className="block relative cursor-default 2xl:hidden" data-cid="n202" htmlFor="newsletter-firstName">
                    <span className="w-[139.5px] h-5 block absolute top-5 z-1 text-muted-foreground text-sm leading-5 tracking-[0.5px] transform-[matrix(1,0,0,1,0,-10.0078)] cursor-text 2xl:hidden" data-cid="n203" aria-hidden="false">
                      First name
                      <span className="inline opacity-70 2xl:hidden" data-cid="n204">
                        {" (required)"}
                      </span>
                    </span>
                    <span className="inline relative leading-6.5 tracking-[0.2px] 2xl:hidden" data-cid="n205">
                      <input className="w-full h-9.5 min-h-9.5 border-b border-solid border-b-surface inline-block py-px pr-0.5 overflow-clip text-border leading-[1.125rem] bg-background cursor-text 2xl:hidden focus:border-b-border" data-cid="n206" data-component="input" aria-describedby="input-newsletter-firstName" aria-invalid="false" aria-required="true" id="newsletter-firstName" name="firstName" type="text" value="" />
                    </span>
                  </label>
                </div>
                <div className="w-1/2 inline-block relative mb-12 max-md:w-full max-md:block max-md:static max-md:inset-auto 2xl:hidden" data-cid="n207">
                  <label className="block relative cursor-default 2xl:hidden" data-cid="n208" htmlFor="newsletter-lastName">
                    <span className="w-[8.5625rem] h-5 block absolute top-5 z-1 text-muted-foreground text-sm leading-5 tracking-[0.5px] transform-[matrix(1,0,0,1,0,-10.0078)] cursor-text 2xl:hidden" data-cid="n209" aria-hidden="false">
                      Last name
                      <span className="inline opacity-70 2xl:hidden" data-cid="n210">
                        {" (required)"}
                      </span>
                    </span>
                    <span className="inline relative leading-6.5 tracking-[0.2px] 2xl:hidden" data-cid="n211">
                      <input className="w-full h-9.5 min-h-9.5 border-b border-solid border-b-surface inline-block py-px pr-0.5 overflow-clip text-border leading-[1.125rem] bg-background cursor-text 2xl:hidden focus:border-b-border" data-cid="n212" data-component="input" aria-describedby="input-newsletter-lastName" aria-invalid="false" aria-required="true" id="newsletter-lastName" name="lastName" type="text" value="" />
                    </span>
                  </label>
                </div>
                <div className="flex relative mt-2 mb-8 2xl:hidden" data-cid="n213">
                  <label className="flex relative mr-2.5 items-start cursor-pointer 2xl:hidden" data-cid="n214" htmlFor="newsletter-agreementToTermsAndConditions" name="agreementToTermsAndConditions">
                    <span className="h-5 border border-solid border-border block relative m-1.5 rounded-sm shrink-0 basis-[20px] text-lg leading-[1.3125rem] 2xl:hidden" data-cid="n215" aria-hidden="false" />
                    <span className="h-full block ml-2 text-xs leading-5 tracking-[0.1px] 2xl:hidden" data-cid="n216" id="checkbox-desc-newsletter-agreementToTermsAndConditions">
                      <div className="h-full block text-muted-foreground leading-4 2xl:hidden" data-cid="n217">
                        <div className="h-full block 2xl:hidden" data-cid="n218">
                          <p className="h-full block tracking-[0.4px] whitespace-pre-wrap 2xl:hidden" data-cid="n219">
                            {"I consent to Bang & Olufsen and its authorised dealers responsible for my local markets (as listed "}
                            <a className="inline-block relative pb-px 2xl:hidden" data-cid="n220" data-component="link" aria-label="here (opens in a new tab)" href="https://stores.bang-olufsen.com/" rel="noopener" target="_blank" title="Store finder link">
                              <span className="inline pb-px 2xl:hidden after:content-[''] after:block after:absolute after:top-[0.8rem] after:bottom-[-0.7px] after:inset-x-0 after:w-[1.6625rem] after:h-0 after:pb-1 2xl:after:hidden" data-cid="n221">
                                here
                              </span>
                            </a>
                            {") contacting me via emails to receive personalised marketing of our products, services and events. This may include profiling based on your preferences and purchasing habits. Unsubscribing is possible at any time. Details on how personal data is processed can be found in the: "}
                            <a className="h-[1.0625rem] inline-block relative pb-px 2xl:hidden" data-cid="n222" data-component="link" aria-label="privacy policy (opens in a new tab)" href="/en/legal/privacy-policy" rel="noopener" target="_blank" title="privacy policy">
                              <span className="inline pb-px 2xl:hidden after:content-[''] after:block after:absolute after:top-[0.8rem] after:bottom-[-0.7px] after:inset-x-0 after:w-[5.1rem] after:h-0 after:pb-1 2xl:after:hidden" data-cid="n223">
                                privacy policy
                              </span>
                            </a>
                            {"\n          ."}
                          </p>
                        </div>
                      </div>
                    </span>
                  </label>
                </div>
                <div className="block mt-7.5 text-muted-foreground text-xs leading-[0.875rem] 2xl:hidden" data-cid="n224">
                  {"This site is protected by reCAPTCHA and the "}
                  <a className="inline-block relative pb-px cursor-pointer 2xl:hidden after:content-[''] after:block after:absolute after:top-3 after:-bottom-0.5 after:inset-x-0 after:w-[7.4375rem] after:h-0 after:pb-1 2xl:after:hidden" data-cid="n225" data-component="link" aria-label="Google Privacy Policy (opens in a new tab)" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
                    {" Google Privacy Policy"}
                  </a>
                  {" and "}
                  <a className="inline-block relative pb-px cursor-pointer 2xl:hidden after:content-[''] after:block after:absolute after:top-3 after:-bottom-0.5 after:inset-x-0 after:w-22 after:h-0 after:pb-1 2xl:after:hidden" data-cid="n226" data-component="link" aria-label="Terms of Service (opens in a new tab)" href="https://policies.google.com/terms" rel="noopener noreferrer" target="_blank">
                    {" Terms of Service"}
                  </a>
                  {" apply."}
                </div>
                <div className="block mt-6 2xl:hidden" data-cid="n227">
                  <button className="h-11 border-2 border-solid border-clr-2 inline-block relative py-2 px-8 rounded-[40px] text-color-001 font-medium leading-6 tracking-[0.1px] text-center bg-border cursor-pointer 2xl:hidden hover:bg-clr-16 hover:border-clr-17 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:bg-clr-2 focus:border-border focus:text-border focus:outline-border focus:[text-decoration-color:var(--border)]" data-cid="n228" data-component="button" aria-label="Subscribe" type="submit">
                    <span className="inline 2xl:hidden hover:border-clr-19 hover:text-clr-19 hover:outline-clr-19 hover:[text-decoration-color:var(--clr-19)] focus:border-color-001 focus:text-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]" data-cid="n229">
                      Subscribe
                    </span>
                    <span className="hidden" data-cid="n230">
                      submit
                    </span>
                  </button>
                </div>
              </fieldset>
            </form>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}
