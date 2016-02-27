var dialog = function() {
	
};

dialog.init = function(width, height, options) {
	// Take in width and height
	// Use as a percentage
	var windowWidth = game.width;
	var windowHeight = game.height;

	var onePercentWidth = windowWidth / 100;
	var onePercentHeight = windowHeight / 100;

	options.pixelWidth = onePercentWidth * width;
	options.pixelHeight = onePercentHeight * height;

	options.centerX = game.world.centerX;
	options.centerY = game.world.centerY;

	this.drawExtendedBackground(options);		

	var bmd = game.add.bitmapData(options.pixelWidth, options.pixelHeight);
	 
	bmd.ctx.beginPath();
	bmd.ctx.rect(0, 0, options.pixelWidth, options.pixelHeight);
	bmd.ctx.fillStyle = '#b87b00';
	bmd.ctx.fill();
	bmd.ctx.lineWidth=10;
	bmd.ctx.strokeStyle="#6b4200";
	bmd.ctx.stroke();
	drawnObject = game.add.sprite(options.centerX, options.centerY, bmd);
	drawnObject.anchor.setTo(0.5, 0.5);

	// Find top left hand corner
	var topLeft =  { x: options.centerX - (options.pixelWidth / 2), y: options.centerY - (options.pixelHeight / 2) };
	var topRight =  { x: options.centerX + (options.pixelWidth / 2), y: options.centerY - (options.pixelHeight / 2) };

	var bottomLeft =  { x: options.centerX - (options.pixelWidth / 2), y: options.centerY + (options.pixelHeight / 2) };
	var bottomRight =  { x: options.centerX + (options.pixelWidth / 2), y: options.centerY + (options.pixelHeight / 2) };

	// Draw corner sprite in each corner
};

dialog.drawExtendedBackground = function(options) {
	if (undefined != options.extendedBackground && options.extendedBackground === true) {
		var bmdBack = game.add.bitmapData(options.pixelWidth + 15, options.pixelHeight + 15);

		bmdBack.ctx.beginPath();
		bmdBack.ctx.rect(0, 0, options.pixelWidth + 15, options.pixelHeight + 15);
		bmdBack.ctx.fillStyle = '#b87b00';
		bmdBack.ctx.fill();

		drawnObjectBack = game.add.sprite(options.centerX, options.centerY, bmdBack);
		drawnObjectBack.anchor.setTo(0.5, 0.5);
	}
};