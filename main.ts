hourOfAi.onStart(function () {
	
})
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(randint(-180, 180))
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(randint(-180, 180))
})
