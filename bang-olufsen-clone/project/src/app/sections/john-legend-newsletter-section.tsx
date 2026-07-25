"use client";
import { useState } from "react";

const FLOAT_LABEL =
  "absolute left-0 top-1/2 -translate-y-1/2 text-sm text-[rgb(25,24,23)] tracking-[0.5px] cursor-text pointer-events-none transition-all duration-200 " +
  "peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-xs " +
  "peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-full peer-[&:not(:placeholder-shown)]:text-xs";

const INPUT_BASE =
  "peer w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 pr-0.5 " +
  "text-[rgb(25,24,23)] text-sm leading-6 bg-background cursor-text outline-none " +
  "transition-colors focus:border-b-[rgb(25,24,23)] placeholder-transparent";

const DOB_LABEL =
  "absolute left-0 right-0 top-1/2 -translate-y-1/2 text-sm text-[rgb(25,24,23)] " +
  "tracking-[0.5px] cursor-text pointer-events-none transition-all duration-200 text-center " +
  "peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-xs " +
  "peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-full peer-[&:not(:placeholder-shown)]:text-xs";

export default function JohnLegendNewsletterSection() {
  const [salutation, setSalutation] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="block bg-primary">
      <div className="block max-w-[1400px] mx-auto py-15 px-17 max-lg:py-7.5 max-lg:px-4">
        <div className="flex -mx-4 flex-wrap bg-background max-md:-mx-1.5 md:max-lg:-mx-3">

          {/* Left — custom image */}
          <div className="block relative max-w-[50%] pr-4 shrink-0 basis-1/2 max-lg:max-w-full max-lg:basis-full max-lg:pr-0 max-md:shrink-[initial]">
            <div className="h-full block">
              <div className="h-full block relative">
                <img
                  className="w-full h-[58.0625rem] block relative max-w-full overflow-clip object-cover max-md:h-[32.4375rem] md:max-lg:h-[18.4375rem] md:max-lg:max-h-[18.4375rem]"
                  alt="BeoLab 90 sound elevated lifestyle"
                  src="https://images.ctfassets.net/8cd2csgvqd3m/6AIFGjIf76pkrMF2C0p6yu/34fc8b97e2b6cd2510fcafed84c0b511/soundelevated_beolab90_lifestyle_202510_00_16x9.webp?q=90&fm=webp&w=1440"
                />
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="h-[58.0375rem] flex max-w-[33.3333%] ml-[103.3px] py-10 px-4 flex-col justify-center shrink-0 basis-1/3 max-md:h-auto max-md:max-w-full max-md:pt-5 max-md:pb-8 max-md:px-5 max-md:basis-full max-md:ml-0 max-md:shrink-[initial] md:max-lg:h-[52.2375rem] md:max-lg:max-w-[83.3333%] md:max-lg:ml-[60.7px] md:max-lg:px-3 md:max-lg:basis-5/6">
            <h2 className="block mb-2 text-[rgb(25,24,23)] text-sm leading-5 tracking-[2px] uppercase">
              The House of Bang &amp; Olufsen
            </h2>
            <h3 className="block mb-3 text-[rgb(25,24,23)] text-2xl leading-7.5 tracking-[1px]">
              Join the House of Bang &amp; Olufsen
            </h3>
            <p className="block mb-6 text-[rgb(25,24,23)] text-sm leading-6">
              Sign up to get the latest on news, community benefits and sound and music experiences.
            </p>

            <form className="block" name="jl-newsletter-form" onSubmit={e => e.preventDefault()}>
              <fieldset className="block min-w-[min-content] border-0 p-0 m-0">
                <legend className="sr-only">newsletter-form</legend>

                {/* Salutation */}
                <div className="relative mt-2.5 mb-8 pt-5">
                  <select
                    className="peer w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 pr-6 text-[rgb(25,24,23)] text-sm leading-6 bg-background cursor-pointer outline-none transition-colors focus:border-b-[rgb(25,24,23)] appearance-none"
                    id="jl-salutation"
                    name="salutation"
                    value={salutation}
                    onChange={e => setSalutation(e.target.value)}
                  >
                    <option value="" disabled hidden />
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                    <option value="ms">Ms</option>
                    <option value="others">Others</option>
                  </select>
                  {/* Chevron */}
                  <svg className="absolute right-1 top-[calc(50%+0.6rem)] -translate-y-1/2 w-3 h-3 pointer-events-none" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="rgb(25,24,23)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <label
                    className={`absolute left-0 text-[rgb(25,24,23)] tracking-[0.5px] pointer-events-none transition-all duration-200 ${salutation ? "top-0 -translate-y-full text-xs" : "top-[calc(50%+0.6rem)] -translate-y-1/2 text-sm"}`}
                    htmlFor="jl-salutation"
                  >
                    Salutation
                  </label>
                </div>

                {/* Email */}
                <div className="relative mt-2.5 mb-8 pt-5">
                  <input
                    className={INPUT_BASE}
                    aria-required="true"
                    id="jl-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder=" "
                  />
                  <label className={FLOAT_LABEL} htmlFor="jl-email">
                    Email <span className="opacity-60">(required)</span>
                  </label>
                </div>

                {/* First + Last name */}
                <div className="flex gap-4 mb-8 max-md:flex-col max-md:gap-0">
                  <div className="relative flex-1 pt-5 max-md:mb-8">
                    <input
                      className={INPUT_BASE}
                      aria-required="true"
                      id="jl-firstName"
                      name="firstName"
                      type="text"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      placeholder=" "
                    />
                    <label className={FLOAT_LABEL} htmlFor="jl-firstName">
                      First name <span className="opacity-60">(required)</span>
                    </label>
                  </div>
                  <div className="relative flex-1 pt-5">
                    <input
                      className={INPUT_BASE}
                      aria-required="true"
                      id="jl-lastName"
                      name="lastName"
                      type="text"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      placeholder=" "
                    />
                    <label className={FLOAT_LABEL} htmlFor="jl-lastName">
                      Last name <span className="opacity-60">(required)</span>
                    </label>
                  </div>
                </div>

                {/* Date of birth */}
                <div className="mb-8">
                  <p className="text-[0.625rem] text-[rgb(25,24,23)] leading-4 tracking-[0.5px] mb-2 opacity-60">
                    Date of birth
                  </p>
                  <div className="flex gap-3">
                    <div className="relative w-14 pt-5 shrink-0">
                      <input
                        className="peer w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 text-[rgb(25,24,23)] text-sm leading-6 bg-background cursor-text outline-none transition-colors focus:border-b-[rgb(25,24,23)] placeholder-transparent text-center"
                        id="jl-dob-day"
                        name="dob-day"
                        type="text"
                        inputMode="numeric"
                        maxLength={2}
                        value={day}
                        onChange={e => setDay(e.target.value.replace(/\D/g, ""))}
                        placeholder=" "
                      />
                      <label className={DOB_LABEL} htmlFor="jl-dob-day">DD</label>
                    </div>
                    <div className="relative w-14 pt-5 shrink-0">
                      <input
                        className="peer w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 text-[rgb(25,24,23)] text-sm leading-6 bg-background cursor-text outline-none transition-colors focus:border-b-[rgb(25,24,23)] placeholder-transparent text-center"
                        id="jl-dob-month"
                        name="dob-month"
                        type="text"
                        inputMode="numeric"
                        maxLength={2}
                        value={month}
                        onChange={e => setMonth(e.target.value.replace(/\D/g, ""))}
                        placeholder=" "
                      />
                      <label className={DOB_LABEL} htmlFor="jl-dob-month">MM</label>
                    </div>
                    <div className="relative w-20 pt-5 shrink-0">
                      <input
                        className="peer w-full h-10 border-b-2 border-solid border-b-[rgb(25,24,23)] block py-1 text-[rgb(25,24,23)] text-sm leading-6 bg-background cursor-text outline-none transition-colors focus:border-b-[rgb(25,24,23)] placeholder-transparent text-center"
                        id="jl-dob-year"
                        name="dob-year"
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        value={year}
                        onChange={e => setYear(e.target.value.replace(/\D/g, ""))}
                        placeholder=" "
                      />
                      <label className={DOB_LABEL} htmlFor="jl-dob-year">YYYY</label>
                    </div>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex relative mt-2 mb-8">
                  <label className="flex relative items-start cursor-pointer gap-3" htmlFor="jl-agreed">
                    <input
                      type="checkbox"
                      id="jl-agreed"
                      name="agreed"
                      checked={agreed}
                      onChange={e => setAgreed(e.target.checked)}
                      className="mt-1 w-4 h-4 shrink-0 border border-[rgb(25,24,23)] rounded-sm cursor-pointer accent-[rgb(25,24,23)]"
                    />
                    <span className="text-xs leading-5 tracking-[0.1px] text-[rgb(25,24,23)]">
                      I consent to Bang &amp; Olufsen and its authorised dealers contacting me via emails to receive
                      personalised marketing. Unsubscribing is possible at any time. Details in the{" "}
                      <a href="/en/legal/privacy-policy" className="underline" target="_blank" rel="noopener">
                        privacy policy
                      </a>.
                    </span>
                  </label>
                </div>

                {/* reCAPTCHA */}
                <div className="block mt-7.5 text-[rgb(25,24,23)] text-xs leading-[0.875rem]">
                  {"This site is protected by reCAPTCHA and the "}
                  <a className="underline cursor-pointer" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy Policy</a>
                  {" and "}
                  <a className="underline cursor-pointer" href="https://policies.google.com/terms" rel="noopener noreferrer" target="_blank">Terms of Service</a>
                  {" apply."}
                </div>

                {/* Submit */}
                <div className="block mt-6">
                  <button
                    className="bo-pill-btn h-11 border-2 border-solid border-[rgb(25,24,23)] inline-block py-2 px-8 rounded-[40px] text-[rgb(252,250,238)] font-medium leading-6 tracking-[0.1px] text-center bg-[rgb(25,24,23)] cursor-pointer"
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
