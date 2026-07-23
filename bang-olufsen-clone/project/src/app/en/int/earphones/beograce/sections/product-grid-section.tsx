import ProductCard from "../components/product-card";
import Tile from "../components/tile";
import Tile2 from "../components/tile2";
import Tile3 from "../components/tile3";
import Tile4 from "../components/tile4";
import Tile5 from "../components/tile5";
import Tile6 from "../components/tile6";
import Tile7 from "../components/tile7";
import Tile8 from "../components/tile8";
import { ProductCard_cids, Tile_cids, Tile2_cids, Tile3_cids, Tile4_cids, Tile5_cids, Tile6_cids, Tile7_cids, Tile8_cids } from "../_cids";
import { ProductCard_styles, Tile_styles, Tile2_styles, Tile3_styles, Tile4_styles, Tile5_styles, Tile6_styles, Tile8_styles } from "../_styles";
import { products as productsContent, tileData as tileDataContent, tile2Data as tile2DataContent, tile3Data as tile3DataContent, tile4Data as tile4DataContent, tile5Data as tile5DataContent, tile6Data as tile6DataContent, tile7Data as tile7DataContent, tile8Data as tile8DataContent } from "../content";
/** Product Grid section. */
export default function ProductGridSection({ products = productsContent, tileData = tileDataContent, tile2Data = tile2DataContent, tile3Data = tile3DataContent, tile4Data = tile4DataContent, tile5Data = tile5DataContent, tile6Data = tile6DataContent, tile7Data = tile7DataContent, tile8Data = tile8DataContent } = {}) {
  return (
    <div className="block max-w-378 py-10 px-[2.3125rem] mx-auto max-lg:pl-[1.0625rem] max-lg:pr-0 2xl:py-20 2xl:px-[5.5625rem]" data-cid="n805">
      <div className="flex -mx-4 flex-wrap max-md:-mx-1.5 md:max-lg:-mx-3" data-cid="n806">
        <div className="w-309.5 block max-w-full px-4 shrink-0 basis-full max-md:w-92.5 max-md:px-1.5 md:max-lg:w-[48.4375rem] md:max-lg:px-3 2xl:w-341.5" data-cid="n807">
          <div className="h-[72.0625rem] flex relative flex-col max-md:h-[78.3125rem] max-md:overflow-auto md:max-lg:h-[70.8125rem] 2xl:h-[61.5625rem]" data-cid="n808">
            <table className="h-[70.8125rem] table relative mt-5 max-md:h-[78.3125rem] max-lg:mt-0 2xl:h-[60.3125rem]" data-cid="n809">
              <thead className="table-header-group align-middle" data-cid="n810">
                <tr className="h-58.5 table-row relative align-middle max-md:h-50.5 md:max-lg:h-55.5 grid-cols-3" data-cid="n811">
                  <th className="hidden 2xl:table-cell 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:font-bold 2xl:text-center" data-cid="n812" aria-hidden="true" />
                  {products.map((d, i) => <ProductCard key={i} d={d} cids={ProductCard_cids[i]} styles={ProductCard_styles[i]} />)}
                </tr>
              </thead>
              <tbody className="table-row-group align-middle" data-cid="n849">
                <tr className="table-row relative align-middle 2xl:hidden" data-cid="n850">
                  <th className="w-301.5 table-cell min-w-35 mb-5 pt-5 px-2.5 align-middle text-border text-sm leading-6 tracking-[1.7px] text-center uppercase max-md:w-120 max-lg:pt-4 max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] max-lg:px-0 md:max-lg:w-[46.9375rem] 2xl:hidden" data-cid="n851" colSpan="3">
                    <div className="w-[24.4625rem] h-10 block sticky left-160 pt-4 transform-[matrix(1,0,0,1,-195.688,0)] mx-auto max-md:w-60 max-lg:h-9 max-md:left-0 max-md:text-left max-md:transform-[none] max-lg:mx-0 md:max-lg:w-[15.4875rem] md:max-lg:left-96 md:max-lg:transform-[matrix(1,0,0,1,-123.914,0)] 2xl:hidden" data-cid="n852">
                      <div className="block 2xl:hidden" data-cid="n853">
                        Price
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className="table-row relative align-middle" data-cid="n854">
                  <th className="hidden 2xl:w-[333.5px] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:min-w-35 2xl:mb-5 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:text-border 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:text-left 2xl:uppercase" data-cid="n855">
                    Price
                  </th>
                  <td className="w-100.5 border-b border-solid border-b-surface table-cell py-4 align-middle text-center max-md:w-40 max-md:pr-2.5 max-md:text-left md:max-lg:w-[250.3px] 2xl:w-[333.5px] 2xl:py-8" data-cid="n856">
                    <span className="inline text-muted-foreground text-xs leading-5 tracking-[0.1px]" data-cid="n857">
                      <span className="inline" data-cid="n858">
                        $1,500
                      </span>
                    </span>
                  </td>
                  <td className="w-100.5 border-b border-solid border-b-surface table-cell py-4 align-middle text-center max-md:w-40 max-md:pr-2.5 max-md:text-left md:max-lg:w-[250.3px] 2xl:w-[333.5px] 2xl:py-8" data-cid="n859">
                    <span className="inline text-muted-foreground text-xs leading-5 tracking-[0.1px]" data-cid="n860">
                      <span className="inline" data-cid="n861">
                        $599
                      </span>
                    </span>
                  </td>
                  <td className="w-100.5 border-b border-solid border-b-surface table-cell py-4 align-middle text-center max-md:w-40 max-md:pr-2.5 max-md:text-left md:max-lg:w-[250.3px] 2xl:w-[333.5px] 2xl:py-8" data-cid="n862">
                    <span className="inline text-muted-foreground text-xs leading-5 tracking-[0.1px]" data-cid="n863">
                      <span className="inline" data-cid="n864">
                        {"From "}
                      </span>
                      <span className="inline" data-cid="n865">
                        $2,200
                      </span>
                    </span>
                  </td>
                </tr>
                <tr className="table-row relative align-middle" data-cid="n866">
                  <th className="w-301.5 h-15 table-cell min-w-35 mb-5 pt-5 px-2.5 align-middle text-border text-sm leading-6 tracking-[1.7px] text-center uppercase max-md:w-120 max-lg:h-13 max-lg:pt-4 max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] max-lg:px-0 md:max-lg:w-[46.9375rem] 2xl:w-[333.5px] 2xl:h-[9.0625rem] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:pb-5 2xl:text-left" data-cid="n867" colSpan="3">
                    <div className="w-[24.4625rem] h-10 block sticky left-160 pt-4 transform-[matrix(1,0,0,1,-195.688,0)] mx-auto max-md:w-60 max-lg:h-9 max-md:left-0 max-md:text-left max-md:transform-[none] max-lg:mx-0 md:max-lg:w-[15.4875rem] md:max-lg:left-96 md:max-lg:transform-[matrix(1,0,0,1,-123.914,0)] 2xl:hidden" data-cid="n868">
                      <div className="block 2xl:hidden" data-cid="n869">
                        {"Noise Isolation "}
                      </div>
                    </div>
                  </th>
                  {tileData.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                </tr>
                <tr className="table-row relative align-middle" data-cid="n879">
                  <th className="hidden 2xl:w-[333.5px] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:min-w-35 2xl:mb-5 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:text-border 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:text-left 2xl:uppercase" data-cid="n880">
                    Microphones
                  </th>
                  {tile2Data.map((d, i) => <Tile2 key={i} d={d} cids={Tile2_cids[i]} styles={Tile2_styles[i]} />)}
                </tr>
                <tr className="table-row relative align-middle" data-cid="n890">
                  <th className="w-301.5 table-cell min-w-35 mb-5 pt-5 px-2.5 align-middle text-border text-sm leading-6 tracking-[1.7px] text-center uppercase max-md:w-120 max-lg:pt-4 max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] max-lg:px-0 md:max-lg:w-[46.9375rem] 2xl:w-[333.5px] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:pb-5 2xl:text-left" data-cid="n891" colSpan="3">
                    <div className="w-[24.4625rem] h-10 block sticky left-160 pt-4 transform-[matrix(1,0,0,1,-195.688,0)] mx-auto max-md:w-60 max-lg:h-9 max-md:left-0 max-md:text-left max-md:transform-[none] max-lg:mx-0 md:max-lg:w-[15.4875rem] md:max-lg:left-96 md:max-lg:transform-[matrix(1,0,0,1,-123.914,0)] 2xl:hidden" data-cid="n892">
                      <div className="block 2xl:hidden" data-cid="n893">
                        {"Microphones "}
                      </div>
                    </div>
                  </th>
                  {tile3Data.map((d, i) => <Tile3 key={i} d={d} cids={Tile3_cids[i]} styles={Tile3_styles[i]} />)}
                </tr>
                <tr className="table-row relative align-middle" data-cid="n903">
                  <th className="hidden 2xl:w-[333.5px] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:min-w-35 2xl:mb-5 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:text-border 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:text-left 2xl:uppercase" data-cid="n904">
                    Bluetooth
                  </th>
                  {tile4Data.map((d, i) => <Tile4 key={i} d={d} cids={Tile4_cids[i]} styles={Tile4_styles[i]} />)}
                </tr>
                <tr className="table-row relative align-middle" data-cid="n914">
                  <th className="w-301.5 table-cell min-w-35 mb-5 pt-5 px-2.5 align-middle text-border text-sm leading-6 tracking-[1.7px] text-center uppercase max-md:w-120 max-lg:pt-4 max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] max-lg:px-0 md:max-lg:w-[46.9375rem] 2xl:w-[333.5px] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:pb-5 2xl:text-left" data-cid="n915" colSpan="3">
                    <div className="w-[24.4625rem] h-10 block sticky left-160 pt-4 transform-[matrix(1,0,0,1,-195.688,0)] mx-auto max-md:w-60 max-lg:h-9 max-md:left-0 max-md:text-left max-md:transform-[none] max-lg:mx-0 md:max-lg:w-[15.4875rem] md:max-lg:left-96 md:max-lg:transform-[matrix(1,0,0,1,-123.914,0)] 2xl:hidden" data-cid="n916">
                      <div className="block 2xl:hidden" data-cid="n917">
                        {"Battery Life "}
                      </div>
                    </div>
                  </th>
                  {tile5Data.map((d, i) => <Tile5 key={i} d={d} cids={Tile5_cids[i]} styles={Tile5_styles[i]} />)}
                </tr>
                <tr className="table-row relative align-middle 2xl:hidden" data-cid="n927">
                  {tile6Data.map((d, i) => <Tile6 key={i} d={d} cids={Tile6_cids[i]} styles={Tile6_styles[i]} />)}
                </tr>
                <tr className="table-row relative align-middle 2xl:hidden" data-cid="n937">
                  <th className="w-301.5 table-cell min-w-35 mb-5 pt-5 px-2.5 align-middle text-border text-sm leading-6 tracking-[1.7px] text-center uppercase max-md:w-120 max-lg:pt-4 max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] max-lg:px-0 md:max-lg:w-[46.9375rem] 2xl:hidden" data-cid="n938" colSpan="3">
                    <div className="w-[24.4625rem] h-10 block sticky left-160 pt-4 transform-[matrix(1,0,0,1,-195.688,0)] mx-auto max-md:w-60 max-lg:h-9 max-md:left-0 max-md:text-left max-md:transform-[none] max-lg:mx-0 md:max-lg:w-[15.4875rem] md:max-lg:left-96 md:max-lg:transform-[matrix(1,0,0,1,-123.914,0)] 2xl:hidden" data-cid="n939">
                      <div className="block 2xl:hidden" data-cid="n940">
                        {"Bluetooth "}
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className="h-[3.3125rem] table-row relative align-middle 2xl:hidden" data-cid="n941">
                  {tile7Data.map((d, i) => <Tile7 key={i} d={d} cids={Tile7_cids[i]} />)}
                </tr>
                <tr className="h-15 table-row relative align-middle max-lg:h-13 2xl:hidden" data-cid="n951">
                  <th className="w-301.5 h-full table-cell min-w-35 mb-5 pt-5 px-2.5 align-middle text-border text-sm leading-6 tracking-[1.7px] text-center uppercase max-md:w-120 max-lg:pt-4 max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] max-lg:px-0 md:max-lg:w-[46.9375rem] 2xl:hidden" data-cid="n952" colSpan="3">
                    <div className="w-[24.4625rem] h-10 block sticky left-160 pt-4 transform-[matrix(1,0,0,1,-195.688,0)] mx-auto max-md:w-60 max-lg:h-9 max-md:left-0 max-md:text-left max-md:transform-[none] max-lg:mx-0 md:max-lg:w-[15.4875rem] md:max-lg:left-96 md:max-lg:transform-[matrix(1,0,0,1,-123.914,0)] 2xl:hidden" data-cid="n953">
                      <div className="block 2xl:hidden" data-cid="n954">
                        {"Dust and Waterproof Rating "}
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className="h-[4.5625rem] table-row relative align-middle 2xl:hidden" data-cid="n955">
                  {tile8Data.map((d, i) => <Tile8 key={i} d={d} cids={Tile8_cids[i]} styles={Tile8_styles[i]} />)}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="block max-md:pr-[1.0625rem]" data-cid="n965">
            <div className="block max-w-378" data-cid="n966">
              <div className="flex -mx-4 flex-wrap max-md:-mx-1.5 md:max-lg:-mx-3" data-cid="n967">
                <div className="w-309.5 block max-w-full px-4 shrink-0 basis-full max-md:w-[22.0625rem] max-md:px-1.5 md:max-lg:w-[48.4375rem] md:max-lg:px-3 2xl:w-341.5" data-cid="n968">
                  <div className="h-11 flex mt-10 justify-end uppercase max-md:h-30 max-md:flex-col-reverse" data-cid="n969">
                    <div className="block ml-5 max-md:ml-0" data-cid="n970">
                      <a className="h-11 border-2 border-solid border-border flex relative min-w-35 py-2 px-8 rounded-[40px] flex-1 overflow-hidden text-border font-medium leading-6 tracking-[0.1px] text-center normal-case cursor-pointer max-md:block max-md:mb-4 hover:bg-clr-8 hover:border-clr-9 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)] focus:bg-border focus:border-clr-0 focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-cid="n971" data-component="button" aria-label="Compare other headphones" href="/en/int/compare?slug=headphones" target="_self">
                        Compare other headphones
                      </a>
                    </div>
                    <div className="block ml-5 max-md:ml-0" data-cid="n972">
                      <a className="h-11 border-2 border-solid border-clr-0 flex relative py-2 px-8 rounded-[40px] flex-1 text-color-001 font-medium leading-6 tracking-[0.1px] text-center normal-case bg-border cursor-pointer max-md:block max-md:mb-4 max-md:h-auto hover:bg-clr-9 hover:border-clr-8 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)] focus:bg-clr-0 focus:border-border focus:text-border focus:outline-border focus:[text-decoration-color:var(--border)]" data-cid="n973" data-component="button" aria-label="Show full comparison" href={"/en/int/comparison/products?slug=headphones&p1=beograce&p2=beoplay-eleven&p3=beoplay-h100"} target="_self">
                        Show full comparison
                      </a>
                    </div>
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
