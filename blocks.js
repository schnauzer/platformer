﻿var tileSprites = new Image();
var tileSpritesLoaded = false;
tileSprites.onload = function () {
	tileSpritesLoaded = true;
}
tileSprites.src = "tiles.png";

var properties = {
	// air
	'1': {
		walkable: true
	},
	// wall
	'2': {
		walkable: false
	},
	// grass
	'3': {
		walkable: false
	},
	// bush
	'14': {
		walkable: true
	},
	// door
	'7': {
		walkable: true
	},
	// spawn
	'6': {
		walkable: true
	}
}

function Block(x, y, w, h) {
	Sprite.call(this);
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.sprite_code = 1;
	this.color = 'purple';
	this.walkable = false;
}
Block.prototype.draw = function(c) {
	if (this.hidden) return;
	c.save();
	c.translate(Math.floor(this.x), Math.floor(this.y));
	if (tileSpritesLoaded) {
		c.drawImage(tileSprites, 
					((this.sprite_code % 5) - 1) * 64,
					Math.floor(this.sprite_code / 5) * 64,
					64, 64,
					0, 0,
					64, 64);
	} else {
		c.fillStyle = this.color;
		c.fillRect(0, 0, this.w, this.h);
	}

	c.restore();
};

Block.from_sprite_code = function(code, x, y, w, h) {
	var block = new Block(x, y, w, h);
	block.sprite_code = code;

	if (properties[code.toString()] !== undefined)
		block.walkable = properties[code.toString()].walkable;

	return block;
};

// //import basic block properties and methods
// Air.prototype = new Block;
// Air.prototype.constructor = Air;

// function Air(x, y, w, h) {
// 	Block.call(this, x, y, w, h);
// 	this.walkable = true;
// 	this.color = 'white';
// 	this.sprite_coords = [0,0];
// }

// //import basic block properties and methods
// Door.prototype = new Block;
// Door.prototype.constructor = Door;

// function Door(x, y, w, h) {
// 	Block.call(this, x, y, w, h);
// 	this.walkable = true;
// 	this.color = 'blue';
// }

// //import basic block properties and methods
// Wall.prototype = new Block;
// Wall.prototype.constructor = Wall;

// function Wall(x, y, w, h) {
// 	Block.call(this, x, y, w, h);
// 	this.walkable = false;
// 	this.color = 'green';
// 	this.sprite_coords = [1,0];
// }

// //import basic block properties and methods
// Grass.prototype = new Block;
// Grass.prototype.constructor = Grass;

// function Grass(x, y, w, h) {
// 	Block.call(this, x, y, w, h);
// 	this.walkable = false;
// 	this.color = 'green';
// 	this.sprite_coords = [2,0];
// }

// //import basic block properties and methods
// Bush.prototype = new Block;
// Bush.prototype.constructor = Bush;

// function Bush(x, y, w, h) {
// 	Block.call(this, x, y, w, h);
// 	this.walkable = true;
// 	this.color = 'black';
// 	this.sprite_coords = [3,2];
// }

// //import basic block properties and methods
// Door.prototype = new Block;
// Door.prototype.constructor = Door;

// function Door(x, y, w, h) {
// 	Block.call(this, x, y, w, h);
// 	this.walkable = true;
// 	this.color = 'black';
// 	this.sprite_coords = [1,1];
// }