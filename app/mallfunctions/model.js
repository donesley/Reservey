import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
    reporter: DS.attr('string'),
    classroom: DS.attr('string'),
    issue: DS.attr('string'),
    status: DS.attr('string'),

    isValid: notEmpty('reporter')
});
