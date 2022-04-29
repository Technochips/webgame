titleTime = null

function titleUpdate(timestamp)
{
	if(titleTime == null)
	{
		addSprite("title", "title", "center", -1000);
		addSprite("placeholder", "placeholder", "center", -1000);
		addSprite("placeholder2", "placeholder2", "center", 115);
		titleTime = timestamp + 500;
	}
	var px = Math.sin(timestamp/1000)*Math.cos(timestamp/750)*32 + 48;
	var py = -Math.abs(Math.sin(timestamp/250))*16 + 72;
	if(timestamp < titleTime)
	{
		sprites["title"].setY(Math.pow(timestamp/500 - (titleTime) / 500, 2) * -128 + 5);
		px += Math.pow(timestamp/500 - (titleTime) / 500, 4) * 128;
	}
	px += Math.random()*2-1;
	py += Math.random()*2-1;
	sprites["placeholder"].setPos(px, py);
	sprites["placeholder2"].setX(px - 5);
}