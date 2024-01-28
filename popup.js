chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getSelection"}, function(response) {
        if(response && response.selection){
            document.getElementById('selectedText').innerText = response.selection;
        }
        else{
            document.getElementById('selectedText').innerText = "No text selected.";
        }
    });
});