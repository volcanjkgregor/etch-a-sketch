function ten() {
	genGrid(10);
}

function twenty() {
	genGrid(20);
}

function thirty() {
	genGrid(30);
}

function genGrid(x) {
	const container = document.querySelector('.container');
	console.log(container);

	for (let items = 0; items < x * x; items++) {
		let singleGrid = document.createElement('div');
		container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
		container.insertAdjacentElement('beforeend', singleGrid);
	}
	var gridItem = container.querySelectorAll('div');
	gridItem.forEach((gridItem) =>
		gridItem.addEventListener('mouseover', paintGrid)
	);
}

function paintGrid() {
	console.log('Trigger');
	this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
}

function clearGrid() {
	const container = document.querySelector('.container');
	var gridPixels = container.querySelectorAll('div');
	gridPixels.forEach(
		(gridPixel) => (gridPixel.style.backgroundColor = '#ffffff')
	);
}
ten();
