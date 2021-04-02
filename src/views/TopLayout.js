import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { GridView } from "./content/GridView";
import { Form } from "./form";
import { TreeView } from "./content/TreeView";

export class TopLayout extends View {
	init() {
		return (this.layout = new dhx.Layout(null, {
			// rows: [
			// 	{
			// 		id: "toolbar",
			// 		height: "content",
			// 		init: cell => this.show(cell, ToolbarView),
			// 	},
			// 	{
			// 		id: "content",
			// 	},
			// 	// {
			// 	// 	id: "button",
			// 	// 	height: "content",
			// 	// 	init: cell => this.show(cell, Form),
			// 	// },
			// ],

			type: "line",
			rows: [
				{
					type: "wide",
					rows: [
						{
							id: "toolbar",
							header: "Меню",
							headerIcon: "dxi dxi-dots-horizontal",
							height: "120px",
							collapsable: true,
							init: cell => this.show(cell, ToolbarView),
						},
						{
							cols: [
								{
									id: "sidebar",
									header: "Sidebar",
									init: cell => this.show(cell, TreeView),
									collapsable: true,
									width: "200px",
									headerHeight: 40,
								},
								{
									id: "content",
									header: "Content",
									headerHeight: 60,
								},
							],
						},
					],
				},
			],
		}));
	}

	ready() {
		this.observe(
			state => state.active,
			active => {
				switch (active) {
					case "grid":
						this.show(this.layout.getCell("content"), GridView, {
							dataCollection: this.params.persons,
						});
						break;
				}
			}
		);
	}
}
