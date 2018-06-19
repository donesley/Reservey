import Object from '@ember/object';
import Route from '@ember/routing/route';

var SidebarItem = Object.extend({
    label: '',
    to: '',
    icon: ''
});

export default Route.extend({
    beforeModel: function() {
        // this.transitionTo('classrooms');
    },

    model: function() {
        var classrooms = SidebarItem.create({
            label: 'Agenda',
            to: 'rs-agenda',
            icon: 'dashboard'
        });
        var agenda = SidebarItem.create({
            label: 'Overview',
            to: 'classrooms',
            icon: 'view_agenda'
        });
        var reservations = SidebarItem.create({
            label: 'Service Panel',
            to: 'rs-service',
            icon: 'record_voice_over'
        });
        var reservationsOverview = SidebarItem.create({
            label: 'Admin Panel',
            to: 'admin',
            icon: 'fingerprint'
        });

        return [classrooms, agenda, reservations, reservationsOverview];
    }
});
