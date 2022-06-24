// Our real web app uses Vue.js but I'll stick to plain JavaScript here

const min = 150;
// The max (fr) values for grid-template-columns
const columnTypeToRatioMap = {
	numeric: 1,
	'text-short': 1.67,
	'text-long': 3.33,
};

const table = document.querySelector('table');
/*
  The following will soon be filled with column objects containing
  the header element and their size value for grid-template-columns
*/
const columns = [];
let headerBeingResized;

// The next three functions are mouse event callbacks

// Where the magic happens. I.e. when they're actually resizing
const onMouseMove = (e) => requestAnimationFrame(() => {
	console.log('onMouseMove');
	
	// Calculate the desired width
	horizontalScrollOffset = document.documentElement.scrollLeft;
	const width = (horizontalScrollOffset + e.clientX) - headerBeingResized.offsetLeft;
	
	/*
		Update the column object with the new size value
		NOTE: we're only fixing one column's width, not all. This is what causes the bad user experience.
	*/
	const column = columns.find(({ header }) => header === headerBeingResized);
	column.size = Math.max(min, width) + 'px'; // Enforce our minimum
	
	
	/*
		Update the column sizes
		Reminder: grid-template-columns sets the width for all columns in one value
	*/
	table.style.gridTemplateColumns = columns
		.map(({ header, size }) => size)
		.join(' ');
});

// Clean up event listeners, classes, etc.
const onMouseUp = () => {
	console.log('onMouseUp');
	
	window.removeEventListener('mousemove', onMouseMove);
	window.removeEventListener('mouseup', onMouseUp);
	headerBeingResized.classList.remove('header--being-resized');
	headerBeingResized = null;
};

// Get ready, they're about to resize
const initResize = ({ target }) => {
	console.log('initResize');
	
	headerBeingResized = target.parentNode;
	window.addEventListener('mousemove', onMouseMove);
	window.addEventListener('mouseup', onMouseUp);
	headerBeingResized.classList.add('header--being-resized');
};

// Let's populate that columns array and add listeners to the resize handles
document.querySelectorAll('th').forEach((header) => {
	const max = columnTypeToRatioMap[header.dataset.type] + 'fr';
	columns.push({
		header,
		// The initial size value for grid-template-columns:
		size: `minmax(${min}px, ${max})`,
	});
	header.querySelector('.resize-handle').addEventListener('mousedown', initResize);
});