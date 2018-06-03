import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dialog: service(),

    actions: {
        openDialog() {
            this.get('dialog').open();
        },
        closeDialog() {
            this.get('dialog').close();
        }
    }
});
