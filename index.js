const package = require("./package.json");
const os = require("os");

console.log("Welcome to about-me v" + package.version + "!");

const http = require("http");
http.createServer(function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.setHeader("X-Server-Software", "about-me v" + package.version);

	let resData = {
		"software": {
			"name": "about-me",
			"version": package.version,
			"urls": {
				"docker": "https://hub.docker.com/r/marvinmenzerath/about-me/",
				"source": "https://git.marvin-menzerath.de/docker/about-me"
			}
		},
		"os": {
			"hostname": os.hostname(),
			"type": os.type(),
			"platform": os.platform(),
			"arch": os.arch(),
			"release": os.release(),
			"uptime": os.uptime(),
			"loadavg": os.loadavg(),
			"totalmem": os.totalmem(),
			"freemem": os.freemem(),
			"hostncpusame": os.cpus(),
			"networkInterfaces": os.networkInterfaces()
		},
		"environment": process.env,
		"node": process.versions,
		"request": req.headers
	};

	res.write(JSON.stringify(resData, null, 4));

	res.end();
}).listen(80);
