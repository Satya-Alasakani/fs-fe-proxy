# fs-fe-proxy
A chrome extension to proxy FE assets from local system

# steps
- git clone 
    - Clone as a sibling to itildesk repo. Otherise, change the "--output-path" respectively in next step
- Open any stack or production account in browser and get the domain the URL. Eg: https://freshworkshelpdesk606.freshservice.com
- Update config/development.js in itildesk. Always use `renderInEmber: false,`
```js
    rootElement: '#ember-body-content',
    renderInEmber: false,
    hostURL: 'https://freshworkshelpdesk606.freshservice.com'
```
- Run below from itildesk/frontend
```sh
    - ./node_modules/ember-cli/bin/ember serve --output-path='../../fs-fe-proxy/dist'
```
- load chrome extension. ref: [https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked](Load an unpacked extension)
    - Select `fs-fe-proxy` folder
    Note: Load chrome extension, once ember serve command is done.

