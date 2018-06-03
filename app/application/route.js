import Object from '@ember/object';
import Route from '@ember/routing/route';

var SidebarItem = Object.extend({
    label: '',
    to: '',
    icon: ''
});

export default Route.extend({
    model: function() {
        var classrooms = SidebarItem.create({
            label: 'Overview',
            to: 'rs-agenda',
            icon: 'dashboard'
        });
        var agenda = SidebarItem.create({
            label: 'Agenda',
            to: 'classrooms',
            icon: 'view_agenda'
        });
        var reservations = SidebarItem.create({
            label: 'Agenda',
            to: 'classrooms',
            icon: 'view_agenda'
        });
        var reservationsOverview = SidebarItem.create({
            label: 'Reservations',
            to: 'rs-reservations-overview',
            icon: 'fingerprint'
        });

        return [classrooms, agenda, reservations, reservationsOverview];
    }
});
