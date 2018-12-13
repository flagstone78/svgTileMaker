function drawStuff(desc){
	var numberlist = []; //expand list
	for (var key in desc.numberDesc){ 
		while(desc.numberDesc[key] > 0){
			numberlist.push(key)
			desc.numberDesc[key]--
		}
	}
	
	var space = desc.spaceRatio*desc.scale //spacing between tiles
	var radius = desc.radiusRatio*desc.scale //radius of tile corners
	var textSize = desc.textSizeRatio*desc.scale //font size

	var numXTiles = Math.floor(Math.sqrt(numberlist.length)) //number of tiles in x direction
	var numYTiles = Math.ceil(numberlist.length/numXTiles) //number of tiles in y direction

	var svgWidth = numXTiles*(desc.scale+space)+1 //total width of image
	var svgHeight = numYTiles*(desc.scale+space)+1 //total height of image
	
	var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg'); 
	svg.setAttribute('width', svgWidth)
	svg.setAttribute('height', svgHeight)
	svg.style.fontFamily = 'helvetica'
	svg.setAttribute('font-weight', 900)
	svg.setAttribute('font-size', textSize)
	
	for( var i = 0; i<numXTiles; i++){ //line 1
		for(var j = 0; j<numYTiles; j++){ //letters
			var boxx = i*(desc.scale+space)+0.5*desc.strokeWidth
			var boxy = j*(desc.scale+space)+0.5*desc.strokeWidth
			var rect = document.createElementNS("http://www.w3.org/2000/svg",'rect')
			rect.setAttribute('width',desc.scale)
			rect.setAttribute('height',desc.scale)
			rect.setAttribute('x', boxx)
			rect.setAttribute('y', boxy)
			rect.setAttribute('rx',radius)
			rect.setAttribute('ry',radius)
			rect.setAttribute('stroke','red')
			rect.setAttribute('stroke-width',desc.strokeWidth)
			rect.setAttribute('fill','none')

			svg.appendChild(rect);
			
			var number = document.createElementNS("http://www.w3.org/2000/svg",'text')
			if(i*numXTiles+j < numberlist.length){
				number.innerHTML = numberlist[i*numYTiles+j]
			}
			number.setAttribute('x',(0.5*desc.scale)+ boxx)
			number.setAttribute('y',0.5*desc.scale+0.355*textSize+boxy)
			number.setAttribute('text-anchor','middle')
			number.setAttribute('stroke','none')
			number.setAttribute('fill','black')
			svg.appendChild(number);
			
		}
	}	
	
	
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	
    var svgData = svg.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
	var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = 'TileSet';

    document.body.appendChild(downloadLink);
	downloadLink.innerHTML="<button> Download Svg </button>"

	
	desc.parentElement.appendChild(svg)
}
