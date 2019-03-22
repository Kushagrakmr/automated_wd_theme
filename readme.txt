This is the main directory. This readme file serves as the guidelines for the using this setup. It summarise the details needed to use this
configuration correcty.

* It conatins the app folder which conatins the main content HTML and CSS of the website. It also contains the temp folder
  which contains the temp files created by gulp task using the files by piping them through the various plugins and then served to the website.

* The gulp folder contains the gulp tasks which manages the various npm packages and leverages them. 

* The node_moudles is the temp folder which can be generated using the package.json file using the [npm install] code.

* The webpack.config.js is uncomplete. It was intended to be used to maintain the JavaScript files and configure them. The Babel plugin was also
  intended to be used but for now it is left alone. 