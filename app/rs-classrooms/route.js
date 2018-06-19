import Route from '@ember/routing/route';
import Object, { computed } from '@ember/object';

let Classroom = Object.extend({
	name: '',
	capacity: 0,
	facility: '',
	outlets: 0,

	slug: computed('name', function() {
		return this.get('name').dasherize();
	})
})

let Reservation = Object.extend({
	classroom: '',
	timebox: '',
	attendants: ''
})

export default Route.extend({
	// model: function() {
	// 	let one = Reservation.create({ classroom: 'first Reservation', timebox: '', attendants: ''});
    //     let two = Reservation.create({ classroom: 'second Reservation', timebox: '', attendants: '' });
    //     let three = Reservation.create({ classroom: 'third Reservation', timebox: '', attendants: '' });


	// 	let H1 = Classroom.create({
	// 		name: 'H1.2.1',
	// 		capacity: 28,
	// 		facility: 'None',
	// 		outlets: 26,
	// 		Reservations: [one]
	// 	});
	// 	let H2 = Classroom.create({
	// 		name: 'WD.02.106',
	// 		capacity: 29,
	// 		facility: 'TV',
	// 		outlets: 27,
	// 		Reservations: [two]
	// 	});
	// 	let H3 = Classroom.create({
	// 		name: 'H4.2.1',
	// 		capacity: 30,
	// 		facility: 'Whiteboard',
	// 		outlets: 28,
	// 		Reservations: [three]
	// 	});

	// 	return [H1, H2, H3];

    // }
});