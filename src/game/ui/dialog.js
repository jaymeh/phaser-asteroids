var dialog = {
	init: function(width, height, options) {
		// Take in width and height
		// Use as a percentage
		var windowWidth = game.width;
		var windowHeight = game.height;

		var onePercentWidth = windowWidth / 100;
		var onePercentHeight = windowHeight / 100;

		var pixelWidth = onePercentWidth * width;
		var pixelHeight = onePercentHeight * height;

		var centerX = game.world.centerX;
		var centerY = game.world.centerY;

		if (undefined != options.extendedBackground && options.extendedBackground === true) {
			var bmdBack = game.add.bitmapData(pixelWidth + 15, pixelHeight + 15);

			bmdBack.ctx.beginPath();
			bmdBack.ctx.rect(0, 0, pixelWidth + 15, pixelHeight + 15);
			bmdBack.ctx.fillStyle = '#b87b00';
			bmdBack.ctx.fill();

			drawnObjectBack = game.add.sprite(centerX, centerY, bmdBack);
			drawnObjectBack.anchor.setTo(0.5, 0.5);
		}

		var bmd = game.add.bitmapData(pixelWidth, pixelHeight);
		 
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, pixelWidth, pixelHeight);
		bmd.ctx.fillStyle = '#b87b00';
		bmd.ctx.fill();
		bmd.ctx.lineWidth=10;
		bmd.ctx.strokeStyle="#6b4200";
		bmd.ctx.stroke();
		drawnObject = game.add.sprite(centerX, centerY, bmd);
		drawnObject.anchor.setTo(0.5, 0.5);

		// Find top left hand corner
		var topLeft =  { x: centerX - (pixelWidth / 2), y: centerY - (pixelHeight / 2) };
		var topRight =  { x: centerX + (pixelWidth / 2), y: centerY - (pixelHeight / 2) };

		var bottomLeft =  { x: centerX - (pixelWidth / 2), y: centerY + (pixelHeight / 2) };
		var bottomRight =  { x: centerX + (pixelWidth / 2), y: centerY + (pixelHeight / 2) };

		// Draw corner sprite in each corner
	},
}