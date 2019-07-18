window.onload = () => {
    const button = document.createElement("button");
    button.id = "darkModeButton";
    button.textContent = "DO IT DARK";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "darkSetting";

    document.querySelector("#end").prepend(button, input, 'Auto apply?');

    button.addEventListener('click', () => enableDarkMode());
    input.addEventListener('click', () => storeSetting());

    checkSetting();
}

function checkSetting() {
    chrome.storage.local.get(['enabled', 'color'], (result) => {
        const isEnabled = result.enabled;
        console.log(result.enabled);
        const color = result.color;
        console.log(color);
        

        document.getElementById('darkSetting').checked = isEnabled;
        if (isEnabled) {
            enableDarkMode();
        }
        
    })
}

function storeSetting() {
    const isEnabled = document.getElementById('darkSetting').checked;
    const setting = { enabled: isEnabled, color: 'purple' };

    chrome.storage.local.set(setting, () => {
        console.log('Stored', setting);
        
    })
}

function enableDarkMode() {
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = "black";
}