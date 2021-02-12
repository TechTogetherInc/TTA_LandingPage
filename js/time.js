// imagine you've got the ISO string from the system
const isoString = new Date().toISOString();

const options = { month: "long", day: "numeric", year: "numeric" };
const date = new Date(isoString);
const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

const time = document.createElement("time");
time.setAttribute("datetime", isoString);
// forgive me father for I have sinned with innerText!
time.innerText = `Published on ${americanDate}`;

document.body.appendChild(time);