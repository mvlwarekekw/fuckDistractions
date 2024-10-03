chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "ON",
    });
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    const url = details.url
    if (url.startsWith("https://www.youtube.com/shorts") || url.startsWith("https://www.instagram.com") || url.startsWith("https://www.tiktok.com")) {
        chrome.tabs.reload()
        console.log("reloaded")
    }
})