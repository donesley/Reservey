import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    name: '',
    onDialogEnabled: false,
    isEditable: false,
    isShowingDialog: false,
    test: false,

    isAddButtonDisabled: computed('name', function() {
        return isEmpty(this.get('name'));
    }),

    actions: {
        onToggleDialog() {
            this.toggleProperty('isShowingDialog');
        },

        createClassroom() {
            const name = this.get('name');
            const facility = this.get('facility');
            const capacity = this.get('capacity');
            const outlets = this.get('outlets');

            const newClassroom = this.store.createRecord('classrooms', { name: name, facility: facility, capacity: capacity, outlets: outlets });
            newClassroom.save();

            this.set('responseMessage', `Thank you! We have just saved your new classroom: ${this.get('name')}`);
            this.setProperties({name: '', facility: '', capacity: '', outlets: ''});
            this.toggleProperty('isShowingDialog');
          }
    }
});