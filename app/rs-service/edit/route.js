import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('mallfunctions', params.issue_id);
  },

  actions: {

    saveIssue(issue) {
      issue.save().then(() => this.transitionTo('rs-service'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});