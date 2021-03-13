document.addEventListener("keydown", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setNewTitle,
  });
});

function setNewTitle(e) {
    //todo: initialise with shortcut Alt+R
    //todo: try to store first key press and pass to pop-up
    //todo: Store original tab names before renaming
    //chrome.storage.sync.set("tabname", ({ relabel }) => {})
    console.log(e);
    console.log(window.location.href,document.head.getElementsByTagName("title")[0].innerText);
    document.head.getElementsByTagName("title")[0].innerText = prompt("New label");
}