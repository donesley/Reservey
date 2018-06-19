import DS from 'ember-data';

export default DS.Model.extend({
    attendants: DS.attr('string'),
    timebox: DS.attr('string'),
    classroom: DS.attr('string')
});
