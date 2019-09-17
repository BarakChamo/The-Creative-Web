
## How to serve our projects o

When building simple projects it's always possible to just open our `index.html` files in the browser
while we are working locally. Sometimes though, specific browser features and requirements, such as
loading `JSON` files, using `WebVR` and other APIs require secure network connections and are blocked
by our browsers from working on local files.

There are two options for serving our files through a server, or a network address:

### 1. Using [GitHub Pages](https://pages.github.com/)
By enabling GitHub pages on our project's git repository, we can use GitHub to serve static files online
direcly from their servers, no servers or storage of our own is needed.

[You can either create new GitHub Pages repos, or enable GitHub pages on existing repositories.](https://help.github.com/en/categories/github-pages-basics)

Once enabled, any file in your repo can be accessed from a browser using the following format:
If a file is stored on your project folder under:
'my_repo/files/example/index.html'

It will be accesible through the GitHub interface through:
`github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/master/files/example/index.html`
notice that the path is a combination of github's URL conventions and your folder structure:
`github.com/` + `YOUR_USERNAME/YOUR_REPO_NAME/` + `blob/master/` + files/example/index.html`


To access it as a statically hosted html page through GitHub Pages, we simply need to convert the format:
`YOUR_USERNAME.github.io/YOUR_REPO_NAME/files/example/index.html`
Notice the `github.io` instead of `github.com`:
`YOUR_USERNAME` _ `.github.io/` + `YOUR_REPO_NAME/` + `files/example/index.html`


### 2. Using a local server
GitHub Pages is a great way to share completed projects with the world, but it's
not so easy to use to quickly test projects you're currently working on.

For that we'll use [`http-server`](https://www.npmjs.com/package/http-server) a simple, zero configuration local server library for Node.js. 

To set up `http-server`:
1. First, make sure both `node` and `npm` are installed on your computer, you can try running both commands in a terminal to make sure.
2. Install `http-server` globally by running `npm install -g http-server`, this will make the command available in the terminal.

To use `http-server` to serve a project:
1. Open terminal and `cd` into the correct project folder, it's best to server files from the project's root folder, (i.e. `user/barak/document/my_project`).
2. Run the `http-server` command and keep track of the port used, by default it'll be `8080`.
3. Navigate to `127.0.0.1:8080` in your browser to access the local server.
4. To access particular files, apply their path to your server address. So to access `my_project/examples/index.html` go to `127.0.0.1:8080/examples/index.html`

To access your project on another local device
1. Make sure your device (a phone / another computer) uses the same WiFi network.
2. [Check the ip of your local computer](https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108)
3. Navigate to your ip using the same port on the other device. So, if my ip is `192.168.1.10` and `http-server` is running on port `8080`, the shared address will be `192.168.1.10:8080`
