function untilNext(hours, minutes) {
	var now = new Date(),
		nowHours = now.getHours(),
		nowMinutes = now.getMinutes(),
		next;

	if (nowHours === hours && nowMinutes === minutes) {
		return 0;
	}

	next = new Date();
	next.setHours(hours);
	next.setMinutes(minutes);

	if (next < now) {
		next.setTime(next.getTime() + 86400000);
	}

	return Math.floor(Math.round((next - now) / 1000) / 60);
}
