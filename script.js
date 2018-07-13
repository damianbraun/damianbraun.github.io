var current = false;
var empty = "N/D";
var wojExcludes = ['kujawsko-pomorskie', 'warmińsko-mazurskie', 'wielkopolskie', 'zachodniopomorskie'];

function find(query) {
	for (var i = 0; i < dane.length; i++) {
		if (dane[i].id == query) {
			return dane[i];
		}
	}
	return false;
}

var app = new Vue({
	el: '#app',
	data: {
		droga: '',
		km: '',
		wojWarn: false
	},
	computed: {
		woj: function () {
			current = find((this.droga.toString()+this.km).toUpperCase());
			if (wojExcludes.indexOf(current.woj) == -1) {
				this.wojWarn = false;
			}
			else {
				this.wojWarn = true;
			}
			if (current) {
				return current.woj;
			}
			else {
				return empty;
			}
		},
		pow: function () {
			current = find((this.droga.toString()+this.km).toUpperCase());
			if (current) {
				return current.pow;
			}
			else {
				return empty;
			}
		},
		gm: function () {
			current = find((this.droga.toString()+this.km).toUpperCase());
			if (current) {
				return current.gm;
			}
			else {
				return empty;
			}
		},
		mjs: function () {
			current = find((this.droga.toString()+this.km).toUpperCase());
			if (current) {
				return current.mjs;
			}
			else {
				return empty;
			}
		}
	}
});
