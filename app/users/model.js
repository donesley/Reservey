import DS from 'ember-data';

export default DS.Model.extend({
    userName: DS.attr('string'),
    displayName: DS.attr('string'),
    type: DS.attr('string'),
});
