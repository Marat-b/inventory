// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
System.register(["@angular/core", "@angular/common/http", "rxjs", "rxjs/operators"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, rxjs_1, operators_1, EndpointFactory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
            }
        ],
        execute: function () {// =============================
            // Email: info@ebenmonney.com
            // www.ebenmonney.com/templates
            // =============================
            EndpointFactory = /** @class */ (function () {
                //private isRefreshingLogin: boolean;
                //private _authService: AuthService;
                /*private get authService() {
                    if (!this._authService) {
                        this._authService = this.injector.get(AuthService);
                    }
            
                    return this._authService;
                }*/
                function EndpointFactory(http, /*protected configurations: ConfigurationService,*/ injector) {
                    this.http = http;
                    this.injector = injector;
                }
                EndpointFactory_1 = EndpointFactory;
                /*
                    getLoginEndpoint<T>(userName: string, password: string): Observable<T> {
                
                        let header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
                
                        let params = new HttpParams()
                            //.append('username', userName)
                            //.append('password', password)
                            .append('client_id', 'inventory')
                            //.append('grant_type', 'password')
                            //.append('scope', 'openid email phone profile offline_access roles quickapp_api'            );
                
                        return this.http.post<T>(this.loginUrl, params, { headers: header });
                    }
                */
                /*    getRefreshLoginEndpoint<T>(): Observable<T> {
                        let header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
                
                        let params = new HttpParams()
                            .append('refresh_token', this.authService.refreshToken)
                            .append('client_id', 'inventory_spa')
                            .append('grant_type', 'refresh_token');
                
                        return this.http.post<T>(this.loginUrl, params, { headers: header }).pipe<T>(
                            catchError(error => {
                                return this.handleError(error, () => this.getRefreshLoginEndpoint());
                            }));
                    }*/
                EndpointFactory.prototype.getRequestHeaders = function () {
                    var headers = new http_1.HttpHeaders({
                        //'Authorization': 'Bearer ' + this.authService.accessToken,
                        'Content-Type': 'application/json',
                        'Accept': "application/vnd.iman.v" + EndpointFactory_1.apiVersion + "+json, application/json, text/plain, */*"
                        //'App-Version': ConfigurationService.appVersion
                    });
                    return { headers: headers };
                };
                EndpointFactory.prototype.handleError = function (error, continuation) {
                    if (error.status == 401) {
                        //if (this.isRefreshingLogin) {
                        return this.pauseTask(continuation);
                        //}
                        //this.isRefreshingLogin = true;
                        /*return this.authService.refreshLogin().pipe(
                            mergeMap(data => {
                                this.isRefreshingLogin = false;
                                this.resumeTasks(true);
            
                                return continuation();
                            }),
                            catchError(refreshLoginError => {
                                this.isRefreshingLogin = false;
                                this.resumeTasks(false);
            
                                /!*if (refreshLoginError.status == 401 || (refreshLoginError.url && refreshLoginError.url.toLowerCase().includes(this.loginUrl.toLowerCase()))) {
                                    this.authService.reLogin();
                                    return throwError('session expired');
                                }
                                else {
                                    return throwError(refreshLoginError || 'server error');
                                }*!/
                            }));*/
                    }
                    /* if (error.url && error.url.toLowerCase().includes(this.loginUrl.toLowerCase())) {
                        // this.authService.reLogin();
             
                         return throwError((error.error && error.error.error_description) ? `session expired (${error.error.error_description})` : 'session expired');
                     }
                     else {
                         return throwError(error);
                     }*/
                };
                EndpointFactory.prototype.pauseTask = function (continuation) {
                    if (!this.taskPauser) {
                        this.taskPauser = new rxjs_1.Subject();
                    }
                    return this.taskPauser.pipe(operators_1.switchMap(function (continueOp) {
                        return continueOp ? continuation() : rxjs_1.throwError('session expired');
                    }));
                };
                EndpointFactory.prototype.resumeTasks = function (continueOp) {
                    var _this = this;
                    setTimeout(function () {
                        if (_this.taskPauser) {
                            _this.taskPauser.next(continueOp);
                            _this.taskPauser.complete();
                            _this.taskPauser = null;
                        }
                    });
                };
                var EndpointFactory_1;
                EndpointFactory.apiVersion = "1";
                EndpointFactory = EndpointFactory_1 = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.HttpClient, core_1.Injector])
                ], EndpointFactory);
                return EndpointFactory;
            }());
            exports_1("EndpointFactory", EndpointFactory);
        }
    };
});
