export default function Stats({ items }) {
	if (!items.length)
		return (
			<p className="stats">
				<em>start adding some items to your list</em>
			</p>
		);
	const numItems = items.length;
	const numOfPacked = items.filter((el) => el.packed).length;
	const precentage = (numOfPacked / numItems) * 100;
	return (
		<footer className="stats">
			<em>
				🦸‍♂️ You have {numItems} items on your list, and you already paceked{" "}
				{numOfPacked}({precentage}%)
			</em>
		</footer>
	);
}