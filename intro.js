introTime = null;
const introTimeStop = 4000;
const introTimeCenter = introTimeStop/2

function introUpdate(timestamp)
{
	if(introTime == null)
	{
		addSprite("agameby", "agameby", "center", -1000);
		addSprite("technochips", "technochips", "center", -1000);
		introTime = timestamp;
	}
	if(timestamp >= introTime + introTimeStop)
	{
		introStop();
		return;
	}
	sprites["agameby"].setY(Math.pow(timestamp/introTimeCenter - (introTimeCenter + introTime) / introTimeCenter, 4) * -128 + 40);
	sprites["technochips"].setY(Math.pow(timestamp/introTimeCenter - (introTimeCenter + introTime) / introTimeCenter, 4) * 128 + 60);
}

function introStop()
{
	removeSprite("agameby");
	removeSprite("technochips");
	currentUpdate = titleUpdate;

	game.style.backgroundColor = "";
	game.style.color = "";
}