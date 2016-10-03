# Project03 - Restaurant Finder

### RUN:
1. `git clone`
2. `npm install-dev`
3. To run client: 
   * `cd client/build`
   * `python -m simpleHTTPServer *port*`

### Notes for build files:
1. library used: react-create-app, react-router
2. All Components in Jsx are compiled into build directory
3. directory for build:
   * /build
     * index.html   &nbsp;&nbsp; # index.html for build
     * favicon.ico
     * /images
     * /static
       * /css
       * /js      


### Notes for development files :
1. I use <a href="https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html">react-create-app</a> as a build tool, it uses webpack in background with very minimum configuration
2. there is only one **build** directory and server directory for production mode, **everything else are for development mode**
3. directory: 
   * /client
     * /build    &nbsp;&nbsp; &nbsp;&nbsp;# build directory for production only, 
  * -- **every files below are for development mode** --
     * /public   &nbsp;&nbsp; # main html and static assets
     * package.json
     * /node_modules
     * /src
       * /components_pages  &nbsp;&nbsp; # each pages: home.html, showStations.html
       * /components_utils  &nbsp;&nbsp; # components that are common among pages
     * /helper   &nbsp;&nbsp; # helper functions
       * favicon.ico
       * index.css
       * index.js &nbsp;&nbsp;  # app main entry
       * logo.svc
