import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('classrooms');

	},

    actions: {
        didTransition: function() {
            document.title = 'Reservey - Admin'
		},
		willTransition: function(transition) {
            var controller = this.controller.get('isEditable');
			//TODO Fancy popup ISO confirm..
            if (controller && !confirm("You have unsaved changes. Are you sure you want to leave?")) {
				transition.abort();
			} else {
				return true;
            }
        }
    }
});