precaches = [
	"loading",
	"agameby",
	"technochips",
	"title",
	"placeholder"
]
precached = 1;

function precache(img, onload)
{
	var i = new Image()
	i.src = "graphics/" + img + ".png";
	if(onload)
	{
		if(i.complete) onload();
		else i.onload = onload;
	}
}

function initializePrecache()
{
	addSprite("loading", "loading", "center", "center", 44, 24, 0, 0)
	setPrecacheText();
	
	precacheNext();
}

function precacheNext()
{
	if(precached == precaches.length)
	{
		precacheDone();
		return;
	}
	precache(precaches[precached], precacheNext);
	setPrecacheText();
	precached++;
}

function precacheDone()
{
	removeString("loader");
	removeSprite("loading");

	window.requestAnimationFrame(gameUpdate);
}

function setPrecacheText()
{
	var loadstring = precached + "/" + precaches.length;
	var width = textCalculateWidth("loading", loadstring);
	addString("loader", "loading", loadstring, gameWidth/2 - width/2, gameHeight*0.65)
}