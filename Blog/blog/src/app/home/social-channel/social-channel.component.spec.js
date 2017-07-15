"use strict";
var testing_1 = require("@angular/core/testing");
var social_channel_component_1 = require("./social-channel.component");
describe('SocialChannelComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [social_channel_component_1.SocialChannelComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(social_channel_component_1.SocialChannelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=social-channel.component.spec.js.map