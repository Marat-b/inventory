System.register(["@angular/core/testing", "./list-ipaddress.component"], function (exports_1, context_1) {
    "use strict";
    var testing_1, list_ipaddress_component_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (list_ipaddress_component_1_1) {
                list_ipaddress_component_1 = list_ipaddress_component_1_1;
            }
        ],
        execute: function () {
            describe('ListIpaddressComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [list_ipaddress_component_1.ListIpaddressComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(list_ipaddress_component_1.ListIpaddressComponent);
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
