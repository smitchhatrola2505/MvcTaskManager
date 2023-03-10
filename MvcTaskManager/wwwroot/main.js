"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["main"],{

/***/ 556:
/*!***********************************************!*\
  !*** ./src/app/Directives/alert.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDirective": () => (/* binding */ AlertDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AlertDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.error = null;
        this.title = null;
    }
    ngOnInit() {
        /* div */
        this.divElement = this.renderer2.createElement("div"); //<div></div>
        this.renderer2.setAttribute(this.divElement, "role", "alert"); //<div role="alert"> </div>
        this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");
        //<div role="alert" class="alert alert-danger fade show"> </div>
        this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");
        //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> </div>
        /* span */
        this.spanElement = this.renderer2.createElement("span");
        this.renderer2.setAttribute(this.spanElement, "class", "message");
        //<span class="message"></span>
        /* spanText */
        this.spanText = this.renderer2.createText(this.error);
        this.renderer2.appendChild(this.spanElement, this.spanText);
        //<span class="message">${this.error}</span>
        this.renderer2.appendChild(this.divElement, this.spanElement);
        //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> <span class="message">${this.error}</span> </div>
        this.elementRef.nativeElement.appendChild(this.divElement);
        this.title = "Please try again!";
    }
    onMouseEnter(event) {
        //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
        this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)");
    }
    onMouseLeave() {
        //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
        this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
    }
}
AlertDirective.??fac = function AlertDirective_Factory(t) { return new (t || AlertDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
AlertDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: AlertDirective, selectors: [["", "appAlert", ""]], hostVars: 1, hostBindings: function AlertDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mouseenter", function AlertDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); })("mouseleave", function AlertDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????hostProperty"]("title", ctx.title);
    } }, inputs: { error: "error" } });


/***/ }),

/***/ 717:
/*!**************************************************************************!*\
  !*** ./src/app/Directives/client-location-status-validator.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLocationStatusValidatorDirective": () => (/* binding */ ClientLocationStatusValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class ClientLocationStatusValidatorDirective {
    constructor() {
    }
    validate(control) {
        let isValid = true;
        if (control.value.ClientLocation == 1 && control.value.Status == "Support") {
            isValid = false; //indicates invalid
        }
        if (isValid == true) {
            return null; //valid
        }
        else {
            return { clientLocationStatus: { valid: false } }; //invalid
        }
    }
}
ClientLocationStatusValidatorDirective.??fac = function ClientLocationStatusValidatorDirective_Factory(t) { return new (t || ClientLocationStatusValidatorDirective)(); };
ClientLocationStatusValidatorDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: ClientLocationStatusValidatorDirective, selectors: [["", "appClientLocationStatusValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS, useExisting: ClientLocationStatusValidatorDirective, multi: true }])] });


/***/ }),

/***/ 709:
/*!********************************************************************!*\
  !*** ./src/app/Directives/project-idunique-validator.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectIDUniqueValidatorDirective": () => (/* binding */ ProjectIDUniqueValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/projects.service */ 659);




class ProjectIDUniqueValidatorDirective {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    validate(control) {
        return this.projectsService.getProjectByProjectID(control.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((existingProject) => {
            if (existingProject != null) {
                return { uniqueProjectID: { valid: false } };
            }
            else {
                return null;
            }
        }));
    }
}
ProjectIDUniqueValidatorDirective.??fac = function ProjectIDUniqueValidatorDirective_Factory(t) { return new (t || ProjectIDUniqueValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_Services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
ProjectIDUniqueValidatorDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({ type: ProjectIDUniqueValidatorDirective, selectors: [["", "appProjectIDUniqueValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????ProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_ASYNC_VALIDATORS, useExisting: ProjectIDUniqueValidatorDirective, multi: true }])] });


/***/ }),

/***/ 723:
/*!**************************************************!*\
  !*** ./src/app/Directives/repeater.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeaterDirective": () => (/* binding */ RepeaterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class RepeaterDirective {
    constructor(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.n = 0;
        this.viewContainerRef.clear();
    }
    ngOnInit() {
        for (let i = 0; i < this.n; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i });
        }
    }
}
RepeaterDirective.??fac = function RepeaterDirective_Factory(t) { return new (t || RepeaterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
RepeaterDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: RepeaterDirective, selectors: [["", "appRepeater", ""]], inputs: { n: ["appRepeater", "n"] } });


/***/ }),

/***/ 235:
/*!*************************************************************!*\
  !*** ./src/app/Directives/team-size-validator.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamSizeValidatorDirective": () => (/* binding */ TeamSizeValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class TeamSizeValidatorDirective {
    constructor() {
        this.n = 0;
    }
    validate(control) {
        let currentValue = control.value;
        let isValid = currentValue % this.n == 0;
        if (isValid) {
            return null; //valid
        }
        else {
            return { divisible: { valid: false } }; //indicates invalid
        }
    }
}
TeamSizeValidatorDirective.??fac = function TeamSizeValidatorDirective_Factory(t) { return new (t || TeamSizeValidatorDirective)(); };
TeamSizeValidatorDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: TeamSizeValidatorDirective, selectors: [["", "appTeamSizeValidator", ""]], inputs: { n: ["appTeamSizeValidator", "n"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS, useExisting: TeamSizeValidatorDirective, multi: true }])] });


/***/ }),

/***/ 628:
/*!********************************************************!*\
  !*** ./src/app/Services/can-activate-guard.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanActivateGuardService": () => (/* binding */ CanActivateGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 980);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);




class CanActivateGuardService {
    constructor(loginService, router, jwtHelperService) {
        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
    }
    canActivate(route) {
        //console.log(this.router.url);
        var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.loginService.isAuthenticated() && this.jwtHelperService.decodeToken(token).role == route.data['expectedRole']) {
            return true; //the user can navigate to the particular route
        }
        else {
            this.router.navigate(["login"]);
            return false; //the user can't navigate to the particular route
        }
    }
}
CanActivateGuardService.??fac = function CanActivateGuardService_Factory(t) { return new (t || CanActivateGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService)); };
CanActivateGuardService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: CanActivateGuardService, factory: CanActivateGuardService.??fac, providedIn: 'root' });


/***/ }),

/***/ 268:
/*!******************************************************!*\
  !*** ./src/app/Services/client-locations.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLocationsService": () => (/* binding */ ClientLocationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ClientLocationsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.urlPrefix = ""; //make this as empty ("") if you are using asp.net core [without CORS]
    }
    getClientLocations() {
        return this.httpClient.get(this.urlPrefix + "/api/clientlocations", { responseType: "json" });
    }
}
ClientLocationsService.??fac = function ClientLocationsService_Factory(t) { return new (t || ClientLocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ClientLocationsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ClientLocationsService, factory: ClientLocationsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 484:
/*!***********************************************!*\
  !*** ./src/app/Services/countries.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesService": () => (/* binding */ CountriesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class CountriesService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getCountries() {
        return this.httpclient.get("/api/countries", { responseType: "json" });
    }
}
CountriesService.??fac = function CountriesService_Factory(t) { return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CountriesService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CountriesService, factory: CountriesService.??fac, providedIn: 'root' });


/***/ }),

/***/ 177:
/*!********************************************************!*\
  !*** ./src/app/Services/custome-validatore.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomeValidatoreService": () => (/* binding */ CustomeValidatoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 980);



