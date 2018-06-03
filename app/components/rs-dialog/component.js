import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
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
