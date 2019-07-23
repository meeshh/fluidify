var loader = 'Loading...';

function Fluidify(imageDataSet, opts) {
	var lastY = 0;
	var lastX = 0;
	var threshold = 1;
	var clicking = false;
	var buffer = '';
	var loopable = opts.loopable ? opts.loopable : false;
	var width = opts.width ? opts.width : '600px';

	imagesContainerId = opts.container;

	var toolbox = $(imagesContainerId),
		height = toolbox.height(),
		scrollHeight = toolbox.get(0).scrollHeight;

	var spinnerUrl = opts.spinnerUrl
		? opts.spinnerUrl
		: 'https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif';

	var spinner =
		'<div id="FLUID_loader__' +
		imagesContainerId.slice(1) +
		'" class="FLUID_loader"><img class="loader-image" src="' +
		spinnerUrl +
		'" /></div>';

	var imagesContainer = '<div class="FLUID_images"></div>';

    $(imagesContainerId).addClass('FLUID_imageContainer');
	$(imagesContainerId).css('width', width);
	$(imagesContainerId).prepend(spinner + imagesContainer);

	for (var i = 0; i < imageDataSet.images.length; i++) {
		buffer +=
			'<img draggable="false" class="FLUID_theImageItself" src="' +
			imageDataSet.imageDirectoryPath +
			imageDataSet.imagePrefix +
			imageDataSet.images[i] +
			imageDataSet.imageExtension +
			'" style="width:100%;">';
	}

	$(imagesContainerId)
		.find('.FLUID_images')
		.html(buffer);

	var imgs = document.images,
		len = imgs.length,
		counter = 0;

	[].forEach.call(imgs, function(img) {
		img.addEventListener('load', incrementCounter, false);
	});

	function incrementCounter() {
		counter++;
		if (counter === len) {
			$('#FLUID_loader__' + imagesContainerId.slice(1)).remove();
		}
	}

	$(
		$(imagesContainerId)
			.find('.FLUID_theImageItself')
			.get(0)
	).addClass('active');
	var arrayOfImages = $(imagesContainerId).find('.FLUID_theImageItself');

	$(function() {
		$(imagesContainerId)
			.off('mousewheel')
			.on('mousewheel', function(e, d) {
				if (
					(this.scrollTop === scrollHeight - height && d < 0) ||
					(this.scrollTop === 0 && d > 0)
				) {
					e.preventDefault();
                }
                
				if (e.originalEvent.wheelDelta / 120 > 0) {
					if (
						!$(imagesContainerId + ' .FLUID_theImageItself.active').is(
							':last-child'
						)
					) {
						$(imagesContainerId + ' .FLUID_theImageItself.active')
							.removeClass('active')
							.next()
							.addClass('active');
					} else {
						if (loopable) {
							$(
								imagesContainerId + ' .FLUID_theImageItself.active'
							).removeClass('active');
							$(imagesContainerId + ' .FLUID_theImageItself')
								.first()
								.addClass('active');
						}
					}
				} else {
					if (
						!$(imagesContainerId + ' .FLUID_theImageItself.active').is(
							':first-child'
						)
					) {
						$(imagesContainerId + ' .FLUID_theImageItself.active')
							.removeClass('active')
							.prev()
							.addClass('active');
					} else {
						if (loopable) {
							$(
								imagesContainerId + ' .FLUID_theImageItself.active'
							).removeClass('active');
							$(imagesContainerId + ' .FLUID_theImageItself')
								.last()
								.addClass('active');
						}
					}
				}
			})
			.off('touchmove')
			.on('touchmove', function(e, d) {
                if (
					(this.scrollTop === scrollHeight - height && d < 0) ||
					(this.scrollTop === 0 && d > 0)
				) {
					e.preventDefault();
				}
				var currentY = e.originalEvent.touches[0].clientY;
				var currentX = e.originalEvent.touches[0].clientX;
				if (Math.abs(currentX - lastX) > threshold && currentX - lastX < 0) {
					if (
						!$(imagesContainerId + ' .FLUID_theImageItself.active').is(
							':first-child'
						)
					) {
						$(imagesContainerId + ' .FLUID_theImageItself.active')
							.removeClass('active')
							.prev()
							.addClass('active');
					} else {
						if (loopable) {
							$(
								imagesContainerId + ' .FLUID_theImageItself.active'
							).removeClass('active');
							$(imagesContainerId + ' .FLUID_theImageItself')
								.last()
								.addClass('active');
						}
					}
					lastX = currentX;
				} else if (
					Math.abs(currentX - lastX) > threshold &&
					currentX - lastX > 0
				) {
					if (
						!$(imagesContainerId + ' .FLUID_theImageItself.active').is(
							':last-child'
						)
					) {
						$(imagesContainerId + ' .FLUID_theImageItself.active')
							.removeClass('active')
							.next()
							.addClass('active');
					} else {
						if (loopable) {
							$(
								imagesContainerId + ' .FLUID_theImageItself.active'
							).removeClass('active');
							$(imagesContainerId + ' .FLUID_theImageItself')
								.first()
								.addClass('active');
						}
					}
					lastX = currentX;
				}
			})
			.off('mousedown')
			.on('mousedown', function() {
				clicking = true;
			})
			.off('mouseup')
			.on('mouseup', function() {
				clicking = false;
			})
			.off('mousemove')
			.on('mousemove', function(e) {
				if (clicking) {
					var currentY = e.originalEvent.clientY;
					var currentX = e.originalEvent.clientX;
					if (Math.abs(currentX - lastX) > threshold && currentX - lastX < 0) {
						if (
							!$(imagesContainerId + ' .FLUID_theImageItself.active').is(
								':first-child'
							)
						) {
							$(imagesContainerId + ' .FLUID_theImageItself.active')
								.removeClass('active')
								.prev()
								.addClass('active');
						} else {
							if (loopable) {
								$(
									imagesContainerId + ' .FLUID_theImageItself.active'
								).removeClass('active');
								$(imagesContainerId + ' .FLUID_theImageItself')
									.last()
									.addClass('active');
							}
						}
						lastX = currentX;
					} else if (
						Math.abs(currentX - lastX) > threshold &&
						currentX - lastX > 0
					) {
						if (
							!$(imagesContainerId + ' .FLUID_theImageItself.active').is(
								':last-child'
							)
						) {
							$(imagesContainerId + ' .FLUID_theImageItself.active')
								.removeClass('active')
								.next()
								.addClass('active');
						} else {
							if (loopable) {
								$(
									imagesContainerId + ' .FLUID_theImageItself.active'
								).removeClass('active');
								$(imagesContainerId + ' .FLUID_theImageItself')
									.first()
									.addClass('active');
							}
						}
						lastX = currentX;
					}
				}
			})
			.off('mouseenter')
			.on('mouseenter', function() {})
			.off('mouseleave')
			.on('mouseleave', function() {
				clicking = false;
			});
	});
}