class CustomeValidatoreService {
    constructor(loginService) {
        this.loginService = loginService;
    }
    minimumAgeValidator(minAge) {
        return (control) => {
            if (!control.value)
                return null; //return, if the date of birth is null
            var today = new Date();
            var dateOfBirth = new Date(control.value);
            var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
            var diffYears = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;
            if (diffYears >= minAge)
                return null; //valid
            else
                return { minAge: { valid: false } }; //invalid
        };
    }
    compareValidator(controlToValidate, controlToCompare) {
        return (formGroup) => {
            if (!formGroup.get(controlToValidate).value)
                return null; //return, if the confirm password is null
            if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value)
                return null; //valid
            else {
                formGroup.get(controlToValidate).setErrors({ compareValidator: { valid: false } });
                return { compareValidator: { valid: false } }; //invalid
            }
        };
    }
    DuplicateEmailValidator() {
        return (control) => {
            return this.loginService.getUserByEmail(control.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((existingUser) => {
                if (existingUser != null) {
                    return { uniqueEmail: { valid: false } }; //invalid
                }
                else {
                    return null;
                }
            }));
        };
    }
}
CustomeValidatoreService.??fac = function CustomeValidatoreService_Factory(t) { return new (t || CustomeValidatoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
CustomeValidatoreService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: CustomeValidatoreService, factory: CustomeValidatoreService.??fac, providedIn: 'root' });


/***/ }),

/***/ 808:
/*!***********************************************!*\
  !*** ./src/app/Services/dashboard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DashboardService {
    getTeamMembersSummary() {
        var TeamMembersSummary = [
            { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
            { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
            { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
            { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
        ];
        return TeamMembersSummary;
    }
}
DashboardService.??fac = function DashboardService_Factory(t) { return new (t || DashboardService)(); };
DashboardService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DashboardService, factory: DashboardService.??fac });


/***/ }),

/***/ 13:
/*!*****************************************************!*\
  !*** ./src/app/Services/jwt-interceptor.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptorService": () => (/* binding */ JwtInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class JwtInterceptorService {
    constructor() {
    }
    intercept(request, next) {
        var currentUser = { token: "" };
        if (sessionStorage['currentUser'] != null) {
            currentUser = JSON.parse(sessionStorage['currentUser']);
        }
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + currentUser.token
            }
        });
        return next.handle(request);
    }
}
JwtInterceptorService.??fac = function JwtInterceptorService_Factory(t) { return new (t || JwtInterceptorService)(); };
JwtInterceptorService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: JwtInterceptorService, factory: JwtInterceptorService.??fac, providedIn: 'root' });


/***/ }),

/***/ 305:
/*!*******************************************************************!*\
  !*** ./src/app/Services/jwt-un-authorized-interceptor.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtUnAuthorizedInterceptorService": () => (/* binding */ JwtUnAuthorizedInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class JwtUnAuthorizedInterceptorService {
    constructor() {
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                //do something with response
            }
        }, (error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                if (error.status == 401) {
                    console.log(error);
                    alert("401 UnAuthorized");
                }
            }
        }));
    }
}
JwtUnAuthorizedInterceptorService.??fac = function JwtUnAuthorizedInterceptorService_Factory(t) { return new (t || JwtUnAuthorizedInterceptorService)(); };
JwtUnAuthorizedInterceptorService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: JwtUnAuthorizedInterceptorService, factory: JwtUnAuthorizedInterceptorService.??fac, providedIn: 'root' });


/***/ }),

/***/ 980:
/*!*******************************************!*\
  !*** ./src/app/Services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);





class LoginService {
    constructor(httpBackend, jwtHelperService) {
        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.httpClient = null;
        this.urlPrefix = ""; //make this as empty ("") if you are using asp.net core [without CORS]
        this.currentUserName = null;
    }
    Login(loginViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.post(this.urlPrefix + "/authenticate", loginViewModel, { responseType: "json", observe: "response" })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage['currentUser'] = JSON.stringify(response.body);
                sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    Register(SignUpViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.post("/register", SignUpViewModel, {
            responseType: "json", observe: "response"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage['currentUser'] = JSON.stringify(response.body);
                sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    getUserByEmail(Email) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.get("/api/getUserByEmail/" + Email, { responseType: "json" });
    }
    Logout() {
        sessionStorage.removeItem("currentUser");
        this.currentUserName = null;
    }
    isAuthenticated() {
        var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.jwtHelperService.isTokenExpired()) {
            return false; //token is not valid
        }
        else {
            return true; //token is valid
        }
    }
}
LoginService.??fac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService)); };
LoginService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: LoginService, factory: LoginService.??fac, providedIn: 'root' });


/***/ }),

/***/ 659:
/*!**********************************************!*\
  !*** ./src/app/Services/projects.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ProjectsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.urlPrefix = ""; //make this as empty ("") if you are using asp.net core [without CORS]
        this.MySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    toggleDetails() {
        this.MySubject.next(!this.MySubject.value);
    }
    getAllProjects() {
        return this.httpClient.get(this.urlPrefix + "/api/projects", { responseType: "json" })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            for (let i = 0; i < data.length; i++) {
                //data[i].teamSize = data[i].teamSize * 100;
            }
            return data;
        }));
    }
    getProjectByProjectID(ProjectID) {
        return this.httpClient.get(this.urlPrefix + "/api/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
    }
    insertProject(newProject) {
        debugger;
        var requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
        return this.httpClient.post("/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
    }
    updateProject(existingProject) {
        return this.httpClient.put(this.urlPrefix + "/api/projects", existingProject, { responseType: "json" });
    }
    deleteProject(ProjectID) {
        return this.httpClient.delete(this.urlPrefix + "/api/projects?ProjectID=" + ProjectID);
    }
    SearchProjects(searchBy, searchText) {
        return this.httpClient.get(this.urlPrefix + "/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
    }
}
ProjectsService.??fac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProjectsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ProjectsService, factory: ProjectsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 769:
/*!***************************************************!*\
  !*** ./src/app/Services/router-logger.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterLoggerService": () => (/* binding */ RouterLoggerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class RouterLoggerService {
    constructor(httpBackend) {
        this.httpBackend = httpBackend;
        this.httpClient = null;
        this.currentUserName = null;
        this.urlPrefix = '';
    }
    log(logMsg) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.post(this.urlPrefix + "/api/routerlogger", { log: logMsg });
    }
}
RouterLoggerService.??fac = function RouterLoggerService_Factory(t) { return new (t || RouterLoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend)); };
RouterLoggerService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RouterLoggerService, factory: RouterLoggerService.??fac, providedIn: 'root' });


/***/ }),

/***/ 2455:
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\nAbout Works!!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 496:
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-routing/admin-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_Services_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/can-activate-guard.service */ 628);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/dashboard.component */ 6662);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/projects.component */ 1832);
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-details/project-details.component */ 942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: "admin", canActivate: [src_app_Services_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_0__.CanActivateGuardService], data: { expectedRole: "Admin" }, children: [
            { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, },
            { path: "projects", component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent },
            { path: "projects/view/:projectid", component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__.ProjectDetailsComponent },
        ]
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.??fac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 6662);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 1363);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2455);
/* harmony import */ var _Services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/dashboard.service */ 808);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 1832);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Directives/team-size-validator.directive */ 235);
/* harmony import */ var _Directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Directives/client-location-status-validator.directive */ 717);
/* harmony import */ var _Directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Directives/project-idunique-validator.directive */ 709);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ 7405);
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-box-printer/check-box-printer.component */ 2643);
/* harmony import */ var _number_to_word_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../number-to-word.pipe */ 2764);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../filter.pipe */ 4211);
/* harmony import */ var _paging_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../paging.pipe */ 8374);
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-details/project-details.component */ 942);
/* harmony import */ var _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-routing/admin-routing.module */ 496);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);



















class AdminModule {
}
AdminModule.??fac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineNgModule"]({ type: AdminModule });
AdminModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineInjector"]({ providers: [_Services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__.AdminRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["????setNgModuleScope"](AdminModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__.MyProfileComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent,
        _Directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__.TeamSizeValidatorDirective,
        _Directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ClientLocationStatusValidatorDirective,
        _Directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ProjectIDUniqueValidatorDirective,
        _project_project_component__WEBPACK_IMPORTED_MODULE_8__.ProjectComponent,
        _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__.CheckBoxPrinterComponent,
        _number_to_word_pipe__WEBPACK_IMPORTED_MODULE_10__.NumberToWordPipe,
        _filter_pipe__WEBPACK_IMPORTED_MODULE_11__.FilterPipe,
        _paging_pipe__WEBPACK_IMPORTED_MODULE_12__.PagingPipe,
        _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_13__.ProjectDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__.AdminRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__.MyProfileComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _Directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ClientLocationStatusValidatorDirective, _Directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ProjectIDUniqueValidatorDirective] }); })();


