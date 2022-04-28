sprites = {}

function removeSprite(name)
{
	if(sprites[name])
	{
		sprites[name].element.remove();
		sprites[name] = null;
	}
}

function addSprite(name, graphics, x, y, width, height, ox, oy)
{
	if(sprites[name]) removeSprite(name);
	var sprite =
	{
		element: document.createElement("img"),
		setGraphics: function(v)
		{
			this.graphics = v,
			this.element.src = "graphics/" + v + ".png";
			return v;
		},
		setOX: function(v)
		{
			this.ox = v;
			this.element.style.left = Math.round(this.x - v) + "px";
			this.element.style.clip = "inset(" + this.oy + "px " + (this.element.width-(v+this.width)) + "px " + (this.element.height-(this.oy+this.height)) + "px " + v +"px)";
			return v;
		},
		setOY: function(v)
		{
			this.oy = v;
			this.element.style.left = Math.round(this.y - v) + "px";
			this.element.style.clip = "inset(" + v + "px " + (this.element.width-(this.ox+this.width)) + "px " + (this.element.height-(v+this.height)) + "px " + this.ox +"px)";
			return v;
		},
		setX: function(v)
		{
			if(v == "center") v = gameWidth/2 - this.width/2;
			this.x = v;
			this.element.style.left = Math.round(v - this.ox) + "px";
			return v;
		},
		setY: function(v)
		{
			if(v == "center") v = gameHeight/2 - this.height/2;
			this.y = v;
			this.element.style.top = Math.round(v - this.oy) + "px";
			return v;
		},
		setWidth: function(v)
		{
			this.width = v;
			this.element.style.clip = "inset(" + this.oy + "px " + (this.element.width-(this.ox, v)) + "px " + (this.element.height-(this.oy+this.height)) + "px " + this.ox +"px)";
			return v;
		},
		setHeight: function(v)
		{
			this.height = v;
			this.element.style.clip = "inset(" + this.oy + "px " + (this.element.width-(this.ox+this.width)) + "px " + (this.element.height-(this.oy+v)) + "px " + this.ox +"px)";
			return v;
		},
		setSize: function(w,h)
		{
			this.width = w;
			this.height = h;
			this.element.style.clip = "inset(" + this.oy + "px " + (this.element.width-(this.ox+w)) + "px " + (this.element.height-(this.oy+h)) + "px " + this.ox +"px)";
			return v;
		}
	}
	sprites[name] = sprite;

	sprite.setGraphics(graphics);
	sprite.ox = ox || 0;
	sprite.oy = oy || 0;
	sprite.width = width || sprite.element.width;
	sprite.height = height || sprite.element.height;
	sprite.element.style.clipPath = "inset(" + sprite.oy + "px " + (sprite.element.width-(sprite.ox+sprite.width)) + "px " + (sprite.element.height-(sprite.oy+sprite.height)) + "px " + sprite.ox +"px)";
	sprite.setX(x);
	sprite.setY(y);

	sprite.element.id = name;

	game.appendChild(sprite.element);

	return sprite;
}