import { View } from "dhx-optimus";
import { emptyItem } from "../../assets/data/data";

export class GridView extends View {
	init() {
		function doTest(params) {
			//	const urlBase = "http://10.250.0.33:3000/rpc/select_cities";
			const urlBase = "http://10.250.0.33:3000/rpc/select_report_stats_period";
			const urlData = { from_date: 1611511200, to_date: 1614211200, day_cnt: 5, sc_id: 5 };
			const urlConf = {
				responseType: "json",
				headers: { Prefer: "params=single-object", "Content-Type": "application/json" },
			};

			const url = urlBase;
			let jsData = {};
			console.log(url);
			dhx.ajax
				.get(url, urlData, urlConf)
				.then(function (data) {
					console.log("data");
					jsData = data;
					console.log(jsData);
					grid.data.parse(jsData);
				})
				.catch(function (err) {
					console.log(err);
					//	dataContainer.textContent = err.status + " " + err.statusText;
				});
			console.log("before grid");
			var grid = new dhx.Grid("grid_container", {
				columns: [
					{ width: 100, id: "object_name", header: [{ text: "#" }] },
					{ width: 100, id: "ot_name", header: [{ text: "Title" }] },
					{ width: 200, id: "point_name", header: [{ text: "Name" }] },
					{ width: 200, id: "start_date", header: [{ text: "Address" }] },
					{ width: 200, id: "end_date", header: [{ text: "Address" }] },
					{ width: 200, id: "modem_num", header: [{ text: "Address" }] },
					{ width: 200, id: "store_num", header: [{ text: "Address" }] },
					{ width: 200, id: "stat_dt1", header: [{ text: "Address" }] },
					{ width: 200, id: "stat_dt2", header: [{ text: "Address" }] },
					{ width: 200, id: "value1", header: [{ text: "Address" }] },
					{ width: 200, id: "value2", header: [{ text: "Address" }] },
				],
				headerRowHeight: 50,
				autoWidth: true,
				selection: "row",
				editable: true,
			});
			console.log("after grid");
		}
		this.on("removeItem", () => {
			const selected = this.grid.selection.getCell();
			if (selected) {
				this.grid.data.remove(selected.row.id);
			}
		});

		this.on("addItem", () => {
			const selected = this.grid.selection.getCell();
			if (selected) {
				this.grid.data.add({ ...emptyItem }, this.grid.data.getIndex(selected.row.id) + 1);
			} else {
				this.grid.data.add({ ...emptyItem }, 0);
			}
		});
		doTest();
		return this.grid;
	}
}
