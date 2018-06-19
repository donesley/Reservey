import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
    sortBy: 'ratingDesc',
    sortedProperties: computed('sortBy', function() {
    var options = {
    'classroomDesc': 'classroom:asc',
    'classroomAsc': 'classroom:asc',
    'attendantsDesc': 'attendants:desc',
    'attendantsAsc': 'attendants:asc',
    };
    return options[this.get('sortBy')];
    }),
    sortedReservations: sort('model.reservations', 'sortedProperties'),
    showDialog: false,

    actions: {
        openDialog() {
            this.get('dialog').openReservations();
        },
        toggleDialog() {
            this.toggleProperty('showDialog');
        },
        closeDialog(){

        },
        setSorting(option) {
            this.set('sortBy', option);
        },
    }
});
