import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
    name: '',

    init: function() {
        this._super(...arguments);
        if (!this.get('reservations')) {
            this.set('reservations', []);
        }
    },

    slug: computed('name', function() {
        return this.get('name').dasherize();
    })
});