const FullPageJS = require('fullpage.js')

console.log(FullPageJS);

new FullPageJS('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

require('./smoke')