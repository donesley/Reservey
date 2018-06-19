import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model() {
		return hash({
			mallfunctions: this.store.findAll('mallfunctions'),
			users: this.store.findAll('users'),
			createusers: this.store.createRecord('users')
		});
	},

	setupController(controller, model) {
		controller.set('mallfunctions', model.mallfunctions);
		controller.set('users', model.users);

		this._super(controller, model);
	},

	actions: {
		deleteIssue(issue) {
			let confirmation = confirm('Are you sure?');

			if (confirmation) {
				issue.destroyRecord();
			}
		},
		saveUser(newUser) {
			newUser.save().then(() => this.transitionTo('rs-service'));
		}
	}
});