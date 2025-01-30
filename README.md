# fs-fe-proxy
A chrome extension to proxy FE assets from local system

# steps
- Open any stack or production account in browser and get the domain the URL. Eg: https://freshworkshelpdesk606.freshservice.com
- Update config/development.js in itildesk. Always use `renderInEmber: false,`
```js
rootElement: '#ember-body-content',
renderInEmber: false,
hostURL: 'https://freshworkshelpdesk606.freshservice.com'
```
- Build and Serve ember asstes
```sh
cd ./itildesk/frontend
./node_modules/ember-cli/bin/ember serve --output-path='../../fs-fe-proxy/dist'
```
- Clone proxy repo
```sh
git clone https://github.com/Satya-Alasakani/fs-fe-proxy.git
```
- Update host details in `./fs-fe-proxy/redirect.js`
```js
let hostname = "freshworkshelpdesk606.freshservice.com";
let localhost = "localhost.freshservice-dev.com";
let localhostPort = "4200";
```
- load chrome extension. ref: [Load an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)
    - Select `fs-fe-proxy` folder
Note: Load chrome extension, once ember serve command is done.

Once extension is loaded, refresh the browser. Ember assets will load from locally built `dist` folder. 