/***/ }),

/***/ 2643:
/*!************************************************************************!*\
  !*** ./src/app/admin/check-box-printer/check-box-printer.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBoxPrinterComponent": () => (/* binding */ CheckBoxPrinterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class CheckBoxPrinterComponent {
    constructor() {
        this.isChecked = false;
    }
    ngOnInit() {
    }
    check() {
        this.isChecked = true;
    }
    unCheck() {
        this.isChecked = false;
    }
}
CheckBoxPrinterComponent.??fac = function CheckBoxPrinterComponent_Factory(t) { return new (t || CheckBoxPrinterComponent)(); };
CheckBoxPrinterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CheckBoxPrinterComponent, selectors: [["app-check-box-printer"]], decls: 2, vars: 1, consts: [["type", "checkbox", "value", "true", "name", "isChecked", "id", "isChecked", 3, "ngModel", "ngModelChange"]], template: function CheckBoxPrinterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CheckBoxPrinterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.isChecked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3gtcHJpbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6662:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/dashboard.service */ 808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function DashboardComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const client_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, client_r5, 0, 10));
} }
function DashboardComponent_a_58_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardComponent_a_58_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r7.onProjectChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](project_r6);
} }
function DashboardComponent_a_64_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](year_r9);
} }
function DashboardComponent_a_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, DashboardComponent_a_64_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, DashboardComponent_a_64_span_3_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, DashboardComponent_a_64_span_4_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, DashboardComponent_a_64_span_5_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const year_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngSwitch", year_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngSwitchCase", "2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngSwitchCase", "2018");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngSwitchCase", "2017");
} }
function DashboardComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const teamMemberSumary_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](teamMemberSumary_r18.Region);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", teamMemberSumary_r18.TeamMembersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", teamMemberSumary_r18.TemporarilyUnavailableMembers, " ");
} }
function DashboardComponent_div_105_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div");
} }
function DashboardComponent_div_105_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const member_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("#", member_r27.ID, " ", member_r27.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](member_r27.Status);
} }
function DashboardComponent_div_105_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, DashboardComponent_div_105_ng_template_8_div_0_Template, 5, 3, "div", 38);
} if (rf & 2) {
    const teamMembersGroup_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", teamMembersGroup_r19.Members);
} }
function DashboardComponent_div_105_ng_template_10_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const member_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](member_r30.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("color", member_r30.Status == "Busy" ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](member_r30.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](member_r30.Status);
} }
function DashboardComponent_div_105_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, DashboardComponent_div_105_ng_template_10_tr_10_Template, 7, 5, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const teamMembersGroup_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", teamMembersGroup_r19.Members);
} }
function DashboardComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h2", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, DashboardComponent_div_105_div_7_Template, 1, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, DashboardComponent_div_105_ng_template_8_Template, 1, 1, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, DashboardComponent_div_105_ng_template_10_Template, 11, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const teamMembersGroup_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](9);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("data-target", "#cardbody" + i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](teamMembersGroup_r19.Region);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("id", "cardbody" + i_r20)("ngClass", i_r20 == 0 ? "show" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r20 == 0)("ngIfThen", _r22)("ngIfElse", _r24);
} }
class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.Designation = "";
        this.Username = "";
        this.NoOfTeamMembers = 0;
        this.TotalCostOfAllProjects = 0;
        this.PendingTasks = 0;
        this.UpComingProjects = 0;
        this.ProjectCost = 0;
        this.CurrentExpenditure = 0;
        this.AvailableFunds = 0;
        this.ToDay = new Date();
        this.Clients = [];
        this.Projects = [];
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
    }
    ngOnInit() {
        this.Designation = 'Team Leader';
        this.Username = 'Scott Smith';
        this.NoOfTeamMembers = 67;
        this.TotalCostOfAllProjects = 240;
        this.PendingTasks = 15;
        this.UpComingProjects = 0.2;
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52536;
        this.ToDay = new Date();
        this.Clients = [
            'ABC Infotech Ltd.',
            'DEF Software Solutions',
            'GHI Industries',
        ];
        this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
        for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
        }
        this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
        this.TeamMembers = [
            {
                Region: 'East',
                Members: [
                    { ID: 1, Name: 'Ford', Status: 'Available' },
                    { ID: 2, Name: 'Miller', Status: 'Available' },
                    { ID: 3, Name: 'Jones', Status: 'Busy' },
                    { ID: 4, Name: 'James', Status: 'Busy' },
                ],
            },
            {
                Region: 'West',
                Members: [
                    { ID: 5, Name: 'Anna', Status: 'Available' },
                    { ID: 6, Name: 'Arun', Status: 'Available' },
                    { ID: 7, Name: 'Varun', Status: 'Busy' },
                    { ID: 8, Name: 'Jasmine', Status: 'Busy' },
                ],
            },
            {
                Region: 'South',
                Members: [
                    { ID: 9, Name: 'Krishna', Status: 'Available' },
                    { ID: 10, Name: 'Mohan', Status: 'Available' },
                    { ID: 11, Name: 'Raju', Status: 'Busy' },
                    { ID: 12, Name: 'Farooq', Status: 'Busy' },
                ],
            },
            {
                Region: 'North',
                Members: [
                    { ID: 13, Name: 'Jacob', Status: 'Available' },
                    { ID: 14, Name: 'Smith', Status: 'Available' },
                    { ID: 15, Name: 'Jones', Status: 'Busy' },
                    { ID: 16, Name: 'James', Status: 'Busy' },
                ],
            },
        ];
    }
    onProjectChange($event) {
        if ($event.target.innerHTML.trim() == 'Project A') {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
        }
        else if ($event.target.innerHTML.trim() == 'Project B') {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
        }
        else if ($event.target.innerHTML.trim() == 'Project C') {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
        }
        else if ($event.target.innerHTML.trim() == 'Project D') {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
        }
    }
}
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_Services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService)); };
DashboardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 106, vars: 33, consts: [[1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-3", "pb-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "text-white", "text-center", "mx-auto", "rounded", "pt-2", "pb-2", "font-weight-bold", 2, "background-color", "#a39e9e", "font-family", "'Arial Narrow Bold', sans-serif"], [1, "col-12", "text-center", "mt-2"], ["src", "assets/user.png", "width", "120px"], [1, "col-12", "text-center", "pt-2", "pb-2", "font-weight-bold", 2, "font-family", "Tahoma"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial"], [1, "col-12", "mb-3"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-secondary", "badge-pill", 2, "font-size", "13px"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial Narrow"], [1, "col-12"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "col-12", "pt-0", "pb-2", 2, "background-color", "#e9e6e6"], [1, "row", "mt-2"], [1, "col-6", "text-left"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", "onclick", "return false", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-6", "text-right"], ["class", "dropdown-item", "href", "#", 4, "ngFor", "ngForOf"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-auto", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "table", "table-borderless"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-1", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "col-lg-12", "pt-2"], ["id", "accordion1", 1, "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", "onclick", "return false", 1, "dropdown-item", 3, "click"], ["href", "#", 1, "dropdown-item"], [3, "ngSwitch"], ["style", "color:green", 4, "ngSwitchCase"], ["style", "color:blue", 4, "ngSwitchCase"], ["style", "color:red", 4, "ngSwitchCase"], ["style", "color:black", 4, "ngSwitchDefault"], [2, "color", "green"], [2, "color", "blue"], [2, "color", "red"], [2, "color", "black"], [1, "card"], ["id", "card1", 1, "card-header", "bg-secondary"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", 1, "btn", "btn-link", "text-white"], ["data-parent", "#accordion1", 1, "collapse", 3, "id", "ngClass"], [1, "card-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["firstTemplate", ""], ["secondTemplate", ""], [1, "card-header", "bg-primary", "text-white"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](17, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](22, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "TEAM SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " NO. OF TEAM MEMBERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, " TOTAL COST OF ALL PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, " PENDING TASKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, " UPCOMING PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](43, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "CLIENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, DashboardComponent_li_48_Template, 3, 5, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, " Project A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](58, DashboardComponent_a_58_Template, 2, 1, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, " 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](64, DashboardComponent_a_64_Template, 6, 4, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "PROJECT BRIEFING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Project Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](74, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Current Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](80, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Available Funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](86, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "TEAM MEMBERS SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Team Members Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Temporarily Unavailable Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](98, DashboardComponent_tr_98_Template, 8, 3, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "TEAM MEMBERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](105, DashboardComponent_div_105_Template, 12, 7, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](11, 15, ctx.ToDay, "d/M/y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](17, 18, ctx.Designation), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](22, 20, ctx.Username), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.NoOfTeamMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$ ", ctx.TotalCostOfAllProjects, " k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PendingTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](43, 22, ctx.UpComingProjects));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.Clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.Projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.Years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](74, 24, ctx.ProjectCost, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](80, 27, ctx.CurrentExpenditure, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](86, 30, ctx.AvailableFunds, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.TeamMembersSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.TeamMembers);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1363:
/*!**********************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyProfileComponent.??fac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
MyProfileComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " my-profile works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 942:
/*!********************************************************************!*\
  !*** ./src/app/admin/project-details/project-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsComponent": () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_Services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/projects.service */ 659);
/* harmony import */ var _number_to_word_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../number-to-word.pipe */ 2764);





