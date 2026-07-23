export type MediaTileData = {
  href: string;
  id: string;
  alt: string;
  imgSrc: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile({ d, cids }: { d: MediaTileData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="w-83 block mr-6 max-md:hidden md:max-lg:w-50.5 md:max-lg:mr-[0.9375rem] 2xl:w-100" aria-hidden="false">
      <div data-cid={cids[1]} className="h-full block max-md:hidden">
        <a data-cid={cids[2]} className="inline-block text-muted-foreground cursor-pointer max-md:hidden hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-component="link" href={d.href}>
          <div data-cid={cids[3]} className="block max-md:hidden" id={d.id}>
            <div data-cid={cids[4]} className="block max-md:hidden">
              <div data-cid={cids[5]} className="block relative bg-surface max-md:hidden">
                <div data-cid={cids[6]} className="block max-md:hidden">
                  <picture data-cid={cids[7]} className="inline max-md:hidden">
                    <img data-cid={cids[8]} className="w-83 h-83 block relative max-w-full overflow-clip max-md:hidden md:max-lg:w-50.5 md:max-lg:h-50.5 2xl:w-100 2xl:h-100" data-component="image" alt={d.alt} sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src={d.imgSrc} />
                  </picture>
                </div>
              </div>
            </div>
            <div data-cid={cids[9]} className="block pr-5 max-md:hidden">
              <p data-cid={cids[10]} className="block mt-6 mb-1 text-border text-[0.625rem] leading-4.5 tracking-[2px] text-left uppercase max-md:hidden">
                {d.description}
              </p>
              <p data-cid={cids[11]} className="block text-border leading-6.5 tracking-[0.2px] text-left max-md:hidden">
                {d.description2}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
