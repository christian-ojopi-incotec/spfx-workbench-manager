sharepointRegex = /_layouts\/15\/workbench\.aspx/;

chrome.tabs.onActivated.addListener(tab => {
    getTab().then(url => {
        if (sharepointRegex.test(url)) {
            chrome.scripting.executeScript({
                target: { tabId: tab.tabId, allFrames: true },
                files: ['./foreground.js'],
            }, );
        }
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        getTab().then(url => {
            if (sharepointRegex.test(url)) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId, allFrames: true },
                    files: ['./foreground.js'],
                }, );
            }
        });
    }
});


async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
	if (tabs && tabs.length > 0) return tabs[0].url;
	else return '';
}