const _c0 = function () { return ["/admin", "projects"]; };
class ProjectDetailsComponent {
    constructor(activatedRoute, projectsService) {
        this.activatedRoute = activatedRoute;
        this.projectsService = projectsService;
        this.routeParmsSubscription = null;
        this.project = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    }
    ngOnInit() {
        this.routeParmsSubscription = this.activatedRoute.params.subscribe((params) => {
            let pid = params["projectid"];
            this.projectsService.getProjectByProjectID(pid).subscribe((proj) => {
                this.project = proj;
            });
        });
    }
    ngOnDestroy() {
        this.routeParmsSubscription.unsubscribe();
    }
}
ProjectDetailsComponent.??fac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_Services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService)); };
ProjectDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 36, vars: 11, consts: [[1, "col-md-8", "col-lg-6", "col-xl-5", "mx-auto"], [1, "card", "card-primary", "mb-1"], [1, "card-header"], [1, "card-body"], [1, "table", "table-borderless", "table-sm"], [1, "text-info"], [1, "card-footer"], [1, "btn", "btn-info", 3, "routerLink"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](22, "numberToWord");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("#", ctx.project.projectID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.project.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("", ctx.project.teamSize, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](22, 8, ctx.project.teamSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.project.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](10, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_number_to_word_pipe__WEBPACK_IMPORTED_MODULE_2__.NumberToWordPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7405:
/*!****************************************************!*\
  !*** ./src/app/admin/project/project.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/projects.service */ 659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _number_to_word_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../number-to-word.pipe */ 2764);





const _c0 = ["selectionBox"];
const _c1 = ["tbl"];
const _c2 = function (a3) { return ["/admin", "projects", "view", a3]; };
const _c3 = ["*"];
class ProjectComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.i = 0;
        this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.hideDetails = false;
        this.tbl = null;
        this.selectionBoxes = null;
    }
    ngOnChanges(simpleChanges) {
        //console.info("--------------ngOnChanges called");
        for (let propName in simpleChanges) {
            let chng = simpleChanges[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
        if (simpleChanges["project"]) {
            //this.project.teamSize += 1;
        }
    }
    ngOnInit() {
        //console.info("--------------ngOnInit called");
        this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
            this.hideDetails = hide;
        });
    }
    ngDoCheck() {
        //console.info("--------------ngDoCheck called");
    }
    ngAfterContentInit() {
        //console.info("--------------ngAfterContentInit called");
        //console.log(this.selectionBoxes.toArray());
    }
    ngAfterContentChecked() {
        //console.info("--------------ngAfterContentChecked called");
    }
    ngAfterViewInit() {
        //console.info("--------------ngAfterViewInit called");
        //console.log(this.tbl);
    }
    ngAfterViewChecked() {
        //console.info("--------------ngAfterViewChecked called");
    }
    onEditClick(event, i) {
        this.editClick.emit({ event, i });
    }
    onDeleteClick(event, i) {
        this.deleteClick.emit({ event, i });
    }
    ngOnDestroy() {
        //console.info("--------------ngOnDestroy called");
        this.MySubscription.unsubscribe();
    }
    isAllCheckedChange(b) {
        let selectionBox = this.selectionBoxes.toArray();
        if (b) {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].check();
            }
        }
        else {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].unCheck();
            }
        }
    }
}
ProjectComponent.??fac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_Services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
ProjectComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], contentQueries: function ProjectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????contentQuery"](dirIndex, _c0, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.selectionBoxes = _t);
    } }, viewQuery: function ProjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.tbl = _t.first);
    } }, inputs: { project: ["currentProject", "project"], i: ["recordIndex", "i"] }, outputs: { editClick: "editClick", deleteClick: "deleteClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????NgOnChangesFeature"]], ngContentSelectors: _c3, decls: 45, vars: 13, consts: [[1, "card", "card-primary", "mb-1"], [1, "card-header"], [1, "row"], [1, "col-11"], [1, "col-1"], [1, "card-body"], [1, "table", "table-borderless", "table-sm", 3, "hidden"], ["tbl", ""], [1, "text-info"], [1, "card-footer"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](26, "numberToWord");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProjectComponent_Template_button_click_38_listener($event) { return ctx.onEditClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProjectComponent_Template_button_click_41_listener($event) { return ctx.onDeleteClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("#", ctx.project.projectID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("hidden", ctx.hideDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.project.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx.project.teamSize, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](26, 9, ctx.project.teamSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.project.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](11, _c2, ctx.project.projectID));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], pipes: [_number_to_word_pipe__WEBPACK_IMPORTED_MODULE_1__.NumberToWordPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1832:
/*!******************************************************!*\
  !*** ./src/app/admin/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../project */ 2513);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../filter.pipe */ 4211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ 659);
/* harmony import */ var _Services_client_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/client-locations.service */ 268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Directives/client-location-status-validator.directive */ 717);
/* harmony import */ var _Directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Directives/project-idunique-validator.directive */ 709);
/* harmony import */ var _Directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Directives/team-size-validator.directive */ 235);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project/project.component */ 7405);
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../check-box-printer/check-box-printer.component */ 2643);
/* harmony import */ var _paging_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../paging.pipe */ 8374);















