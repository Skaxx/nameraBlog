function timeUntilNextWednesday() {
            const now = new Date();
            const currentDay = now.getDay();
            const daysUntilWednesday = currentDay <= 3 ? 3 - currentDay : 10 - currentDay;
            const millisecondsInADay = 1000 * 60 * 60 * 24;
            const millisecondsUntilWednesday = daysUntilWednesday * millisecondsInADay;

            const nextWednesday = new Date(now.getTime() + millisecondsUntilWednesday);
            nextWednesday.setHours(12, 0, 0, 0);

            const timeUntilWednesday = nextWednesday.getTime() - now.getTime();

            return timeUntilWednesday;
        }

        function formatTime(milliseconds) {
            const totalSeconds = Math.floor(milliseconds / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = Math.floor(totalSeconds % 60);

            return `${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`;
        }

        function updateTimer() {
            const timeUntilWednesdayMs = timeUntilNextWednesday();
            document.getElementById("timeJs").innerText = formatTime(timeUntilWednesdayMs);
        }

        document.addEventListener("DOMContentLoaded", function () {
            updateTimer();

            setInterval(updateTimer, 1000);
        });
