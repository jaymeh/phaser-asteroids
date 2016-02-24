var dialog = {
	init: function(width, height) {
		// Take in width and height
		// Use as a percentage
		var windowWidth = game.width;
		var windowHeight = game.height;

		var onePercentWidth = windowWidth / 100;
		var onePercentHeight = windowHeight / 100;

		var pixelWidth = onePercentWidth * width;
		var pixelHeight = onePercentHeight * height;

		var centerX = game.world.centerX;
		var centerY = game.world.centerY

		//console.log(pixelWidth);
		//console.log(pixelHeight);

		var bmd = game.add.bitmapData(pixelWidth, pixelHeight);
		 
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, pixelWidth, pixelHeight);
		bmd.ctx.fillStyle = '#ffffff';
		bmd.ctx.fill();
		drawnObject = game.add.sprite(centerX, centerY, bmd);
		drawnObject.anchor.setTo(0.5, 0.5);


		// Find top left hand corner
		var topLeft =  { x: centerX - (pixelWidth / 2), y: centerY - (pixelHeight / 2) };
		var topRight =  { x: centerX + (pixelWidth / 2), y: centerY - (pixelHeight / 2) };

		var bottomLeft =  { x: centerX - (pixelWidth / 2), y: centerY + (pixelHeight / 2) };
		var bottomRight =  { x: centerX + (pixelWidth / 2), y: centerY + (pixelHeight / 2) };

		// Draw corner sprite in each corner

		
		//console.log(this.world.centerX);
		//console.log(this.world.centerY);

		//console.log(game.height);
		//console.log(game.width);
	},
}