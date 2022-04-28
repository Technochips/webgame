const game = document.getElementById("game")

const gameWidth = 128;
const gameHeight = 128;
zoomFactor = 1;
oldZoomFactor = 0;
gameState = "loading"

function findZoomFactor()
{
	var h = Math.floor(Math.max(1, window.innerHeight/gameHeight));
	var w = Math.floor(Math.max(1, window.innerWidth/gameWidth));
	zoomFactor = Math.min(h,w);
}
function setSize()
{
	game.style.width = gameWidth + "px";
	game.style.height = gameHeight + "px";
	game.style.marginLeft = -gameWidth/2 + "px";
	game.style.marginTop = -gameHeight/2 + "px";
}
function resetSize()
{
	findZoomFactor();
	if(zoomFactor != oldZoomFactor)
	{
		game.style.transform = "scale(" + zoomFactor + ")";

		oldZoomFactor = zoomFactor;
	}
}

function initialize()
{
	setSize();
	resetSize();
	window.onresize = resetSize;

	game.style.backgroundColor = "black";
	
	precache("loading", initializePrecache)
}
initialize();