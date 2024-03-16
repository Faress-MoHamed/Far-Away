import React, { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [

];
export default function App() {
	const [items, setItems] = useState(initialItems);

	function handleAddItems(item) {
		setItems((curitems) => [...curitems, item]);
	}
	function handleDeleteItems(id) {
		setItems((currentItems) =>
			currentItems.filter((curItem) => curItem.id !== id)
		);
	}
	function handleToggleItem(id) {
		setItems((currentItems) =>
			currentItems.map((el) =>
				el.id === id ? { ...el, packed: !el.packed } : el
			)
		);
	}
	return (
		<div className="app">
			<Logo></Logo>
			<Form onAddItems={handleAddItems}></Form>
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItems}
				onToggleItems={handleToggleItem}
			></PackingList>
			<Stats items={items}></Stats>
		</div>
	);
}



