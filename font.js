fonts =
{
	"loading":
	{
		sheet: "loading",
		spacing: 1,
		lineheight: 15,
		charset:
		{
			"0": [82, 19, 12, 12, 0, 0],
			"1": [46, 2, 12, 12, 0, 0],
			"2": [59, 2, 11, 13, 0, 0],
			"3": [72, 2, 8, 13, 0, 0],
			"4": [84, 2, 9, 12, 0, 0],
			"5": [96, 3, 8, 12, 0, 1],
			"6": [106, 2, 9, 13, 0, 0],
			"7": [117, 2, 9, 13, 0, 0],
			"8": [48, 16, 8, 14, 0, -1],
			"9": [60, 17, 8, 13, 0, 0],
			"/": [72, 18, 8, 19, 0, -3],
		}
	}
}

strings =
{
}

function textCalculateWidth(font, text)
{
	var width = 0;
	for (const c of text)
	{
		width += fonts[font].charset[c][2];
	}
	return width + (text.length-1)*fonts[font].spacing;
}

function addString(name, font, text, x, y)
{
	if(strings[name]) removeString(name);
	var string = {};
	string.text = text;
	string.font = font;

	var i = 0;
	var ax = 0;
	var ay = 0;

	tfont = fonts[font]
	for (const c of text)
	{
		if(c == "\n")
		{
			ay += tfont.lineheight;
			ax = 0;
			i++;
			continue;
		}
		addSprite(name + "_" + i, font, x + ax + tfont.charset[c][4], y + ay + tfont.charset[c][5], tfont.charset[c][2], tfont.charset[c][3], tfont.charset[c][0], tfont.charset[c][1])

		ax += tfont.charset[c][2] + tfont.spacing;

		i++;
	}

	strings[name] = string;
}

function removeString(name)
{
	if(strings[name])
	{
		for (i = 0; i < strings[name].text.length; i++)
		{
			removeSprite(name + "_" + i);
		}
		strings[name] = null;
	}	
}