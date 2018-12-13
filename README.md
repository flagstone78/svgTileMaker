# svgTileMaker
Creates a set of tiles in svg. Originally made to generate a file for a laser cutter to etch and cut custom wooden tiles.

To print with the VLS6.60 laser cutter driver and Inkscape:
  1. press ctrl+a to select all elements
  2. select path -> object to path
  3. select Extensions -> Export -> Win32 Vector print
  4. select a material and material thickness and press ok

Notes:
In inkscape, all objects must be ungrouped for the object to path operation to work.
Ctrl+p does not work. It only creates raster output. The Win32 Vector print allows vector cutting.
