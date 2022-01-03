import clock from "clock";
import { getElementById } from "document";

// Cache time element
const timeElem = getElementById("time");

// Update the clock every minute
clock.granularity = "minutes";
clock.ontick = onMinute;

function onMinute(evt) {
  const today = evt.date;
  const hours = modulo12(today.getHours());
  const mins = zeroPad(today.getMinutes());
  timeElem.text = `${hours}:${mins}`;
}

function modulo12(hours) {
  return hours % 12 || 12;
}

function zeroPad(i) {
  return i < 10 ? "0" + i : i;
}