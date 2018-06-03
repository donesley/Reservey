import Route from '@ember/routing/route';
import Classroom from '../classrooms/model';
import Reservations from '../reservations/model';
import { inject as service } from '@ember/service';

export default Route.extend({
    dialog: service('dialog'),

    model: function() {
        var one = Reservations.create({
            attendants: '0995652, 0896685, 0901562',
            classroom: 'h1',
            timebox: 1
        });
        var two = Reservations.create({
            attendants: '0655356, 0988658, 0478558',
            classroom: 'h3',
            timebox: 4
        });
        var three = Reservations.create({
            attendants: '0788956, 0655452',
            classroom: 'h2',
            timebox: 2
        });


        let H1 = Classroom.create({
			name: 'H1.2.1',
			capacity: 28,
			facility: 'None',
			outlets: 26,
			reservations: [one]
		});
		let H2 = Classroom.create({
			name: 'WD.02.106',
			capacity: 29,
			facility: 'TV',
			outlets: 27,
			reservations: [two]
		});
		let H3 = Classroom.create({
			name: 'H4.2.1',
			capacity: 30,
			facility: 'Whiteboard',
			outlets: 28,
			reservations: [three]
		});

		return [H1, H2, H3];
    },

    actions: {
        createClassroom: function() {
            var name = this.get('controller').get('name');
            var facility = this.get('controller').get('facility');
            var capacity = this.get('controller').get('capacity');
            var outlets = this.get('controller').get('outlets');
            var classroom = Classroom.create({ name: name, capacity: capacity, facility: facility, outlets: outlets });
            this.modelFor('classrooms').pushObject(classroom);
            this.get('controller').set('name', '');
            this.get('dialog').close();
        }
    }
});