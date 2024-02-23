const registerTaskProvider = require("./features/tasks/tasks");
const registerDebugger = require("./features/debug");
const registerPackageJsonProviders = require("./features/tasks/package.json");
const registerBunlockEditor = require("./features/lockfile");

exports.activate = function () {
	// Do work when the extension is activated
	registerBunlockEditor(context);
	registerDebugger(context);
	registerTaskProvider(context);
	registerPackageJsonProviders(context);
};

exports.deactivate = function () {
	// Clean up state before the extension is deactivated
};

// Tasks
const Tasks = require("Tasks.js");
nova.assistants.registerTaskAssistant(Tasks, {
	identifier: "bun",
	name: "Bun",
});
