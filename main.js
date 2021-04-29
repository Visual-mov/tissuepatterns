let refreshTime = 1500;
let enabled = true;

let refresh = () => {
    pattern1.generate()
    pattern2.generate()
    pattern3.generate()
    pattern4.generate()
}
let interval = setInterval(refresh, refreshTime);

function refreshButton() {
    if(enabled) {
        clearInterval(interval);
    } else {
        interval = setInterval(refresh, refreshTime);
        refresh();
    }
    document.getElementById("refreshButton").innerHTML = enabled ? "Enable pattern refresh" :"Disable pattern refresh";
    enabled = !enabled;
}