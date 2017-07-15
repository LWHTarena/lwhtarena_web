"use strict";
var core_1 = require('@angular/core');
exports.flyIn = core_1.trigger('flyIn', [
    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
    core_1.transition('void => *', [
        core_1.animate(300, core_1.keyframes([
            core_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            core_1.style({ opacity: 1, transform: 'translateX(25px)', offset: 0.3 }),
            core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    core_1.transition('* => void', [
        core_1.animate(300, core_1.keyframes([
            core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            core_1.style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.7 }),
            core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
    ])
]);
//# sourceMappingURL=fly-in.js.map