const _c0 = ["newForm"];
const _c1 = ["editForm"];
const _c2 = ["prj"];
function ProjectsComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????element"](0, "i", 105);
} }
function ProjectsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](1, "app-project", 107, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("editClick", function ProjectsComponent_div_33_Template_app_project_editClick_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????restoreView"](_r50); const i_r46 = restoredCtx.index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????nextContext"](); return ctx_r49.onEditClick($event, i_r46); })("deleteClick", function ProjectsComponent_div_33_Template_app_project_deleteClick_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????restoreView"](_r50); const i_r46 = restoredCtx.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????nextContext"](); return ctx_r51.onDeleteClick($event, i_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????element"](3, "app-check-box-printer", null, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} if (rf & 2) {
    const project_r45 = ctx.$implicit;
    const i_r46 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("currentProject", project_r45)("recordIndex", i_r46);
} }
const _c3 = function (a0) { return { "active": a0 }; };
function ProjectsComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "li", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("click", function ProjectsComponent_li_39_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????restoreView"](_r54); const page_r52 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????nextContext"](); return ctx_r53.onPageIndexClicked(page_r52.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](1, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} if (rf & 2) {
    const page_r52 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction1"](2, _c3, page_r52.pageIndex == ctx_r2.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????textInterpolate1"](" ", page_r52.pageIndex + 1, " ");
} }
function ProjectsComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_option_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} if (rf & 2) {
    const clientLocation_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("value", clientLocation_r55.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????textInterpolate1"](" ", clientLocation_r55.clientLocationName, " ");
} }
function ProjectsComponent_span_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_option_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} if (rf & 2) {
    const clientLocation_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("value", clientLocation_r56.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????textInterpolate1"](" ", clientLocation_r56.clientLocationName, " ");
} }
function ProjectsComponent_span_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
function ProjectsComponent_span_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
} }
const _c4 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class ProjectsComponent {
    constructor(projectsService, clientLocationsService) {
        this.projectsService = projectsService;
        this.clientLocationsService = clientLocationsService;
        this.projects = [];
        this.clientLocations = [];
        this.showLoading = true;
        this.newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project();
        this.editProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project();
        this.editIndex = null;
        this.deleteProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project();
        this.deleteIndex = null;
        this.searchBy = "projectName";
        this.searchText = "";
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 3;
        this.newForm = null;
        this.editForm = null;
        this.isAllChecked = false;
        this.projs = null;
    }
    ngOnInit() {
        this.projectsService.getAllProjects().subscribe((response) => {
            this.projects = response;
            this.showLoading = false;
        });
        this.clientLocationsService.getClientLocations().subscribe((response) => {
            this.clientLocations = response;
        });
    }
    calculateNoOfPages() {
        let filterPipe = new src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe();
        var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
        var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
        this.pages = [];
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    isAllCheckedChange(event) {
        let proj = this.projs.toArray();
        for (let i = 0; i < proj.length; i++) {
            proj[i].isAllCheckedChange(this.isAllChecked);
        }
    }
    onNewClick(event) {
        this.newForm.resetForm();
    }
    onSaveClick() {
        if (this.newForm.valid) {
            this.newProject.clientLocation.clientLocationID = 0;
            this.projectsService.insertProject(this.newProject).subscribe((response) => {
                //Add Project to Grid
                var p = new _project__WEBPACK_IMPORTED_MODULE_0__.Project();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                this.projects.push(p);
                //Clear New Project Dialog - TextBoxes
                this.newProject.projectID = null;
                this.newProject.projectName = null;
                this.newProject.dateOfStart = null;
                this.newProject.teamSize = null;
                this.newProject.active = false;
                this.newProject.clientLocationID = null;
                this.newProject.status = null;
                jquery__WEBPACK_IMPORTED_MODULE_1__("newFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, index) {
        this.editForm.resetForm();
        setTimeout(() => {
            this.editProject.projectID = this.projects[index].projectID;
            this.editProject.projectName = this.projects[index].projectName;
            this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
            this.editProject.teamSize = this.projects[index].teamSize;
            this.editProject.active = this.projects[index].active;
            this.editProject.clientLocationID = this.projects[index].clientLocationID;
            this.editProject.clientLocation = this.projects[index].clientLocation;
            this.editProject.status = this.projects[index].status;
            this.editIndex = index;
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            this.projectsService.updateProject(this.editProject).subscribe((response) => {
                var p = new _project__WEBPACK_IMPORTED_MODULE_0__.Project();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                this.projects[this.editIndex] = p;
                this.editProject.projectID = null;
                this.editProject.projectName = null;
                this.editProject.dateOfStart = null;
                this.editProject.teamSize = null;
                this.newProject.active = false;
                this.newProject.clientLocationID = null;
                this.newProject.status = null;
                jquery__WEBPACK_IMPORTED_MODULE_1__("#editFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, index) {
        this.deleteIndex = index;
        this.deleteProject.projectID = this.projects[index].projectID;
        this.deleteProject.projectName = this.projects[index].projectName;
        this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
        this.deleteProject.teamSize = this.projects[index].teamSize;
    }
    onDeleteConfirmClick() {
        this.projectsService.deleteProject(this.deleteProject.projectID).subscribe((response) => {
            this.projects.splice(this.deleteIndex, 1);
            this.deleteProject.projectID = null;
            this.deleteProject.projectName = null;
            this.deleteProject.teamSize = null;
            this.deleteProject.dateOfStart = null;
        }, (error) => {
            console.log(error);
        });
    }
    onSearchClick() {
        // this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(
        //   (response: Project[]) =>
        //   {
        //     this.projects = response;
        //   },
        //   (error) => 
        //   {
        //     console.log(error);
        //   });
    }
    onSearchTextKeyup(event) {
        this.calculateNoOfPages();
    }
    onHideShowDetails(event) {
        this.projectsService.toggleDetails();
    }
    onPageIndexClicked(pageIndex) {
        this.currentPageIndex = pageIndex;
    }
}
ProjectsComponent.??fac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["????directiveInject"](_Services_projects_service__WEBPACK_IMPORTED_MODULE_3__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["????directiveInject"](_Services_client_locations_service__WEBPACK_IMPORTED_MODULE_4__.ClientLocationsService)); };
ProjectsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????viewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????viewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????viewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????loadQuery"]()) && (ctx.newForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????loadQuery"]()) && (ctx.editForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????loadQuery"]()) && (ctx.projs = _t);
    } }, decls: 236, vars: 98, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:34px", 4, "ngIf"], [1, "row"], [1, "col-xl-9", "mx-auto"], [1, "form-group", "form-row"], [1, "col-2"], ["data-toggle", "modal", "data-target", "#newModal", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "col-1", "custom-control", "custom-checkbox"], ["type", "checkbox", "value", "true", "name", "isAllChecked", "id", "isAllChecked", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "isAllChecked", 1, "custom-control-label"], ["for", "drpSearchBy", 1, "col-form-label", "col-2", "text-right"], [1, "col-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "ProjectID"], ["value", "ProjectName"], ["value", "DateOfStart"], ["value", "TeamSize"], ["for", "textSearchText", 1, "col-form-label", "col-1", "text-right"], [1, "col-4"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "700px"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "name", "ProjectID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectID", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], ["for", "col-sm-4 col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocationID", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newFormCancel", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["editForm", "ngForm"], ["role", "dialog", "id", "editModal", 1, "modal"], [1, "modal-header"], ["for", "txtEditProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control-plain-text", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectID", "ngModel"], ["for", "txtEditProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectName", "ngModel"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], ["type", "checkbox", "id", "chkEditActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocationID", "ngModel"], ["data-dismiss", "modal", "id", "editFormCancel", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtDeleteProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectName", "placeholder", "Project Name", "name", "ProjectName", "disabled", "disabled", 1, "form-control-plain-text", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], [1, "col-md-4"], [3, "currentProject", "recordIndex", "editClick", "deleteClick"], ["prj", ""], ["selectionBox", ""], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], [1, "text-danger"], [3, "value"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](1, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](2, ProjectsComponent_i_2_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("click", function ProjectsComponent_Template_button_click_7_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](8, "Create Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("click", function ProjectsComponent_Template_button_click_9_listener($event) { return ctx.onHideShowDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](10, "Hide/Show Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.isAllChecked = $event; })("change", function ProjectsComponent_Template_input_change_12_listener($event) { return ctx.isAllCheckedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????element"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](15, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](17, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_17_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](19, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](21, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](23, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](24, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](25, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](27, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_30_listener($event) { return ctx.searchText = $event; })("keyup", function ProjectsComponent_Template_input_keyup_30_listener($event) { return ctx.onSearchTextKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](33, ProjectsComponent_div_33_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pipe"](34, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pipe"](35, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](38, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](39, ProjectsComponent_li_39_Template, 3, 4, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](40, "form", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](47, "New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](48, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](50, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](53, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](54, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](56, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_56_listener($event) { return ctx.newProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](58, ProjectsComponent_span_58_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](59, ProjectsComponent_span_59_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](60, ProjectsComponent_span_60_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](62, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](63, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](65, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_65_listener($event) { return ctx.newProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](67, ProjectsComponent_span_67_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](68, ProjectsComponent_span_68_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](69, ProjectsComponent_span_69_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](71, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](72, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](74, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_74_listener($event) { return ctx.newProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](76, ProjectsComponent_span_76_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](78, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](79, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](81, "input", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_81_listener($event) { return ctx.newProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](83, ProjectsComponent_span_83_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](84, ProjectsComponent_span_84_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](85, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](86, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](87, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](89, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](90, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_90_listener($event) { return ctx.newProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](91, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](92, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](94, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](95, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](97, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](98, "input", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_98_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](100, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](101, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](102, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](103, "input", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_103_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](105, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](106, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](107, ProjectsComponent_span_107_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](108, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](109, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](110, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](112, "select", 62, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_112_listener($event) { return ctx.newProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](114, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](115, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](116, ProjectsComponent_option_116_Template, 2, 2, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](117, ProjectsComponent_span_117_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](118, ProjectsComponent_span_118_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](119, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](120, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](121, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](122, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("click", function ProjectsComponent_Template_button_click_122_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](123, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](124, "form", 25, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](126, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](127, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](128, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](129, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](130, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](131, "Edit Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](132, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](134, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](135, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](136, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](137, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](138, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](139, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](140, "input", 73, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_140_listener($event) { return ctx.editProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](142, ProjectsComponent_span_142_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](143, ProjectsComponent_span_143_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](144, ProjectsComponent_span_144_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](145, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](146, "label", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](147, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](148, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](149, "input", 76, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_149_listener($event) { return ctx.editProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](151, ProjectsComponent_span_151_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](152, ProjectsComponent_span_152_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](153, ProjectsComponent_span_153_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](154, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](155, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](156, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](157, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](158, "input", 79, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_158_listener($event) { return ctx.editProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](160, ProjectsComponent_span_160_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](161, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](162, "label", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](163, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](164, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](165, "input", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_165_listener($event) { return ctx.editProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](167, ProjectsComponent_span_167_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](168, ProjectsComponent_span_168_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](169, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](170, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](171, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](172, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](173, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](174, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_174_listener($event) { return ctx.editProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](175, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](176, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](177, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](178, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](179, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](180, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](181, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](182, "input", 87, 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_182_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](184, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](185, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](186, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](187, "input", 90, 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_187_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](189, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](190, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](191, ProjectsComponent_span_191_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](192, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](193, "label", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](194, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](195, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](196, "select", 94, 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_196_listener($event) { return ctx.editProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](198, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](199, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](200, ProjectsComponent_option_200_Template, 2, 2, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](201, ProjectsComponent_span_201_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????template"](202, ProjectsComponent_span_202_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](203, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](204, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](205, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](206, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("click", function ProjectsComponent_Template_button_click_206_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](207, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](208, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](209, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](210, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](211, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](212, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](213, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](214, "Delete Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](215, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](216, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](217, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](218, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](219, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](220, "Are you sure to delete this Project?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](221, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](222, "label", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](223, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](224, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](225, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_225_listener($event) { return ctx.deleteProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](226, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](227, "label", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](228, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](229, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](230, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_230_listener($event) { return ctx.deleteProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](231, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](232, "button", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](233, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](234, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("click", function ProjectsComponent_Template_button_click_234_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????text"](235, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](41);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](57);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](66);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](75);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](82);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](99);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](113);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](125);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](141);
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](150);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](159);
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](166);
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](183);
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????reference"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.isAllChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pipeBind3"](34, 60, _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pipeBind3"](35, 64, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](68, _c4, _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted), _r4.valid && (_r4.dirty || _r4.touched || _r3.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && _r4.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && _r4.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && _r4.errors["uniqueProjectID"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](71, _c4, _r8.invalid && (_r8.dirty || _r8.touched || _r3.submitted), _r8.valid && (_r8.dirty || _r8.touched || _r3.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r3.submitted) && _r8.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r3.submitted) && _r8.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r3.submitted) && _r8.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](74, _c4, _r12.invalid && (_r12.dirty || _r12.touched || _r3.submitted), _r12.valid && (_r12.dirty || _r12.touched || _r3.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r3.submitted) && _r12.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](77, _c4, _r14.invalid && (_r14.dirty || _r14.touched || _r3.submitted), _r14.valid && (_r14.dirty || _r14.touched || _r3.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched || _r3.submitted) && _r14.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched || _r3.submitted) && _r14.errors["divisible"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r17.invalid && (_r17.dirty || _r17.touched || _r3.submitted) && _r17.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.newProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](80, _c4, _r20.invalid && (_r20.dirty || _r20.touched || _r3.submitted), _r20.valid && (_r20.dirty || _r20.touched || _r3.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngForOf", ctx.clientLocations);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r20.invalid && (_r20.dirty || _r20.touched || _r3.submitted) && _r20.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r3.submitted) && (_r3.errors ? _r3.errors["clientLocationStatus"] : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](83, _c4, _r25.invalid && (_r25.dirty || _r25.touched || _r3.submitted), _r25.valid && (_r25.dirty || _r25.touched || _r3.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && _r25.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && _r25.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && _r25.errors["uniqueProjectID"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](86, _c4, _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted), _r29.valid && (_r29.dirty || _r29.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && _r29.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && _r29.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && _r29.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](89, _c4, _r33.invalid && (_r33.dirty || _r33.touched || _r24.submitted), _r33.valid && (_r33.dirty || _r33.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r33.invalid && _r24.submitted && _r33.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](92, _c4, _r35.invalid && (_r35.dirty || _r35.touched || _r24.submitted), _r35.valid && (_r35.dirty || _r35.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r35.invalid && (_r35.dirty || _r35.touched || _r24.submitted) && _r35.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r35.invalid && (_r35.dirty || _r35.touched || _r24.submitted) && _r35.errors["divisible"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r38.invalid && (_r38.dirty || _r38.touched || _r24.submitted) && _r38.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.editProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["????pureFunction2"](95, _c4, _r41.invalid && (_r41.dirty || _r41.touched || _r24.submitted), _r41.valid && (_r41.dirty || _r41.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngForOf", ctx.clientLocations);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r41.invalid && (_r41.dirty || _r41.touched || _r24.submitted) && _r41.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngIf", _r24.invalid && (_r24.dirty || _r24.touched || _r24.submitted) && (_r24.errors ? _r24.errors["clientLocationStatus"] : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.deleteProject.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("ngModel", ctx.deleteProject.projectName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _Directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_5__.ClientLocationStatusValidatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.PatternValidator, _Directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ProjectIDUniqueValidatorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _Directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_7__.TeamSizeValidatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _project_project_component__WEBPACK_IMPORTED_MODULE_8__.ProjectComponent, _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__.CheckBoxPrinterComponent], pipes: [_paging_pipe__WEBPACK_IMPORTED_MODULE_10__.PagingPipe, src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe], styles: [".projectcard[_ngcontent-%COMP%] {\n  height: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtBQUFKIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RjYXJkXHJcbntcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/about/about.component */ 2455);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 8422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: "signup", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent },
    { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/login.service */ 980);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _Services_router_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/router-logger.service */ 769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);








const _c0 = function () { return ["/admin", "dashboard"]; };
function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/admin", "projects"]; };
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](1, _c1));
} }
function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r2.loginService.currentUserName);
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AppComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r6.loginService.Logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
const _c2 = function () { return ["/login"]; };
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/signup"]; };
function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](1, _c3));
} }
const _c4 = function () { return ["/about"]; };
class AppComponent {
    constructor(loginService, domSanitizer, routerLoggerService, router) {
        this.loginService = loginService;
        this.domSanitizer = domSanitizer;
        this.routerLoggerService = routerLoggerService;
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                let userName = (this.loginService.currentUserName) ? this.loginService.currentUserName : "anonymous";
                let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;
                this.routerLoggerService.log(logMsg).subscribe();
            }
        });
    }
    onSearchClick() {
        console.log(this.loginService.currentUserName);
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_Services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_Services_router_logger_service__WEBPACK_IMPORTED_MODULE_1__.RouterLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 8, consts: [[1, "navbar", "navbar-expand-sm", "bg-success", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning", "my2-", "my-sm-0", 3, "click"], [1, "container-fluid"], ["href", "#", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, " Angular Task Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AppComponent_li_7_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, AppComponent_li_11_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, AppComponent_li_12_Template, 3, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, AppComponent_li_13_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, AppComponent_li_14_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, AppComponent_li_15_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AppComponent_Template_button_click_22_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](7, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.loginService.currentUserName == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.loginService.currentUserName == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.module */ 7095);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/jwt-interceptor.service */ 13);
/* harmony import */ var _Services_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/jwt-un-authorized-interceptor.service */ 305);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 8422);
/* harmony import */ var _Directives_alert_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Directives/alert.directive */ 556);
/* harmony import */ var _Directives_repeater_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Directives/repeater.directive */ 723);
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee/employee.module */ 375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
            useClass: _Services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptorService,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
            useClass: _Services_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_5__.JwtUnAuthorizedInterceptorService,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__.AdminModule,
            _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__.EmployeeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__.JwtModule.forRoot({
                config: {
                    tokenGetter: () => {
                        return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null);
                    }
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__.SignUpComponent,
        _Directives_alert_directive__WEBPACK_IMPORTED_MODULE_7__.AlertDirective,
        _Directives_repeater_directive__WEBPACK_IMPORTED_MODULE_8__.RepeaterDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__.AdminModule,
        _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__.EmployeeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__.JwtModule] }); })();


