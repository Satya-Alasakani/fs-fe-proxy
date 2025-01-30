/**
 * Redirects the ember assets of https://<domain>/a/assets/** to http://localhost.freshservice-dev.com:4200/a/assets
 */
let hostname = "freshworkshelpdesk606.freshservice.com";
let localhost = "localhost.freshservice-dev.com";
let localhostPort = "4200";
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      const url = new URL(details.url);
      if (url.pathname.indexOf("/a/assets/") !== -1 || url.pathname.indexOf("/a/translations/") !== -1) {
        
        // eg pathName = https://assets17.freshgenie.com/a/assets/freshservice-9f95a765c8b7743a3c0c2a12a16ed943.js
        // eg pathName = https://assets17.freshgenie.com/a/assets/fs-chunk-2-9bc66ec45d56a1b427f6.js

        if (url.pathname.indexOf("/a/assets/fs-chunk") !== -1) {
            // Do nothing for chunks
            // When a chunk is update in local, handle that alone here.
        } else {
            // remove fingerprinted hash from the path, as dev build won't have fingerprinted files
            // If the use case is to test prod build, use assetMap.json to get the fingerprinted file name
            url.pathname = url.pathname.replace(/-[a-f0-9]{2,40}(?=\.[a-z]+$)/, '');
        }
        
        return { redirectUrl: chrome.runtime.getURL(url.pathname.replace('/a', "dist")) };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );