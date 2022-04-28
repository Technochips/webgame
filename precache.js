precaches = [
	"loading",
	"agameby",
	"technochips"
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
	precache(precaches[precached], precacheNext);
	setPrecacheText();
	precached++;
	if(precached == precaches.length)
	{
		precacheDone();
	}
}

function precacheDone()
{
	removeSprite("loading");
}

function setPrecacheText()
{
	var loadstring = precached + "/" + precaches.length;
	var width = textCalculateWidth("loading", loadstring);
	addString("loader", "loading", loadstring, gameWidth/2 - width/2, gameHeight*0.65)
}