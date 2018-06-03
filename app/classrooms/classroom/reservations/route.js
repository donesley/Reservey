import Route from '@ember/routing/route';
import Reservation from 'reservey/reservations/model';
import { inject as service } from '@ember/service';

export default Route.extend({
    dialog: service(),

    model: function() {
        return this.modelFor('classrooms.classroom');
    },
    actions: {
        createReservation: function () {
            var controller = this.get('controller');
            var classroom = this.modelFor('classrooms.classroom');
            var attendants = controller.get('attendants');
            var reservation = Reservation.create({ attendants: attendants, classroom: classroom });
            classroom.get('reservations').pushObject(reservation);
            controller.set('title', '');
        }
    }
});