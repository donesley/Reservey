import { empty } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
    onDialogEnabled: false,
    isEditable: false,
    isShowingDialog: false,

    isAddButtonDisabled: empty('reporter'),

    actions: {
        onToggleAdd() {
            this.toggleProperty('showAddDialog');
        },
        onToggleEdit() {
            this.toggleProperty('showEditDialog');
        },
        toggleEditableInputs() {
            this.toggleProperty('isEditable');
        },

        saveIssue() {
            const reporter = this.get('reporter');
            const classroom = this.get('classroom');
            const issue = this.get('issue');
            const status = this.get('status');

            const newIssue = this.store.createRecord('mallfunctions', { reporter: reporter, classroom: classroom, issue: issue, status: status });
            newIssue.save();

            this.set('responseMessage', `Thank you! We have just saved your new classroom: ${this.get('name')}`);
            this.setProperties({reporter: '', classroom: '', issue: '', status: ''});
            this.toggleProperty('showAddDialog');
        }
    }
});