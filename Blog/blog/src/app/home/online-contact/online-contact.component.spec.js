"use strict";
var testing_1 = require("@angular/core/testing");
var online_contact_component_1 = require("./online-contact.component");
describe('OnlineContactComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [online_contact_component_1.OnlineContactComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(online_contact_component_1.OnlineContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=online-contact.component.spec.js.map