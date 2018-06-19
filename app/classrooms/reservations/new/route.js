import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('reservations');
  },

  actions: {

    saveReservation(newReservation) {
        newReservation.save().then(() => this.transitionTo('classrooms'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});