/***/ }),

/***/ 1028:
/*!************************************!*\
  !*** ./src/app/client-location.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLocation": () => (/* binding */ ClientLocation)
/* harmony export */ });
class ClientLocation {
    constructor() {
        this.clientLocationID = null;
        this.clientLocationName = null;
    }
}


/***/ }),

/***/ 490:
/*!**********************************************************************!*\
  !*** ./src/app/employee/employee-routing/employee-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeRoutingModule": () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_Services_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/can-activate-guard.service */ 628);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/tasks.component */ 147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: "employee", canActivate: [src_app_Services_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_0__.CanActivateGuardService], data: { expectedRole: "Employee" }, children: [
            { path: "tasks", component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__.TasksComponent },
        ] },
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.??fac = function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); };
EmployeeRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 375:
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeModule": () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/tasks.component */ 147);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-routing/employee-routing.module */ 490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class EmployeeModule {
}
EmployeeModule.??fac = function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); };
EmployeeModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: EmployeeModule });
EmployeeModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](EmployeeModule, { declarations: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule] }); })();


/***/ }),

/***/ 147:
/*!***************************************************!*\
  !*** ./src/app/employee/tasks/tasks.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TasksComponent {
    constructor() { }
    ngOnInit() {
    }
}
TasksComponent.??fac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 2, vars: 0, template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "tasks works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4211:
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FilterPipe {
    transform(value, searchBy, searchText) {
        if (value == null) {
            return value;
        }
        let resultArray = [];
        for (let item of value) {
            if (String(item[searchBy]).toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
FilterPipe.??fac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.??pipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "filter", type: FilterPipe, pure: false });


/***/ }),

