import { View } from "dhx-optimus";
import { dataset } from "../../assets/data/dataset";
export class TreeView extends View {
	init() {
		this.tree = new dhx.Tree(null, {});
		this.tree.data.parse(dataset);
		return this.tree;
	}
}
