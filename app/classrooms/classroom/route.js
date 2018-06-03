import Route from '@ember/routing/route';

export default Route.extend({
    model: function(params) {
    var classrooms = this.modelFor('classrooms');
        return classrooms.findBy('slug', params.slug);
    }
});