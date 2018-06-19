import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    facility: DS.attr('string'),
    capacity: DS.attr('number'),
    outlets: DS.attr('number'),

    // reservations: DS.hasMany('reservations'),
});
