function isSysZHT()  // check system language
{
    let sysLang = navigator.language.toLowerCase();
    return ((sysLang == "zh-tw") || (sysLang == "zh-hk") || (sysLang == "zh-mo"))? true: false;
}

function setLang(lang)
{
    localStorage.setItem("userLang", lang);
    history.go(0);
}

// var useZHT = isSysZHT();
var useZHT = false;  // disable auto detection

switch (localStorage.getItem("userLang"))
{
    case "zh-hans": useZHT = false; break;
    case "zh-hant": useZHT = true; break;
}