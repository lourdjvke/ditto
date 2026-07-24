import ListRow from "../components/list-row";
import { ListRow_cids } from "../_cids";
import { ListRow_styles } from "../_styles";
import { listRowData as listRowDataContent } from "../content";
/** Living Design Craftsmanship section. */
export default function LivingDesignCraftsmanshipSection({ listRowData = listRowDataContent } = {}) {
  return (
    <div className="block" data-cid="n49">
      <div className="block relative max-w-378 px-9 mx-auto max-lg:px-4" data-cid="n50">
        <div className="block bg-background" data-cid="n51">
          <ul className="flex relative flex-wrap justify-center [list-style-type:none] list-outside [&>li]:border-b [&>li]:border-b-[rgba(25,24,23,0.1)]" data-cid="n52" role="tablist">
            {listRowData.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} styles={ListRow_styles[i]} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}
