/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("// Including the Main React Dependencies\nimport * as React from 'react';\nimport * as ReactDOM from 'react-dom';\n//Router variable\nimport routes from './config/routes';\nimport injectTapEventPlugin from 'react-tap-event-plugin';\nimport getMuiTheme from 'material-ui/styles/getMuiTheme';\nimport MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';\nimport { hashHistory, Router } from 'react-router';\n\ninjectTapEventPlugin();\n\n//mounting point for index.html \nvar where = document.getElementById('app');\n\nReactDOM.render(React.createElement(\n  MuiThemeProvider,\n  { muiTheme: getMuiTheme() },\n  React.createElement(Router, { history: hashHistory, routes: routes })\n), where);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzPzg2YTkiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsInJvdXRlcyIsImluamVjdFRhcEV2ZW50UGx1Z2luIiwiZ2V0TXVpVGhlbWUiLCJNdWlUaGVtZVByb3ZpZGVyIiwiaGFzaEhpc3RvcnkiLCJSb3V0ZXIiLCJ3aGVyZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBTyxLQUFLQyxRQUFaLE1BQTBCLFdBQTFCO0FBQ0E7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGlCQUFuQjtBQUNBLE9BQU9DLG9CQUFQLE1BQWlDLHdCQUFqQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IsZ0NBQXhCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIscUNBQTdCO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsTUFBdEIsUUFBb0MsY0FBcEM7O0FBRUFKOztBQUVBO0FBQ0EsSUFBTUssUUFBUUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFkOztBQUdBVCxTQUFTVSxNQUFULENBQ0M7QUFBQyxrQkFBRDtBQUFBLElBQWtCLFVBQVVQLGFBQTVCO0FBQ0ksc0JBQUMsTUFBRCxJQUFRLFNBQVNFLFdBQWpCLEVBQThCLFFBQVFKLE1BQXRDO0FBREosQ0FERCxFQUd3Qk0sS0FIeEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGluZyB0aGUgTWFpbiBSZWFjdCBEZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vL1JvdXRlciB2YXJpYWJsZVxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2NvbmZpZy9yb3V0ZXMnO1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBoYXNoSGlzdG9yeSwgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblxuLy9tb3VudGluZyBwb2ludCBmb3IgaW5kZXguaHRtbCBcbmNvbnN0IHdoZXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG5cblJlYWN0RE9NLnJlbmRlciggIFxuXHQ8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17Z2V0TXVpVGhlbWUoKX0+XG4gICAgXHQ8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fSByb3V0ZXM9e3JvdXRlc30gLz5cbiAgXHQ8L011aVRoZW1lUHJvdmlkZXI+LCB3aGVyZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);