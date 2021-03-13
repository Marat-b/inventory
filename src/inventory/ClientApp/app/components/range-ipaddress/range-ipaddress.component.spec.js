System.register(["@angular/core/testing", "./range-ipaddress.component"], function (exports_1, context_1) {
    "use strict";
    var testing_1, range_ipaddress_component_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (range_ipaddress_component_1_1) {
                range_ipaddress_component_1 = range_ipaddress_component_1_1;
            }
        ],
        execute: function () {
            describe('RangeIpaddressComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [range_ipaddress_component_1.RangeIpaddressComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(range_ipaddress_component_1.RangeIpaddressComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should create', function () {
                    expect(component).toBeTruthy();
                });
            });
        }
    };
});