/***/ 9269:
/*!*************************************!*\
  !*** ./src/app/login-view-model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginViewModel": () => (/* binding */ LoginViewModel)
/* harmony export */ });
class LoginViewModel {
    constructor() {
        this.UserName = "";
        this.Password = "";
    }
}


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-view-model */ 9269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/login.service */ 980);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _Directives_alert_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Directives/alert.directive */ 556);







function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("error", ctx_r0.loginError);
} }
class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_0__.LoginViewModel();
        this.loginError = "";
    }
    ngOnInit() {
    }
    onLoginClick(event) {
        this.loginService.Login(this.loginViewModel).subscribe((response) => {
            this.router.navigate(["/admin", "dashboard"]);
        }, (error) => {
            console.log(error);
            this.loginError = "Invalid Username or Password";
        });
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_Services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 3, consts: [[1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], ["appAlert", "", 3, "error", 4, "ngIf"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "UserName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "placeholder", "Username", "name", "UserName", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Password", 1, "col-md-4", "col-form-label"], ["type", "password", "placeholder", "Password", "name", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "btn", "btn-primary", 3, "click"], ["appAlert", "", 3, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, LoginComponent_div_7_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.loginViewModel.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.loginViewModel.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LoginComponent_Template_button_click_20_listener($event) { return ctx.onLoginClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.loginViewModel.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.loginViewModel.Password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _Directives_alert_directive__WEBPACK_IMPORTED_MODULE_2__.AlertDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2764:
/*!****************************************!*\
  !*** ./src/app/number-to-word.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberToWordPipe": () => (/* binding */ NumberToWordPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NumberToWordPipe {
    constructor() {
        this.inWords = (n) => {
            let a = [
                '', 'One', 'Two', 'Three', 'Four',
                'Five', 'Six', 'Seven', 'Eight', 'Nine',
                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
                'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
            ];
            let b = [
                '', '', 'Twenty', 'Thirty', 'Forty',
                'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
            ];
            let g = [
                '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion',
                'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'
            ];
            const arr = (x) => Array.from(x);
            const num = (x) => Number(x) || 0;
            const str = (x) => String(x);
            const isEmpty = (xs) => xs.length === 0;
            const take = (n) => (xs) => xs.slice(0, n);
            const drop = (n) => (xs) => xs.slice(n);
            const reverse = (xs) => xs.slice(0).reverse();
            const comp = (f) => (g) => (x) => f(g(x));
            const not = (x) => !x;
            const chunk = (n) => (xs) => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
            let makeGroup = ([ones, tens, huns]) => {
                return [
                    num(huns) === 0 ? '' : a[huns] + ' Hundred ',
                    num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
                    a[tens + ones] || a[ones]
                ].join('');
            };
            let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
            if (typeof n === 'number')
                return this.inWords(str(n));
            else if (n === '0')
                return 'Zero';
            else
                return comp(chunk(3))(reverse)(arr(n))
                    .map(makeGroup)
                    .map(thousand)
                    .filter(comp(not)(isEmpty))
                    .reverse()
                    .join(' ');
        };
    }
    transform(value) {
        if (value == null) {
            return null;
        }
        else {
            return this.inWords(value);
        }
    }
}
NumberToWordPipe.??fac = function NumberToWordPipe_Factory(t) { return new (t || NumberToWordPipe)(); };
NumberToWordPipe.??pipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "numberToWord", type: NumberToWordPipe, pure: true });


/***/ }),

/***/ 8374:
/*!********************************!*\
  !*** ./src/app/paging.pipe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingPipe": () => (/* binding */ PagingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PagingPipe {
    transform(value, currentPageIndex, pageSize) {
        if (value == null) {
            return value;
        }
        let resultArray = [];
        for (let i = currentPageIndex * pageSize; i < (currentPageIndex + 1) * pageSize; i++) {
            if (value[i]) {
                resultArray.push(value[i]);
            }
        }
        return resultArray;
    }
}
PagingPipe.??fac = function PagingPipe_Factory(t) { return new (t || PagingPipe)(); };
PagingPipe.??pipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "paging", type: PagingPipe, pure: true });


/***/ }),

/***/ 2513:
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _client_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-location */ 1028);

class Project {
    constructor() {
        this.projectID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.clientLocationID = null;
        this.clientLocation = new _client_location__WEBPACK_IMPORTED_MODULE_0__.ClientLocation();
    }
}


/***/ }),

