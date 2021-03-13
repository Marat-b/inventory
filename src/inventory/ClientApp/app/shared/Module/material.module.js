System.register(["@angular/core", "@angular/material"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, material_1, InventoryMaterialModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            }
        ],
        execute: function () {
            InventoryMaterialModule = /** @class */ (function () {
                function InventoryMaterialModule() {
                }
                InventoryMaterialModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            material_1.MatAutocompleteModule,
                            material_1.MatButtonModule,
                            material_1.MatButtonToggleModule,
                            material_1.MatCardModule,
                            material_1.MatCheckboxModule,
                            material_1.MatChipsModule,
                            material_1.MatDatepickerModule,
                            material_1.MatDialogModule,
                            material_1.MatExpansionModule,
                            material_1.MatGridListModule,
                            material_1.MatIconModule,
                            material_1.MatInputModule,
                            material_1.MatListModule,
                            material_1.MatMenuModule,
                            material_1.MatNativeDateModule,
                            material_1.MatPaginatorModule,
                            material_1.MatProgressBarModule,
                            material_1.MatProgressSpinnerModule,
                            material_1.MatRadioModule,
                            material_1.MatRippleModule,
                            material_1.MatSelectModule,
                            material_1.MatSidenavModule,
                            material_1.MatSliderModule,
                            material_1.MatSlideToggleModule,
                            material_1.MatSnackBarModule,
                            material_1.MatSortModule,
                            material_1.MatTableModule,
                            material_1.MatTabsModule,
                            material_1.MatToolbarModule,
                            material_1.MatTooltipModule,
                            material_1.MatStepperModule
                        ],
                        exports: [
                            material_1.MatAutocompleteModule,
                            material_1.MatButtonModule,
                            material_1.MatButtonToggleModule,
                            material_1.MatCardModule,
                            material_1.MatCheckboxModule,
                            material_1.MatChipsModule,
                            material_1.MatDatepickerModule,
                            material_1.MatDialogModule,
                            material_1.MatExpansionModule,
                            material_1.MatGridListModule,
                            material_1.MatIconModule,
                            material_1.MatInputModule,
                            material_1.MatListModule,
                            material_1.MatMenuModule,
                            material_1.MatNativeDateModule,
                            material_1.MatPaginatorModule,
                            material_1.MatProgressBarModule,
                            material_1.MatProgressSpinnerModule,
                            material_1.MatRadioModule,
                            material_1.MatRippleModule,
                            material_1.MatSelectModule,
                            material_1.MatSidenavModule,
                            material_1.MatSliderModule,
                            material_1.MatSlideToggleModule,
                            material_1.MatSnackBarModule,
                            material_1.MatSortModule,
                            material_1.MatTableModule,
                            material_1.MatTabsModule,
                            material_1.MatToolbarModule,
                            material_1.MatTooltipModule,
                            material_1.MatStepperModule
                        ],
                    })
                ], InventoryMaterialModule);
                return InventoryMaterialModule;
            }());
            exports_1("InventoryMaterialModule", InventoryMaterialModule);
        }
    };
});
