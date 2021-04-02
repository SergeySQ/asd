import { View } from "dhx-optimus";

export class Form extends View {
	init() {
		return (this.form = new dhx.Form(null, {
			rows: [
				{
					name: "button",
					type: "button",
					submit: true,
					text: "Сохранить отчет",
					size: "medium",
					view: "flat",
					color: "primary",
					url: "https://docs.dhtmlx.com/suite/backend/formData/",
				},
			],
		}));
	}
}
