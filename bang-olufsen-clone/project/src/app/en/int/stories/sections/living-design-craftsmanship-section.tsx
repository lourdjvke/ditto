import ListRow from "../components/list-row";
import { ListRow_cids } from "../_cids";
import { ListRow_styles } from "../_styles";
import { listRowData as listRowDataContent } from "../content";
/** Living Design Craftsmanship section. */
export default function LivingDesignCraftsmanshipSection({ listRowData = listRowDataContent } = {}) {
  return (
    <div className="h-17.5 block overflow-hidden max-md:h-[8.8125rem] md:max-lg:h-24.5" data-cid="n49">
      <div className="block relative max-w-378 px-9 mx-auto max-lg:px-4" data-cid="n50">
        <div className="border-b border-solid border-b-surface block bg-background" data-cid="n51">
          <ul className="flex relative flex-wrap justify-center [list-style-type:none] list-outside" data-cid="n52" role="tablist">
            {listRowData.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} styles={ListRow_styles[i]} />)}
          </ul>
        </div>
      </div>
      <div className="block mt-5 overflow-hidden max-md:mt-4 md:max-lg:mt-3" data-cid="n74" id="productListing">
        <div className="h-[0.4375rem] block" data-cid="n75" />
      </div>
    </div>
  );
}
