introTime = null;

function introUpdate(timestamp)
{
	if(introTime == null)
	{
		addSprite("agameby", "agameby", "center", -1000);
		addSprite("technochips", "technochips", "center", -1000);
		introTime = timestamp;
	}
	if(timestamp >= introTime + 4000)
	{
		introStop();
		return;
	}
	sprites["agameby"].setY(Math.pow(timestamp/1500 - 4/3, 5) * 128 + 50);
	sprites["technochips"].setY(Math.pow(timestamp/1500 - 4/3, 5) * -128 + 80);
}

function introStop()
{
	removeSprite("agameby");
	removeSprite("technochips");
	stop = true;

	game.style.backgroundColor = "";
	game.style.color = "";
}