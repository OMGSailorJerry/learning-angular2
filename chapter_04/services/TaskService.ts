import { TaskModel } from '../models/models';

export default class TaskService {
    tasks: Object[];
    public taskStore: Array<TaskModel> = [];

    constructor() {
        this.tasks = [
            {
                name: "Code an HTML Table",
                deadline: "Mon Jun 23 2015 12:00:00 GMT+0200 (CEST)",
                timeRequired: 25
            }, {
                name: "Sketch a wireframe for the new homepage",
                deadline: "Tue Jun 24 2016 12:00:00 GMT+0200 (CEST)",
                timeRequired: 50
            }, {
                name: "Style table with Bootstrap styles",
                deadline: "Wed Jun 25 2016 12:00:00 GMT+0200 (CEST)",
                timeRequired: 25
            }, {
                name: "Reinforce SEO with custom sitemap.xml",
                deadline: "Wed Jun 26 2016 12:00:00 GMT+0200 (CEST)",
                timeRequired: 75
            }
        ];
        this.loadTasks();
    }

    loadTasks(): void {
        this.taskStore = this.tasks.map((object: any) => new TaskModel(object.name,
                                                                       object.deadline,
                                                                       object.timeRequired));
    }
}
