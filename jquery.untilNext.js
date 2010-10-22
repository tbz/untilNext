(function ($) {

$.fn.untilNext = function (hours, minutes, callback) {
	var collection = this;
	(function () {
		var minutesLeft = untilNext(hours, minutes);
		callback.call(collection, minutesLeft, minutesLeft === 0);
		window.setTimeout(arguments.callee, 500);
	})();
};

function untilNext(hour, minute) {
	var now = new Date(),
		nowHour = now.getHours(),
		nowMinute = now.getMinutes(),
		next;

	if (nowHour == hour && nowMinute == minute) {
		return 0;
	}

	next = new Date();
	next.setHours(hour);
	next.setMinutes(minute);

	if (next < now) {
		next.setTime( next.getTime() + 86400000 );
	}

	return Math.floor(Math.round((next - now) / 1000) / 60);
}

})(jQuery);
