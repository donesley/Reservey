import Object from '@ember/object';
import Route from '@ember/routing/route';

var Reservation = Object.extend({
    name: '',
});

export default Route.extend({
    model: function() {
        var one = Reservation.create({ classroom: 'first Reservation Overview' });
        var two = Reservation.create({ classroom: 'second Reservation Overview' });
        var three = Reservation.create({ classroom: 'third Reservation Overview' });

        return [one, two, three];
    }
});