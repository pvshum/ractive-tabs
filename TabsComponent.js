"use-strict";
(function (Ractive) {

    var TabsComponent = Ractive.extend({
        template: '{{>content}}',
        components: {
            TabsLink: Ractive.extend({template: '<a href="#" on-click="clicked">{{>content}}</a>'}),
            TabsPane: Ractive.extend({template: '{{#if active}}{{>content}}{{/if}}'})
        },
        init: function () {
            this.on('TabsLink.clicked', function (event) {
                this.findAllComponents('TabsPane')
                    .map(function (pane) {
                        pane.set('active', (pane.data.id === event.context.target));
                    });
            });
        }
    });

    new Ractive({
        el: '#body',
        template: '#Tabs',
        components: {
            TabsComponent: TabsComponent
        }
    });

})(Ractive);