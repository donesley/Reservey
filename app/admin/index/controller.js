import { empty } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
    name: '',
    onDialogEnabled: false,
    isEditable: false,
    isShowingDialog: false,
    test: false,

    isAddButtonDisabled: empty('name'),

    actions: {
        onToggleDialog() {
            this.toggleProperty('isShowingDialog');
        },
        toggleEditableInputs() {
            this.toggleProperty('isEditable');
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