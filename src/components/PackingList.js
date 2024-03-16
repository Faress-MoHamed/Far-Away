import { useState } from "react";
import Item from "./Items";
export default function PackingList({ items, onDeleteItem, onToggleItems }) {
	const [sortby, setSortBy] = useState("paceked");
	let sortedItems;
	if (sortby === "input") sortedItems = items;
	else if (sortby === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	else if (sortby === "paceked")
		sortedItems = items.slice().sort((a, b) => 1 * a.packed - 1 * b.packed);
	return (
		<div className="list">
			<ul>
				{sortedItems.map((el) => {
					return (
						<Item
							item={el}
							key={el.id}
							onDeleteItem={onDeleteItem}
							onToggleItems={onToggleItems}
						></Item>
					);
				})}
			</ul>
			<div className="actions">
				<select
					value={sortby}
					onChange={(e) => {
						setSortBy(e.target.value);
					}}
				>
					<option value="input" key="">
						sort by input order
					</option>
					<option value="description" key="">
						sort by description
					</option>
					<option value="paceked" key="">
						sort by paceked status
					</option>
				</select>
				<button
					onClick={() => {
						const confirm = window.confirm(
							"Are you sure you want to delete all items??"
						);
						if (confirm) items.map((el) => onDeleteItem(el.id));
					}}
				>
					Clear List
				</button>
			</div>
		</div>
	);
}