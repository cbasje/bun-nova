class TasksAssistant {
	constructor() {}

	// 	provideTasks() {
	// 		let task = new Task("Say Example");
	//
	// 		task.setAction(
	// 			Task.Build,
	// 			new TaskProcessAction("/usr/bin/say", {
	// 				args: ["I'm Building!"],
	// 				env: {},
	// 			})
	// 		);
	//
	// 		task.setAction(
	// 			Task.Run,
	// 			new TaskProcessAction("/usr/bin/say", {
	// 				args: ["I'm Running!"],
	// 				env: {},
	// 			})
	// 		);
	//
	// 		task.setAction(
	// 			Task.Clean,
	// 			new TaskProcessAction("/usr/bin/say", {
	// 				args: ["I'm Cleaning!"],
	// 				env: {},
	// 			})
	// 		);
	//
	// 		return [task];
	// 	}

	resolveTaskAction(context) {
		let data = context.data;
		let config = context.config;

		let action = new TaskDebugAdapterAction("bun");

		action.command = "bun";
		action.args = ["--inspect"];

		task.setActionAction(Task.Run, action);
	}
}

module.exports = new TasksAssistant();