/***/ 8422:
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/countries.service */ 484);
/* harmony import */ var _Services_custome_validatore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/custome-validatore.service */ 177);
/* harmony import */ var _Services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/login.service */ 980);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function SignUpComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "First name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "First name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Last name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Last name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Email can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Email already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Mobile can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Mobile is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Date of Birth can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Minimum Age must be 18");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Confirm Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Password and Confirm Password do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const gender_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("id", gender_r19)("value", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("for", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](gender_r19);
} }
function SignUpComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Please select gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SignUpComponent_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const country_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", country_r20.countryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", country_r20.countryName, " ");
} }
function SignUpComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Please select country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function SignUpComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Please Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SignUpComponent_div_82_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r24); const i_r22 = restoredCtx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r23.onRemoveClick(i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const skill_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroupName", i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](3, _c0, skill_r21.get("skillName").invalid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.signUpForm.submitted), skill_r21.get("skillName").valid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.signUpForm.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](6, _c0, skill_r21.get("skillLevel").invalid && (skill_r21.get("skillLevel").dirty || skill_r21.get("skillLevel").touched || ctx_r18.signUpForm.submitted), skill_r21.get("skillLevel").valid && (skill_r21.get("skillLevel").dirty || skill_r21.get("skillLevel").touched || ctx_r18.signUpForm.submitted)));
} }
class SignUpComponent {
    constructor(countriesService, formBuilder, customValidatorsService, loginService, router) {
        this.countriesService = countriesService;
        this.formBuilder = formBuilder;
        this.customValidatorsService = customValidatorsService;
        this.loginService = loginService;
        this.router = router;
        this.signUpForm = null;
        this.genders = ["male", "female"];
        this.countries = [];
        this.registerError = null;
        this.canLeave = true;
    }
    ngOnInit() {
        this.countriesService.getCountries().subscribe((response) => {
            this.countries = response;
        });
        this.signUpForm = this.formBuilder.group({
            personName: this.formBuilder.group({
                firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
            }),
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email], [this.customValidatorsService.DuplicateEmailValidator()], { updateOn: 'blur' }],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[789]\d{9}$/)]],
            dateOfBirth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.customValidatorsService.minimumAgeValidator(18)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            receiveNewsLetters: [null],
            skills: this.formBuilder.array([])
        }, {
            validators: [
                this.customValidatorsService.compareValidator("confirmPassword", "password")
            ]
        });
        this.signUpForm.valueChanges.subscribe((value) => {
            //console.log(value);
            this.canLeave = false;
        });
    }
    onSubmitClick() {
        //Display current form value
        this.signUpForm["submitted"] = true;
        console.log(this.signUpForm);
        if (this.signUpForm.valid) {
            var signUpVieModel = this.signUpForm.value;
            this.loginService.Register(signUpVieModel).subscribe((response) => {
                this.canLeave = true;
                this.router.navigate(["/employee", "tasks"]);
            }, (error) => {
                console.log(error);
                this.registerError = "Unable to submit";
            });
        }
        //setValue
        // this.signUpForm.setValue({
        //   firstName: "Adam",
        //   lastName: "Smith",
        //   email: "smith@gmail.com",
        //   mobile: "9876543210",
        //   dateOfBirth: "2020-01-01",
        //   gender: "male",
        //   countryID: 3,
        //   receiveNewsLetters: true
        // });
        //patchValue
        // this.signUpForm.patchValue({
        //   firstName: "Adam",
        //   lastName: "Smith",
        //   email: "smith@gmail.com"
        // });
        //reset
        //this.signUpForm.reset();
        //reset with Parameters
        // this.signUpForm.reset({
        //   firstName: "Adam",
        //   lastName: "Smith",
        //   email: "smith@gmail.com"
        // });
    }
    onAddSkill() {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            skillLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
        this.signUpForm.get("skills").push(formGroup);
    }
    onRemoveClick(index) {
        this.signUpForm.get("skills").removeAt(index);
    }
}
SignUpComponent.??fac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_Services_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_Services_custome_validatore_service__WEBPACK_IMPORTED_MODULE_1__.CustomeValidatoreService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_Services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SignUpComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 90, vars: 53, consts: [[1, "row"], [1, "col-md-8", "col-xl-6", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "card", "mt-1"], [1, "card-header"], [1, "card-body"], ["formGroupName", "personName", 1, "form-group", "form-row"], ["for", "firstName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "name", "firstName", "id", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "lastName", "id", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-row"], ["for", "email", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "email", "id", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "mobile", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "mobile", "id", "mobile", "placeholder", "Mobile", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["for", "dateOfBirth", 1, "col-md-4", "col-form-label"], ["type", "date", "name", "dateOfBirth", "id", "dateOfBirth", "placeholder", "Date of Birth", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "col-md-4", "col-form-label"], ["class", "form-check-label form-check-inline", 4, "ngFor", "ngForOf"], ["for", "countryID", 1, "col-md-4", "col-form-label"], ["name", "countryID", "id", "countryID", "formControlName", "countryID", 1, "form-control", 3, "ngClass"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "receiveNewsLetters", "id", "receiveNewsLetters", "value", "true", "formControlName", "receiveNewsLetters", 1, "form-check-input"], ["for", "receiveNewsLetters", 1, "form-check-label"], ["formArrayName", "skills", 1, "col-md-8"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-footer"], [1, "btn", "btn-success", "float-right"], [1, "text-danger"], [1, "form-check-label", "form-check-inline"], ["type", "radio", "name", "gender", "formControlName", "gender", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [3, "value"], [1, "row", 3, "formGroupName"], [1, "col-5", "mb-3"], ["type", "text", "name", "skillName", "id", "skillName", "placeholder", "Skill Name", "formControlName", "skillName", 1, "form-control", 3, "ngClass"], [1, "col-4"], ["name", "level", "id", "level", "formControlName", "skillLevel", 1, "form-control", 3, "ngClass"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Professional"], ["value", "Expert"], [1, "col-3"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmitClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, SignUpComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, SignUpComponent_span_14_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, SignUpComponent_span_20_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, SignUpComponent_span_21_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, SignUpComponent_span_27_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, SignUpComponent_span_28_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, SignUpComponent_span_29_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "Mobile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](35, SignUpComponent_span_35_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](36, SignUpComponent_span_36_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, "Date of Birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, SignUpComponent_span_42_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](43, SignUpComponent_span_43_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](49, SignUpComponent_span_49_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, "Confirm Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](55, SignUpComponent_span_55_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](56, SignUpComponent_span_56_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](61, SignUpComponent_div_61_Template, 4, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](62, SignUpComponent_span_62_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](70, SignUpComponent_option_70_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](71, SignUpComponent_span_71_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](73, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "Receive News Letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](80, "Skills:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](82, SignUpComponent_div_82_Template, 18, 9, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SignUpComponent_Template_button_click_83_listener() { return ctx.onAddSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](84, "Add Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](87, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](29, _c0, ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.firstName").valid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](32, _c0, ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.lastName").valid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](35, _c0, ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("email").valid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.uniqueEmail));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](38, _c0, ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("mobile").valid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](41, _c0, ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("dateOfBirth").valid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.minAge));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](44, _c0, ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("password").valid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("password").errors == null ? null : ctx.signUpForm.get("password").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](47, _c0, ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("confirmPassword").valid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("confirmPassword").errors == null ? null : ctx.signUpForm.get("confirmPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.invalid && (ctx.signUpForm.dirty || ctx.signUpForm.touched || ctx.signUpForm.submitted) && (ctx.signUpForm.errors == null ? null : ctx.signUpForm.errors.compareValidator));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("gender").invalid && (ctx.signUpForm.get("gender").dirty || ctx.signUpForm.get("gender").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("gender").errors == null ? null : ctx.signUpForm.get("gender").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](50, _c0, ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("countryID").valid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("countryID").errors == null ? null : ctx.signUpForm.get("countryID").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.signUpForm.get("skills").controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.registerError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map