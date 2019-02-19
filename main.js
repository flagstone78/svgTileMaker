var tileDesc = {
	// The key is what will appear on the tile.
	//	 Characters are allowed by lowercase wil not appear to be vertically centered
	// The value is how many times it will appear in the set
	// strings that have a "." at the end will have the "." removed and the number will be underlined.
	numberDesc: {
		0: 7,
		1: 6,
		2: 6,
		3: 7,
		4: 10,
		5: 6,
		'6.': 10,
		7: 14,
		8: 12,
		'9.': 12
	},	
	scale: 100, //Width and height of tiles
	strokeWidth: .001, //Thickness of tile border
	spaceRatio: 0.1, //Ratio of the spacing between tiles to tile width and height
	radiusRatio: 0.2, //Ratio of the radius of tile corners to the tile width and height
	textSizeRatio: 0.8, //Ratio of the font size to the tile height
	parentElement: document.body //Element to add the svg to
}

drawStuff(tileDesc);