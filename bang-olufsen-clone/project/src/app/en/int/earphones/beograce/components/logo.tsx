export type LogoData = Record<string, never>;
/** A logo. */
export default function Logo({ d, cids }: { d: LogoData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="w-[45.1875rem] h-[45.1875rem] min-h-px block float-left max-md:w-[23.4375rem] max-md:h-[23.4375rem] md:max-lg:w-192 md:max-lg:h-192 2xl:w-[53.6875rem] 2xl:h-[53.6875rem]">
      <div data-cid={cids[1]} className="h-full block overflow-hidden">
        <div data-cid={cids[2]} className="h-full block relative mx-px pt-[45.1875rem] max-md:pt-[23.4375rem] md:max-lg:pt-192 2xl:pt-[53.6875rem]">
          <div data-cid={cids[3]} className="h-full flex absolute top-0 inset-x-0 justify-center items-center">
            <button data-cid={cids[4]} className="block py-px px-1.5 text-center cursor-pointer" type="button">
              <div data-cid={cids[5]} className="w-0 block relative">
                <img data-cid={cids[6]} className="w-[23.4375rem] h-0 block absolute top-0 left-0 opacity-0 min-w-[23.4375rem] max-w-full overflow-clip object-cover [font-family:'object-fit:_cover;_object-position:_center;']" alt="Beo Grace in Natural Aluminium" />
                <div data-cid={cids[7]} className="w-0 h-0 block relative" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
