import Route from '@ember/routing/route';

export default Route.extend({
    model: function(params) {
        return this.store.findRecord('classroom', params.classroom_id);
    }
});