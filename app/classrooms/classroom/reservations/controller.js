import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dialog: service(),
    showDialog: false,

    actions: {
        openDialog() {
            this.get('dialog').openReservations();
        },
        toggleDialog() {
            this.toggleProperty('showDialog');
        }
    }
});
