$("#slider-object-string").noUiSlider({
	range: {
		'min': [ 0 ],
		'max': [ 20 ]
	},
	start: [ 5 ],
	serialization: {
		lower: [

			$.Link({
				target: $("#textlocation"),
				method: "text"
			})

		]
	}
});
