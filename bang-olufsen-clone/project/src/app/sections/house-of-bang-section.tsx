"use client";
import { useState } from "react";
import ListRow from "../components/list-row";
import { ListRow_cids } from "../_cids";
import { listRowData as listRowDataContent } from "../content";
/** House Of Bang section. */
export default function HouseOfBangSection({ listRowData = listRowDataContent } = {}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agreed, setAgreed] = useState(false);

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
          <div className="h-[58.0375rem] flex max-w-[33.3333%] ml-[103.3px] py-10 px-4 flex-col justify-center shrink-0 basis-1/3 max-md:h-auto max-md:max-w-full max-md:pt-5 max-md:pb-8 max-md:px-5 max-md:basis-full max-md:ml-0 max-md:shrink-[initial] md:max-lg:h-[52.2375rem] md:max-lg:max-w-[83.3333%] md:max-lg:ml-[60.7px] md:max-lg:px-3 md:max-lg:basis-5/6 2xl:hidden" data-cid="n175">
            <h2 className="block mb-2 text-border text-sm leading-5 tracking-[2px] uppercase 2xl:hidden" data-cid="n176" data-component="heading">
              {"The House of Bang & Olufsen"}
            </h2>
            <h3 className="block mb-6 text-border text-2xl leading-7.5 tracking-[1px] 2xl:hidden" data-cid="n177" data-component="heading">
              Join our global community for exclusive benefits and news about
            </h3>
            <div className="block mb-6 leading-[2.1875rem] tracking-[0.4px] 2xl:hidden" data-cid="n178">
              <ul className="block my-4 pl-0 list-none list-outside 2xl:hidden" data-cid="n180">
                {listRowData.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} />)}
              </ul>
            </div>
            <form className="block 2xl:hidden" data-cid="n192" name="newsletter-form" onSubmit={e => e.preventDefault()}>
              <fieldset className="block min-w-[min-content] border-0 p-0 m-0 2xl:hidden" data-cid="n193">
                <legend className="sr-only 2xl:hidden" data-cid="n194">newsletter-form</legend>

                {/* Email */}
                <div className="block relative mt-2.5 mb-8 2xl:hidden" data-cid="n195">
                  <label className="block relative cursor-text 2xl:hidden" data-cid="n196" htmlFor="newsletter-email">
                    <span
                      className="block text-muted-foreground text-xs leading-5 tracking-[0.5px] mb-1 2xl:hidden"
                      data-cid="n197"
                    >
                      Email <span className="opacity-60">(required)</span>
                    </span>
                    <input
                      className="w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 pr-0.5 text-border text-sm leading-6 bg-background cursor-text outline-none transition-colors 2xl:hidden focus:border-b-border"
                      data-cid="n200"
                      aria-required="true"
                      id="newsletter-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                    />
                  </label>
                </div>

                {/* First + Last name row */}
                <div className="flex gap-4 mb-8 max-md:flex-col max-md:gap-0 2xl:hidden">
                  <div className="flex-1 max-md:mb-8 2xl:hidden" data-cid="n201">
                    <label className="block relative cursor-text 2xl:hidden" data-cid="n202" htmlFor="newsletter-firstName">
                      <span className="block text-muted-foreground text-xs leading-5 tracking-[0.5px] mb-1 2xl:hidden" data-cid="n203">
                        First name <span className="opacity-60">(required)</span>
                      </span>
                      <input
                        className="w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 pr-0.5 text-border text-sm leading-6 bg-background cursor-text outline-none transition-colors 2xl:hidden focus:border-b-border"
                        data-cid="n206"
                        aria-required="true"
                        id="newsletter-firstName"
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                      />
                    </label>
                  </div>
                  <div className="flex-1 2xl:hidden" data-cid="n207">
                    <label className="block relative cursor-text 2xl:hidden" data-cid="n208" htmlFor="newsletter-lastName">
                      <span className="block text-muted-foreground text-xs leading-5 tracking-[0.5px] mb-1 2xl:hidden" data-cid="n209">
                        Last name <span className="opacity-60">(required)</span>
                      </span>
                      <input
                        className="w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 pr-0.5 text-border text-sm leading-6 bg-background cursor-text outline-none transition-colors 2xl:hidden focus:border-b-border"
                        data-cid="n212"
                        aria-required="true"
                        id="newsletter-lastName"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                      />
                    </label>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex relative mt-2 mb-8 2xl:hidden" data-cid="n213">
                  <label className="flex relative items-start cursor-pointer gap-3 2xl:hidden" data-cid="n214" htmlFor="newsletter-agreementToTermsAndConditions">
                    <input
                      type="checkbox"
                      id="newsletter-agreementToTermsAndConditions"
                      name="agreementToTermsAndConditions"
                      checked={agreed}
                      onChange={e => setAgreed(e.target.checked)}
                      className="mt-1 w-4 h-4 shrink-0 border border-border rounded-sm cursor-pointer accent-[rgb(25,24,23)]"
                    />
                    <span className="text-xs leading-5 tracking-[0.1px] text-muted-foreground 2xl:hidden">
                      I consent to Bang &amp; Olufsen and its authorised dealers contacting me via emails to receive personalised marketing. Unsubscribing is possible at any time. Details in the{" "}
                      <a href="/en/legal/privacy-policy" className="underline" target="_blank" rel="noopener">privacy policy</a>.
                    </span>
                  </label>
                </div>

                {/* reCAPTCHA note */}
                <div className="block mt-7.5 text-muted-foreground text-xs leading-[0.875rem] 2xl:hidden" data-cid="n224">
                  {"This site is protected by reCAPTCHA and the "}
                  <a className="underline cursor-pointer 2xl:hidden" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy Policy</a>
                  {" and "}
                  <a className="underline cursor-pointer 2xl:hidden" href="https://policies.google.com/terms" rel="noopener noreferrer" target="_blank">Terms of Service</a>
                  {" apply."}
                </div>

                {/* Submit */}
                <div className="block mt-6 2xl:hidden" data-cid="n227">
                  <button
                    className="bo-pill-btn h-11 border-2 border-solid border-border inline-block py-2 px-8 rounded-[40px] text-[rgb(252,250,238)] font-medium leading-6 tracking-[0.1px] text-center bg-border cursor-pointer 2xl:hidden"
                    data-cid="n228"
                    type="submit"
                    aria-label="Subscribe"
                  >
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
