import Service from '@ember/service';

export default Service.extend({
    state: false,
    stateReservations: false,

    open() {
        this.set('state', true);
    },

    close() {
        this.set('state', false);
    },
    openReservations() {
        this.set('state', true);
    },

    closeReservations() {
        this.set('state', false);
    },
});
