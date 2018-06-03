import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    name: '',
    dialog: service('dialog'),

    isAddButtonDisabled: computed('name', function() {
        return isEmpty(this.get('name'));
    }),

    actions: {
        openDialog() {
            this.get('dialog').open();
        },
        closeDialog() {
            this.get('dialog').close();
        }
    }
});