import { View } from "dhx-optimus";

export class ToolbarView extends View {
	init() {
		return (this.toolbar = new dhx.Toolbar(null, {
			css: "toolbar",
			data: [
				{
					id: "remove",
					value: "Удалить",
					icon: "dxi dxi-delete",
					circle: true,
				},
				{
					id: "add",
					icon: "dxi dxi-plus",
					value: "Добавить",
					circle: true,
				},
			],
		}));
	}

	ready() {
		this.actionButtons = ["remove", "add"];

		this.toolbar.events.on("click", id => {
			switch (id) {
				case "remove":
					this.fire("removeItem", []);
					break;
				case "add":
					this.fire("addItem", []);
					break;
			}
		});
	}

	hideActionButtons() {
		this.toolbar.disable(this.actionButtons);
	}

	showActionButtons() {
		this.toolbar.enable(this.actionButtons);
	}
}
