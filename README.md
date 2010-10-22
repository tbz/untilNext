How many minutes until next HH:MM (24h)

Usage:

	// Returns 0 if current HH:MM is 13:37, or returns minutes until the next one
	untilNext(13, 37); 

Also includes a jQuery plugin.

    $('#answer').untilNext(
		Number hours, 
		Number minutes, 
		Function callback(Number minutesLeft, boolean isNow) 
	);

`callback` will be called every 500 ms, `minutesLeft` will contain the minutes left until hour:minute
