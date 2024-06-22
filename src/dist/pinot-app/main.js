"use strict";
(self["webpackChunkPinotApp"] = self["webpackChunkPinotApp"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _arc_gis_arc_gis_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arc-gis/arc-gis.component */ 6770);
/* harmony import */ var _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataset/dataset.component */ 3409);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _info_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/info/info.component */ 4556);
/* harmony import */ var _ml_ml_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ml/ml.component */ 6010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [
//{ path: '',component: DashboardComponent },
{
  path: '',
  component: _ml_ml_component__WEBPACK_IMPORTED_MODULE_5__.MlComponent
}, {
  path: 'ml',
  component: _ml_ml_component__WEBPACK_IMPORTED_MODULE_5__.MlComponent
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
},
//{path: 'login',component: LoginComponent},
{
  path: 'ArcGis',
  component: _arc_gis_arc_gis_component__WEBPACK_IMPORTED_MODULE_1__.ArcGisComponent
}, {
  path: 'DataSet',
  component: _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_2__.DatasetComponent
}, {
  path: 'Info',
  component: _info_info_info_component__WEBPACK_IMPORTED_MODULE_4__.InfoComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 702);










function AppComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading may take less than 2 minutes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppComponent_a_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function AppComponent_a_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10, 11)(2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_a_18_span_4_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.route)("activated", _r3.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", item_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed());
  }
}
class AppComponent {
  constructor() {
    this.title = 'PinotApp';
    this.grape = "assets/img/grape.png";
    this.signedIn = true;
    this.User = "";
    this.menuItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([{
      icon: 'hub',
      label: 'Predicting model',
      route: 'ml'
    }, {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    }, {
      icon: 'language',
      label: 'ArcGIS',
      route: 'ArcGis'
    }, {
      icon: 'dataset',
      label: 'Data and download',
      route: 'DataSet'
    }, {
      icon: 'photo_library',
      label: 'Information',
      route: 'Info'
    }, {
      icon: 'assignment_ind',
      label: 'Sign in',
      route: 'login'
    }]);
    this.collapsed = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true);
    this.sidenavWidth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.collapsed() ? '65px' : '250px');
    this.profilePicSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.collapsed() ? '30' : '100');
    this.loaded = false;
  }
  loading() {
    setTimeout(() => this.loaded = true, 7000);
    //setTimeout( () => this.onSubmit(), 60000 );
  }

  ngOnInit() {
    this.loading();
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember") {
      this.signedIn = false;
    } else {
      this.signedIn = true;
      this.User = localStorage.getItem('session')?.substring(0, 4) + ".";
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 22,
    vars: 12,
    consts: [[1, "mat-elevation-z3"], ["mat-icon-button", "", 3, "click"], [1, "header-text"], ["class", "slide-load", "opened", "", 4, "ngIf"], ["opened", "", "mode", "side"], [1, "sidenav-header"], ["width", "profilePicSize()", 3, "height", "src"], ["mat-list-item", "", "class", "menu-item", "routerLinkActive", "selected-menu-item", 3, "routerLink", "activated", 4, "ngFor", "ngForOf"], [1, "content"], ["opened", "", 1, "slide-load"], ["mat-list-item", "", "routerLinkActive", "selected-menu-item", 1, "menu-item", 3, "routerLink", "activated"], ["rla", "routerLinkActive"], ["matListItemIcon", "", 3, "matTooltip"], ["matListItemTitle", "", 4, "ngIf"], ["matListItemTitle", ""]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() {
          return ctx.collapsed.set(!ctx.collapsed());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wine quality prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav-container")(9, "mat-sidenav", 4)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2)(13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wine quality prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "C-fACS, Licoln University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_a_18_Template, 5, 5, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav-content")(20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-header-text", !ctx.collapsed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.sidenavWidth());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.profilePicSize())("src", ctx.grape, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-header-text", ctx.collapsed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.sidenavWidth());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItemTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
    styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n}\n\n.content[_ngcontent-%COMP%]{\n  padding: 24px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\nmat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%]{ \n  transition: all 500ms ease-in-out;\n}\n\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  transition: all 500ms ease-in-out;\n}\n\n.slide-load[_ngcontent-%COMP%]{ \n  \n\n  text-align: center;\n  height: 3rem;\n  > h2 {\n    padding: 6px;\n    margin: 0;\n    font-size: 1rem;\n    color: purple;\n    line-height: 1;\n  }\n}\n\n.sidenav-header[_ngcontent-%COMP%] {\n  text-align: center;\n  > img {\n    padding-top: 24px;\n  }\n}\n\n.header-text[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 3rem;\n  > h1 {\n    margin: 0;\n    font-size: 2rem;\n    color: purple;\n    line-height: 1;\n  }\n  > h2 {\n    padding: 6px;\n    margin: 0;\n    font-size: 1rem;\n    color: purple;\n    line-height: 1;\n  }\n  > p {\n    margin: 0;\n    font-size: 0.8rem;\n    color: gray;\n  }\n}\n\n.hide-header-text[_ngcontent-%COMP%]{\n  opacity: 0;\n  height: 0px !important;\n}\n.menu-item[_ngcontent-%COMP%] {\n  border-left: 5px solid;\n  border-left-color: rgba(0, 0, 0, 0);\n}\n\n.selected-menu-item[_ngcontent-%COMP%] {\n  \n\n  border-left-color: purple;\n  background: rgba(0, 0, 0, 0.05);\n}\n\n\n#loading[_ngcontent-%COMP%]{ \n  position: absolute; \n  left: 50%; \n  top: 50%; \n  z-index: 1; \n  width: 80px; \n  height: 80px; \n  margin: -75px 0 0 -75px; \n  border: 16px solid #f3f3f3; \n  border-radius: 50%; \n  border-top: 16px solid blueviolet; \n  width: 120px; \n  height: 120px; \n  animation: _ngcontent-%COMP%_spin 2s linear infinite; \n  } \n    \n  @keyframes _ngcontent-%COMP%_spin { \n    0% { transform: rotate(0deg); } \n    100% { transform: rotate(360deg); } \n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1o7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDOztFQUVBO0lBQ0UsS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0VBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiwgbWF0LXNpZGVuYXYtY29udGVudHsgXHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG46aG9zdCAqIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zbGlkZS1sb2FkeyBcclxuICAvKiB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICA+IGgyIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gID4gaW1nIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gID4gaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICA+IGgyIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgPiBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlkZS1oZWFkZXItdGV4dHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnUtaXRlbSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLnNlbGVjdGVkLW1lbnUtaXRlbSB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDsgKi9cclxuICBib3JkZXItbGVmdC1jb2xvcjogcHVycGxlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuXHJcblxyXG4jbG9hZGluZ3sgXHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBsZWZ0OiA1MCU7IFxyXG4gIHRvcDogNTAlOyBcclxuICB6LWluZGV4OiAxOyBcclxuICB3aWR0aDogODBweDsgXHJcbiAgaGVpZ2h0OiA4MHB4OyBcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDsgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCBibHVldmlvbGV0OyBcclxuICB3aWR0aDogMTIwcHg7IFxyXG4gIGhlaWdodDogMTIwcHg7IFxyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IFxyXG4gIH0gXHJcbiAgICBcclxuICBAa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata/metadata.component */ 9294);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! highcharts-angular */ 8578);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _metadata_add_metadata_add_metadata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata/add-metadata/add-metadata.component */ 4493);
/* harmony import */ var _metadata_show_metadata_show_metadata_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata/show-metadata/show-metadata.component */ 6974);
/* harmony import */ var _metadata_edit_metadata_edit_metadata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata/edit-metadata/edit-metadata.component */ 2527);
/* harmony import */ var _arc_gis_arc_gis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arc-gis/arc-gis.component */ 6770);
/* harmony import */ var _physical_physical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./physical/physical.component */ 4050);
/* harmony import */ var _physical_add_physical_add_physical_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./physical/add-physical/add-physical.component */ 8771);
/* harmony import */ var _physical_edit_physical_edit_physical_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./physical/edit-physical/edit-physical.component */ 576);
/* harmony import */ var _physical_show_physical_show_physical_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./physical/show-physical/show-physical.component */ 3056);
/* harmony import */ var _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dataset/dataset.component */ 3409);
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./download/download.component */ 752);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _info_info_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./info/info/info.component */ 4556);
/* harmony import */ var _arc_gis_show_arc_gis_show_arc_gis_show_arc_gis_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./arc-gis/show-arc-gis/show-arc-gis/show-arc-gis.component */ 5498);
/* harmony import */ var _ml_ml_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ml/ml.component */ 6010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 1699);














































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_24__.HighchartsChartModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_36__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__.MatSlideToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_41__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__.MatSliderModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_36__.MatListModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, _metadata_add_metadata_add_metadata_component__WEBPACK_IMPORTED_MODULE_4__.AddMetadataComponent, _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_2__.MetadataComponent, _metadata_show_metadata_show_metadata_component__WEBPACK_IMPORTED_MODULE_5__.ShowMetadataComponent, _metadata_edit_metadata_edit_metadata_component__WEBPACK_IMPORTED_MODULE_6__.EditMetadataComponent, _physical_physical_component__WEBPACK_IMPORTED_MODULE_8__.PhysicalComponent, _physical_add_physical_add_physical_component__WEBPACK_IMPORTED_MODULE_9__.AddPhysicalComponent, _physical_edit_physical_edit_physical_component__WEBPACK_IMPORTED_MODULE_10__.EditPhysicalComponent, _physical_show_physical_show_physical_component__WEBPACK_IMPORTED_MODULE_11__.ShowPhysicalComponent, _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_12__.DatasetComponent, _download_download_component__WEBPACK_IMPORTED_MODULE_13__.DownloadComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_14__.LoginComponent, _arc_gis_arc_gis_component__WEBPACK_IMPORTED_MODULE_7__.ArcGisComponent, _info_info_info_component__WEBPACK_IMPORTED_MODULE_15__.InfoComponent, _arc_gis_show_arc_gis_show_arc_gis_show_arc_gis_component__WEBPACK_IMPORTED_MODULE_16__.ShowArcGisComponent, _ml_ml_component__WEBPACK_IMPORTED_MODULE_17__.MlComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_24__.HighchartsChartModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_36__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__.MatSlideToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_41__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__.MatSliderModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__.MatProgressSpinnerModule],
    exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_36__.MatListModule]
  });
})();

/***/ }),

/***/ 6770:
/*!**********************************************!*\
  !*** ./src/app/arc-gis/arc-gis.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGisComponent: () => (/* binding */ ArcGisComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _show_arc_gis_show_arc_gis_show_arc_gis_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-arc-gis/show-arc-gis/show-arc-gis.component */ 5498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service.service */ 3378);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5309);















function ArcGisComponent_mat_card_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 11)(1, "mat-card-header")(2, "div")(3, "mat-card-title")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArcGisComponent_mat_card_18_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const producer_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onDetail(producer_r2.Producer, producer_r2.Vineyard));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const producer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](producer_r2.Vineyard);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", producer_r2.Region, ", ", producer_r2.Producer, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", producer_r2.Layer_ID1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
// import * as L from 'leaflet';
class ArcGisComponent {
  constructor(service, dialog) {
    this.service = service;
    this.dialog = dialog;
    this.APIkey = 'edf8fdb7896c4081bf79b2c831a5758e';
    this.toggle = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('toggle');
    this.toggleLabel = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('Show GIS selector');
    this.selectedGIS = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
    this.Producers = [];
  }
  onChange() {
    if (this.toggleLabel.value == 'Show filter') {
      this.toggleLabel.setValue('Hide filter');
    } else {
      this.toggleLabel.setValue('Show filter');
    }
  }
  onChangeGIS() {
    var region = this.selectedGIS.value;
    if (region != "All") {
      this.genMap(region);
      console.log(region);
    } else {
      this.genMap("All");
      console.log(region);
    }
  }
  genMap(str) {
    if (str == "All") {
      this.service.getMetadata().subscribe(data => {
        this.Producers = data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(data);
      });
    } else {
      this.service.gerMetadataBProduction(str).subscribe(data => {
        this.Producers = data;
      });
    }
  }
  ngOnInit() {
    this.genMap("All");
  }
  onDetail(producer, vinyard) {
    for (var p of this.Producers) {
      if (p.Producer === producer && p.Vineyard === vinyard) {
        this.dialog.open(_show_arc_gis_show_arc_gis_show_arc_gis_component__WEBPACK_IMPORTED_MODULE_0__.ShowArcGisComponent, {
          height: '90%',
          width: '60%',
          data: p
        });
      }
    }
  }
  static #_ = this.ɵfac = function ArcGisComponent_Factory(t) {
    return new (t || ArcGisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ArcGisComponent,
    selectors: [["app-arc-gis"]],
    decls: 19,
    vars: 6,
    consts: [["value", "false", 3, "formControl", "click", "change"], [3, "formControl"], [3, "hasBackdrop"], ["mode", "side", "opened", ""], ["drawer", ""], [3, "formControl", "selectionChange"], ["value", "All"], ["value", "High"], ["value", "Low"], [1, "container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["mat-button", "", "color", "primary", 3, "click"], [1, "map-frame", 2, "width", "300px", "height", "200px", 3, "src"]],
    template: function ArcGisComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArcGisComponent_Template_mat_slide_toggle_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle());
        })("change", function ArcGisComponent_Template_mat_slide_toggle_change_0_listener() {
          return ctx.onChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-drawer-container", 2)(4, "mat-drawer", 3, 4)(6, "tr")(7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function ArcGisComponent_Template_mat_select_selectionChange_10_listener() {
          return ctx.onChangeGIS();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ArcGisComponent_mat_card_18_Template, 13, 4, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.toggleLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.toggleLabel.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.selectedGIS);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Producers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawerContainer, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption],
    styles: [".container[_ngcontent-%COMP%] {\n    \n\n\n    width: auto;\n    height: auto;\n    margin: 12px;\n    border: 1px solid #FFF;\n    text-align: center;\n  }\n\n.card[_ngcontent-%COMP%]{\n    max-width: 400px;\n}\n\n.container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{\n    flex: 1 1 300px;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXJjLWdpcy9hcmMtZ2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtvQkFDZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIC8qIHdpZHRoOiAxNDQwcHg7XG4gICAgaGVpZ2h0OiA5MDBweDsgKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi5jYXJke1xuICAgIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb250YWluZXI+KntcbiAgICBmbGV4OiAxIDEgMzAwcHg7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5498:
/*!*****************************************************************************!*\
  !*** ./src/app/arc-gis/show-arc-gis/show-arc-gis/show-arc-gis.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowArcGisComponent: () => (/* binding */ ShowArcGisComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1333);





class ShowArcGisComponent {
  constructor(dialogRef, dataForView) {
    this.dialogRef = dialogRef;
    this.dataForView = dataForView;
    this.title = 'Details of GIS';
    this.MetadataDetails = {
      ID: '',
      Producer_Abbrev: '',
      Producer: '',
      Vineyard: '',
      Vintage: '',
      Region: '',
      Cost: 0,
      Uses: '',
      Closure: '',
      Harvest: '',
      Yield: '',
      Production: '',
      Viticulture: '',
      Quality: 0,
      Layer_ID: '',
      Layer_ID1: '',
      DIV: 0
    };
  }
  ngOnInit() {
    this.MetadataDetails = this.dataForView;
  }
  static #_ = this.ɵfac = function ShowArcGisComponent_Factory(t) {
    return new (t || ShowArcGisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ShowArcGisComponent,
    selectors: [["app-show-arc-gis"]],
    decls: 56,
    vars: 15,
    consts: [[1, "gis-form"], ["form", "ngForm"], [2, "width", "700px", "height", "500px", 3, "src"]],
    template: function ShowArcGisComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "mat-dialog-content")(2, "form", 0, 1)(4, "h1")(5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Producer ID: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Closure: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cost: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Producer abbreviation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div")(25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "owned the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " vinyard. This wine is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " quality, produced in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " harvesting and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " yield. The production is quite ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " quality score, by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " viticulture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div")(54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Closure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Producer_Abbrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.MetadataDetails.Producer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Vineyard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Uses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Vintage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Harvest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Yield);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Production);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Quality);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MetadataDetails.Viticulture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.MetadataDetails.Layer_ID1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel],
    styles: [".gis-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.gis-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.close[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXJjLWdpcy9zaG93LWFyYy1naXMvc2hvdy1hcmMtZ2lzL3Nob3ctYXJjLWdpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5naXMtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmdpcy1mb3JtID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNsb3Nle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4225:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5080);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service.service */ 3378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ 8578);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 5309);












function DashboardComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const producer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", producer_r3.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](producer_r3.Vineyard);
  }
}
class DashboardComponent {
  // selecteProcedure: MetadataList = {
  //    ID : '',
  //    Vineyard :  ''
  // };
  //selectedViticulture = new FormControl('');
  constructor(service) {
    this.service = service;
    this.qualitychart = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.costChart = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.colorchart = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.QPC_chart = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.producers = [];
    this.toggle = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('toggle');
    this.toggleLabel = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('Show parameters');
    this.selectedQ = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.selectedC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.selecteP = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
  }
  onChange() {
    if (this.toggleLabel.value == 'Show parameters') {
      this.toggleLabel.setValue('Hide parameters');
    } else {
      this.toggleLabel.setValue('Show parameters');
    }
  }
  onChangeQuality() {
    var PD = this.selectedQ.value;
    if (PD != "Qualities") {
      this.service.getForGraph(PD).subscribe(dt => {
        var qData = dt.map((item, index) => ({
          name: [item.Vineyard],
          data: [item.Quality / item.DIV]
        }));
        this.QualityChart(qData, "Qualities based on " + PD);
      });
    } else {
      this.retrieveData("Qualities");
    }
  }
  onChangeCost() {
    var CD = this.selectedC.value;
    if (CD != "Costs") {
      this.service.getForGraph(CD).subscribe(dt => {
        var cData = dt.map((item, index) => ({
          name: [item.Vineyard],
          data: [item.Cost / item.DIV]
        }));
        this.CostChart(cData, "Costs based on " + CD);
      });
    } else {
      this.retrieveData("Costs");
    }
  }
  onChangeColor() {
    var Pro = this.selecteP.value;
    this.retrieveDataColor(Pro);
  }
  ngOnInit() {
    this.retrieveProducerList();
    this.retrieveData("init");
    this.retrieveDataColor("init");
  }
  retrieveProducerList() {
    this.service.getMetadata().subscribe(dt => {
      this.producers = dt;
    });
  }
  retrieveData(sh) {
    this.service.getMetadata().subscribe(dt => {
      var qData = dt.map((item, index) => ({
        name: [item.Vineyard],
        data: [item.Quality]
      }));
      var cData = dt.map((item, index) => ({
        name: [item.Vineyard],
        data: [item.Cost]
      }));
      var qpcData = dt.map((item, index) => ({
        name: [item.Vineyard],
        data: [item.Quality / item.Cost]
      }));
      if (sh == "init") {
        this.QualityChart(qData, "Qualities");
        this.CostChart(cData, "Costs");
        this.QPCChart(qpcData);
      } else if (sh == "Qualities") {
        this.QualityChart(qData, "Qualities");
      } else if (sh == "Costs") {
        this.CostChart(cData, "Costs");
      }
    });
  }
  retrieveDataColor(sh) {
    var ID;
    if (sh == "init") {
      ID = "2013G_2018";
    } else {
      ID = sh;
    }
    this.service.getColorList(ID).subscribe(dt => {
      var colorData = dt.map(item => ({
        name: [item.Vineyard],
        data: [['Yellow', item.Yellow], ['Red', item.Red], ['Blue', item.Blue]],
        colors: ["#F9E79F", "#CD6155", "#2980B9"]
      }));
      this.ColorChart(colorData, dt[0].Vineyard);
    });
  }
  QualityChart(dt, str) {
    this.quality_chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Wind Qualities'
      },
      //subtitle:{ text: 'Keep on working'},
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        categories: [str]
      },
      series: dt
    };
  }
  CostChart(t, str) {
    this.cost_chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Costs'
      },
      //subtitle:{ text: 'Keep on working'},
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        categories: [str]
      },
      series: t
    };
  }
  ColorChart(t, str) {
    this.color_chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Berry colors'
      },
      subtitle: {
        text: str
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      series: t
    };
  }
  QPCChart(t) {
    this.qpc_chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Quality/Cost'
      },
      //subtitle:{ text: 'Keep on working'},
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        categories: ['Quality/Cost']
      },
      series: t
    };
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 53,
    vars: 16,
    consts: [["value", "false", 3, "formControl", "click", "change"], [3, "formControl"], ["id", "containerChart", 1, "container", 3, "hasBackdrop"], ["containerChart", ""], ["mode", "side", "opened", ""], ["drawer", ""], ["id", "idQ", 3, "formControl", "selectionChange"], ["value", "Qualities"], ["value", "Ethyl_butanoate"], ["value", "Butanoic_acid"], ["value", "Hexanoic_acid"], ["value", "Octanoic_acid"], ["id", "idC", 3, "formControl", "selectionChange"], ["value", "Costs"], [3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"], [3, "value"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_slide_toggle_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r1.toggle());
        })("change", function DashboardComponent_Template_mat_slide_toggle_change_0_listener() {
          return ctx.onChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-drawer-container", 2, 3)(5, "mat-drawer", 4, 5)(7, "tr")(8, "mat-form-field")(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Quality chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function DashboardComponent_Template_mat_select_selectionChange_11_listener() {
          return ctx.onChangeQuality();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Qualities");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Qualities - Ethyl");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Qualities - Butanoic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Qualities - Hexanoic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Qualities - Octanoic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr")(23, "mat-form-field")(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Cost chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function DashboardComponent_Template_mat_select_selectionChange_26_listener() {
          return ctx.onChangeCost();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Costs - Ethyl");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Costs - Butanoic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Costs - Hexanoic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Costs - Octanoic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "tr")(38, "mat-form-field")(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Color chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function DashboardComponent_Template_mat_select_selectionChange_41_listener() {
          return ctx.onChangeColor();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DashboardComponent_mat_option_42_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tr")(44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "highcharts-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "highcharts-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tr")(49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "highcharts-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "highcharts-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.toggleLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.toggleLabel.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.selectedQ);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.selectedC);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.selecteP);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.producers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Highcharts", ctx.qualitychart)("options", ctx.quality_chartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Highcharts", ctx.costChart)("options", ctx.cost_chartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Highcharts", ctx.colorchart)("options", ctx.color_chartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Highcharts", ctx.QPC_chart)("options", ctx.qpc_chartOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, highcharts_angular__WEBPACK_IMPORTED_MODULE_5__.HighchartsChartComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawerContainer, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption],
    styles: [".container[_ngcontent-%COMP%] {\n    width: 1440px;\n    height: 900px;\n    margin: 12px;\n    border: 1px solid #FFF;\n  }\n  \n  mat-drawer-content[_ngcontent-%COMP%] {\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgaGVpZ2h0OiA5MDBweDtcclxuICAgIG1hcmdpbjogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3409:
/*!**********************************************!*\
  !*** ./src/app/dataset/dataset.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetComponent: () => (/* binding */ DatasetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata/metadata.component */ 9294);
/* harmony import */ var _physical_physical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../physical/physical.component */ 4050);
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../download/download.component */ 752);





class DatasetComponent {
  static #_ = this.ɵfac = function DatasetComponent_Factory(t) {
    return new (t || DatasetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DatasetComponent,
    selectors: [["app-dataset"]],
    decls: 7,
    vars: 0,
    consts: [["color", "accent"], ["label", "Metadata"], ["label", "Physical data"], ["label", "Download"]],
    template: function DatasetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab-group", 0)(1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-physical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_0__.MetadataComponent, _physical_physical_component__WEBPACK_IMPORTED_MODULE_1__.PhysicalComponent, _download_download_component__WEBPACK_IMPORTED_MODULE_2__.DownloadComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 752:
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadComponent: () => (/* binding */ DownloadComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ 2002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service.service */ 3378);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-filesaver */ 1021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);










function DownloadComponent_mat_header_cell_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DownloadComponent_mat_cell_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r11.Position);
  }
}
function DownloadComponent_mat_header_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dataset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DownloadComponent_mat_cell_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.Dataset);
  }
}
function DownloadComponent_mat_header_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DownloadComponent_mat_cell_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r13.Description);
  }
}
function DownloadComponent_mat_header_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function DownloadComponent_mat_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
function DownloadComponent_mat_header_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download (.xlsx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DownloadComponent_mat_cell_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell")(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_mat_cell_16_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const row_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.onDowload(row_r15.Dataset));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class DownloadComponent {
  constructor(service, fileSaver) {
    this.service = service;
    this.fileSaver = fileSaver;
    this.displayedColumns = ['Position', 'Dataset', 'Description', 'Options'];
    this.element_Data = [{
      Position: 1,
      Dataset: 'Metadata',
      Description: 'This data is detailed on harvesting, producers and etc.'
    }, {
      Position: 2,
      Dataset: 'Physical_Data',
      Description: 'This data is detailed on physical properties of the berry.'
    }, {
      Position: 3,
      Dataset: 'AromaLincoln',
      Description: 'This data is detailed on the aroma of 18 bottles of wine, from different regions.'
    }, {
      Position: 4,
      Dataset: 'Berry_OD',
      Description: 'This data contains the berry OD, based on different chemical characters'
    }, {
      Position: 5,
      Dataset: 'Color_Lincoln',
      Description: 'This data give details of the colors of berry from different regions '
    }, {
      Position: 6,
      Dataset: 'Comp_Kea_Berry_Vs_AWRI',
      Description: 'This data is detailed on the wine composition such a water, ethanol, pH and etc.'
    }, {
      Position: 7,
      Dataset: 'Oenological_analysis_PFR',
      Description: 'Oenological analysis, rigorous quality control that guarantees that the wine is safe and of the highest quality.'
    }];
  }
  ngOnInit() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.element_Data);
  }
  onDowload(strTable) {
    // const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    // const EXCEL_EXTENSION = '.xlsx';
    // const fileName = strTable+".xlsx";
    //const dt:any;
    //this.http.get(this.APIUrl+'forDownloadData?strTable='+strTable).subscribe(data=> {
    if (strTable == "Metadata") {
      this.Metadata(strTable);
    } else if (strTable == "Physical_Data") {
      this.Physical_Data(strTable);
    } else if (strTable == "AromaLincoln") {
      this.AromaLincoln(strTable);
    } else if (strTable == "Berry_OD") {
      this.Berry_OD(strTable);
    } else if (strTable == "Color_Lincoln") {
      this.Color_Lincoln(strTable);
    } else if (strTable == "Comp_Kea_Berry_Vs_AWRI") {
      this.Comp_Kea_Berry_Vs_AWRI(strTable);
    } else if (strTable == "Oenological_analysis_PFR") {
      this.Oenological_analysis_PFR(strTable);
    }
  }
  Metadata(strTable) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable + ".xlsx";
    this.service.getMetadata().subscribe(data => {
      const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(data);
      const workBook = {
        Sheets: {
          'Sheet1': workSheet
        },
        SheetNames: ['Sheet1']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workBook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      this.fileSaver.save(blobData, fileName);
    });
  }
  Physical_Data(strTable) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable + ".xlsx";
    this.service.getPhysicalData().subscribe(data => {
      const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(data);
      const workBook = {
        Sheets: {
          'Sheet1': workSheet
        },
        SheetNames: ['Sheet1']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workBook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      this.fileSaver.save(blobData, fileName);
    });
  }
  AromaLincoln(strTable) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable + ".xlsx";
    this.service.getAromaLincoln().subscribe(data => {
      const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(data);
      const workBook = {
        Sheets: {
          'Sheet1': workSheet
        },
        SheetNames: ['Sheet1']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workBook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      this.fileSaver.save(blobData, fileName);
    });
  }
  Berry_OD(strTable) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable + ".xlsx";
    this.service.getBerry_OD().subscribe(data => {
      const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(data);
      const workBook = {
        Sheets: {
          'Sheet1': workSheet
        },
        SheetNames: ['Sheet1']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workBook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      this.fileSaver.save(blobData, fileName);
    });
  }
  Color_Lincoln(strTable) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable + ".xlsx";
    this.service.getColor_Lincoln().subscribe(data => {
      const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(data);
      const workBook = {
        Sheets: {
          'Sheet1': workSheet
        },
        SheetNames: ['Sheet1']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workBook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      this.fileSaver.save(blobData, fileName);
    });
  }
  Comp_Kea_Berry_Vs_AWRI(strTable) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable + ".xlsx";
    this.service.getComp_Kea_Berry_Vs_AWRI().subscribe(data => {
      const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(data);
      const workBook = {
        Sheets: {
          'Sheet1': workSheet
        },
        SheetNames: ['Sheet1']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workBook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      this.fileSaver.save(blobData, fileName);
    });
  }
  Oenological_analysis_PFR(strTable) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable + ".xlsx";
    this.service.getOenological_analysis_PFR().subscribe(data => {
      const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(data);
      const workBook = {
        Sheets: {
          'Sheet1': workSheet
        },
        SheetNames: ['Sheet1']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workBook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      this.fileSaver.save(blobData, fileName);
    });
  }
  static #_ = this.ɵfac = function DownloadComponent_Factory(t) {
    return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__.FileSaverService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DownloadComponent,
    selectors: [["app-download"]],
    decls: 17,
    vars: 4,
    consts: [["id", "containerChart", 1, "container", 3, "hasBackdrop"], ["containerChart", ""], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Dataset"], ["matColumnDef", "Description"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "Options"], [4, "matHeaderCellDef"], ["mat-sort-header", ""], ["mat-icon-button", "", "color", "warn", 3, "click"]],
    template: function DownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-drawer-container", 0, 1)(2, "mat-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DownloadComponent_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DownloadComponent_mat_cell_5_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DownloadComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DownloadComponent_mat_cell_8_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DownloadComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DownloadComponent_mat_cell_11_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DownloadComponent_mat_header_row_12_Template, 1, 0, "mat-header-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DownloadComponent_mat_row_13_Template, 1, 0, "mat-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DownloadComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DownloadComponent_mat_cell_16_Template, 4, 0, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawerContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
    styles: [".container[_ngcontent-%COMP%] {\n    width: 1400px;\n    height: 500px;\n    margin: 12px;\n    border: 1px solid #FFF;\n  }\n  \nmat-drawer-content[_ngcontent-%COMP%] {\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7QUFFRjtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxNDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBtYXJnaW46IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgfVxuICBcbm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4556:
/*!*********************************************!*\
  !*** ./src/app/info/info/info.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoComponent: () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 8497);


class InfoComponent {
  constructor() {
    this.Dev = "Sarawoot Somin";
    this.Dev_info = "PhD degree: Computational Modelling and Systems Biology, Faculty of Agriculture and Life Sciences, Lincoln University, New Zealand";
    this.Research_team = "Parul Tiwari 1,2, Piyush Bhardwaj 1,2, Sarawoot Somin 1,2, Wendy V. Parr 2 , Roland Harrison and Don Kulasiri 1,2,*";
    this.Dep1 = "Affiliation 1: Centre for Advanced Computational Solutions (C-fACS), Lincoln University, Christchurch 7647, New Zealand";
    this.Dep2 = "Affiliation 2: Department of Wine, Food and Molecular Biosciences, Lincoln University, Christchurch 7647, New Zealand";
    this.Cor = "Prof. Don Kulasiri; email: don.kulasiri@lincoln.ac.nz";
    this.content1 = "This study develops a conceptual and mathematical framework to predict " + ".wine quality, and then validated these using a large dataset with machine learning approaches. It is " + "worth noting that the predicted wine quality indices are in good agreement with the wine experts  " + "perceived quality ratings We used sample data from Pinot noir wines from different regions of New Zealand to " + "develop a mathematical model that can predict wine quality, and applied dimensional analysis with " + "the Buckingham Pi theorem to determine the mathematical relationship among different chemical " + "and physiochemical compounds.";
    this.content2 = "Eighteen commercial Pinot noir wines from five NZ regions were employed, the " + "same 18 wines in each of the two experiments (Table 1). Fifteen wines were from the " + "2016 vintage, and 3 from the 2013 vintage. Four producers had two wines each in the " + "18-wine sample set, and each of the other 10 wines was produced by a different company. " + "Wines were selected as representatives of the major Pinot noir producing areas of NZ. " + "As well, they spanned a range in terms of recommended retail price (RRP), price often " + "linked anecdotally with quality. The details of the 18 wines can be seen in Table 1, along " + "with several viniviticultural properties (e.g., wine region and method of production) that " + "were used as controlling factors, i.e., to ensure the representative nature of the sample of " + "wines selected. The viniviticultural factors were not treated as independent variables in " + "the present study for valid reasons (e.g., low and unequal numbers in some cells). The " + "two experiments were conducted 9 months apart so that the wines in Experiment 2 had " + "9 months more bottle age than the same wines employed in Experiment 1";
    this.table1 = "assets/img/Table1.png";
    this.table1_description = "Table1. The 18 wines employed in the two experiments.";
    this.content21 = "In the conceptual framework of developing a mathematical model for quality indices " + "we focused on essential modulators by keeping in mind the complex nature of Pinot noir " + "wine (Figure 1). The selection of these parameters plays a vital role in making accurate predictions " + "about an individual wine’s quality, and requires careful study and technical knowledge " + "of the chemical quantities that exist in the wine bottle. The more abstract concepts of " + "wine balance, harmony of components, varietal typicality and so forth, are also major " + "drivers of a wine’s perceived quality. As well, the mouthfeel or trigeminal sensations of " + "astringency and softness are pivotal to the perceived quality (our sensory data demonstrate " + "this emphatically), as well as the tastes of sourness and bitterness. We have selected " + "modulators representing fruity, herbal, floral, woody, and other flavours, such as spicy ";
    this.fig1 = "assets/img/fig1.png";
    this.fig1_description = "Figure 1. Flow chart for selecting essential modulators for mathematical development of the mode";
    this.content3 = "In conclusion, we can say that the mathematical framework provides a solid scientific " + "background for model development. The use of machine learning approaches validated " + "this model and helped to speed up the computing process. Advanced machine learning algorithms provided an effective tool for understanding the complex nature of wine datasets, " + "and conveyed useful information related to wine quality. Based on the proposed approach, " + "we are developing a machine learning-based web application that wine researchers and " + "wine producers can use to forecast wine quality based on some specific features that are " + "present in their wines, and that can be tuned for different variable amounts. ";
  }
  static #_ = this.ɵfac = function InfoComponent_Factory(t) {
    return new (t || InfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InfoComponent,
    selectors: [["app-info"]],
    decls: 60,
    vars: 15,
    consts: [[1, "map-frame", 2, "width", "600px", "height", "400px", 3, "src"], [1, "map-frame", 2, "width", "600px", "height", "600px", 3, "src"]],
    template: function InfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Developer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header")(5, "mat-card-content")(6, "mat-card-subtitle")(7, "b")(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-header")(14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Research team:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-header")(17, "mat-card-content")(18, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-header")(25, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Correspondence:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-header")(28, "mat-card-content")(29, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-header")(32, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Proposal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-header")(35, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-header")(38, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Experiments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-header")(41, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-header")(48, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-header")(55, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Conclusions:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-header")(58, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Dev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Dev_info, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Dep1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Research_team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Dep1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Dep2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Cor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.table1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.table1_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fig1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fig1_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content3);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service.service */ 3378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);











function LoginComponent_form_2_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The username and password were not recognized ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_2_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.loginSubmited());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Admin sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginComponent_form_2_mat_error_3_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Please provide a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Please provide a valid password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.loginValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.loginForm.invalid);
  }
}
function LoginComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.logoutSubmited());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.displayEmail, ", signed in");
  }
}
class LoginComponent {
  constructor(service, http) {
    this.service = service;
    this.http = http;
    this.loginValid = true;
    this.nonMember = true;
    this.APIUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIUrl;
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      EMAIL: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
      PASSWORD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(15)])
    });
    this.dtUserPWD = [];
    this.displayEmail = " Admin";
  }
  refreshScreen() {
    if (localStorage.getItem('session') != null) {
      this.nonMember = false;
      this.displayEmail = "" + localStorage.getItem('session');
    }
  }
  ngOnInit() {
    this.refreshScreen();
  }
  loginSubmited() {
    var strEmail = this.Email.value;
    var strPWD = this.PWD.value;
    var formData = new FormData();
    formData.append("email", strEmail);
    formData.append("pwd", strPWD);
    this.http.post(this.APIUrl + 'GetUserPWD', formData).subscribe(dt => {
      console.log("email:" + dt);
      //this.service.getUser().subscribe(dt=>{
      this.dtUserPWD = dt;
      var len = this.dtUserPWD.length;
      if (len == 1) {
        this.loginValid = true;
        this.nonMember = false;
        localStorage.setItem('session', strEmail);
        this.refreshScreen();
        window.location.reload();
        //this.redirectScreen();
      } else {
        this.loginValid = false;
        localStorage.setItem('session', "nonMember");
      }
    });
    this.http.get(this.APIUrl + 'GetUserPWD').subscribe(dt => {
      console.log("email:" + dt);
      //this.service.getUser().subscribe(dt=>{
      this.dtUserPWD = dt;
      var len = this.dtUserPWD.length;
      if (len == 1) {
        this.loginValid = true;
        this.nonMember = false;
        localStorage.setItem('session', strEmail);
        this.refreshScreen();
        window.location.reload();
        //this.redirectScreen();
      } else {
        this.loginValid = false;
        localStorage.setItem('session', "nonMember");
      }
    });
  }
  logoutSubmited() {
    this.nonMember = true;
    localStorage.removeItem('session');
    window.location.reload();
    //this.refreshScreen();
  }

  get Email() {
    return this.loginForm.get('EMAIL');
  }
  get PWD() {
    return this.loginForm.get('PASSWORD');
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 4,
    vars: 2,
    consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], ["matInput", "", "type", "EMAIL", "placeholder", "EMAIL", "formControlName", "EMAIL", "id", "EMAIL", "name", "EMAIL", "required", ""], ["matInput", "", "type", "PASSWORD", "placeholder", "PASSWORD", "formControlName", "PASSWORD", "id", "PASSWORD", "name", "PASSWORD", "required", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "color", "primary"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 15, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 5, 2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nonMember);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nonMember);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError],
    styles: ["mat-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 2em auto;\n    text-align: center;\n  }\n  \n  mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztFQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMmVtIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4493:
/*!*****************************************************************!*\
  !*** ./src/app/metadata/add-metadata/add-metadata.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMetadataComponent: () => (/* binding */ AddMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/service.service */ 3378);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);








class AddMetadataComponent {
  constructor(service, dialogRef) {
    this.service = service;
    this.dialogRef = dialogRef;
    this.title = 'Adding Metadata';
    this.addMetadataRequest = {
      ID: '',
      Producer_Abbrev: '',
      Producer: '',
      Vineyard: '',
      Vintage: '',
      Region: '',
      Cost: 0,
      Uses: '',
      Closure: '',
      Harvest: '',
      Yield: '',
      Production: '',
      Viticulture: '',
      Quality: 0,
      Layer_ID: '',
      Layer_ID1: '',
      DIV: 0
    };
  }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form) {
    if (form != null) form.resetForm();
  }
  onSubmit(form) {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember") {
      alert('Only admins and superusers are allowed.');
    } else {
      this.service.addMetadata(this.addMetadataRequest).subscribe(data => {
        alert(data);
        form.resetForm();
      });
    }
  }
  onCancel() {
    this.dialogRef.close();
    this.service.filter('Register click');
  }
  static #_ = this.ɵfac = function AddMetadataComponent_Factory(t) {
    return new (t || AddMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AddMetadataComponent,
    selectors: [["app-add-metadata"]],
    decls: 91,
    vars: 23,
    consts: [["mat-dialog-title", ""], [1, "form1", 3, "ngSubmit"], ["form", "ngForm"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "ID", "name", "ID", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Producer_Abbrev", "name", "Producer_Abbrev", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Producer", "name", "Producer", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Vineyard", "name", "Vineyard", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "id", "Vintage", "name", "Vintage", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Region", "name", "Region", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Cost", "name", "Cost", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Uses", "name", "Uses", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Closure", "name", "Closure", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Harvest", "name", "Harvest", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Yield", "name", "Yield", 3, "ngModel", "ngModelChange"], ["aria-label", "Select an option", "name", "Production", 3, "ngModel", "ngModelChange"], ["value", "high"], ["value", "low"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Viticulture", "name", "Viticulture", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Quality", "name", "Quality", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Layer_ID", "name", "Layer_ID", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Layer_ID1", "name", "Layer_ID1", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "color", "warn", 1, "close", 3, "click"]],
    template: function AddMetadataComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "mat-dialog-content")(4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddMetadataComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.addMetadataRequest.ID = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Producer abbrev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.addMetadataRequest.Producer_Abbrev = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Producer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.addMetadataRequest.Producer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Vineyard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.addMetadataRequest.Vineyard = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field")(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Vintage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_select_ngModelChange_25_listener($event) {
          return ctx.addMetadataRequest.Vintage = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "2028");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "2031");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field")(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_41_listener($event) {
          return ctx.addMetadataRequest.Region = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field")(43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_45_listener($event) {
          return ctx.addMetadataRequest.Cost = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-form-field")(47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_49_listener($event) {
          return ctx.addMetadataRequest.Uses = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field")(51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_53_listener($event) {
          return ctx.addMetadataRequest.Closure = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field")(55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Harvest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_57_listener($event) {
          return ctx.addMetadataRequest.Harvest = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-form-field")(59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Yield");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_61_listener($event) {
          return ctx.addMetadataRequest.Yield = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_mat_radio_group_ngModelChange_64_listener($event) {
          return ctx.addMetadataRequest.Production = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "high");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-form-field")(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Viticulture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_72_listener($event) {
          return ctx.addMetadataRequest.Viticulture = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-form-field")(74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_76_listener($event) {
          return ctx.addMetadataRequest.Quality = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-form-field")(78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Layer_ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_80_listener($event) {
          return ctx.addMetadataRequest.Layer_ID = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-form-field")(82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Layer_ID1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMetadataComponent_Template_input_ngModelChange_84_listener($event) {
          return ctx.addMetadataRequest.Layer_ID1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div")(88, "mat-dialog-content")(89, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddMetadataComponent_Template_button_click_89_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Producer_Abbrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Producer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Vineyard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Vintage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2013);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2016);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2019);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2025);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2028);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2031);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Region);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Uses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Closure);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Harvest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Yield);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Production);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Viticulture);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Quality);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Layer_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addMetadataRequest.Layer_ID1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel],
    styles: [".form1[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.form1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.close[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWV0YWRhdGEvYWRkLW1ldGFkYXRhL2FkZC1tZXRhZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybTEgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNsb3Nle1xuICAgIHdpZHRoOiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2527:
/*!*******************************************************************!*\
  !*** ./src/app/metadata/edit-metadata/edit-metadata.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditMetadataComponent: () => (/* binding */ EditMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/service.service */ 3378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);











function EditMetadataComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r3.display);
  }
}
function EditMetadataComponent_mat_radio_button_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const radio_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", radio_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](radio_r4.id);
  }
}
// import { FormControl } from '@angular/forms';
class EditMetadataComponent {
  // dataSource!: MatTableDataSource<any>;
  constructor(dialogRef, route, service, dataForEdit) {
    this.dialogRef = dialogRef;
    this.route = route;
    this.service = service;
    this.dataForEdit = dataForEdit;
    this.title = 'Details of metadata';
    this.MetadataDetails = {
      ID: '',
      Producer_Abbrev: '',
      Producer: '',
      Vineyard: '',
      Vintage: '',
      Region: '',
      Cost: 0,
      Uses: '',
      Closure: '',
      Harvest: '',
      Yield: '',
      Production: '',
      Viticulture: '',
      Quality: 0,
      Layer_ID: '',
      Layer_ID1: '',
      DIV: 0
    };
    this.options = [{
      id: 2013,
      display: "2013"
    }, {
      id: 2016,
      display: "2016"
    }, {
      id: 2019,
      display: "2019"
    }, {
      id: 2023,
      display: "2023"
    }, {
      id: 2025,
      display: "2025"
    }, {
      id: 2028,
      display: "2028"
    }, {
      id: 2031,
      display: "2031"
    }];
    this.radios = [{
      id: "Low",
      bool: false
    }, {
      id: "High",
      boo: false
    }];
  }
  //radios = [{id: "Low", check: true}, {id: "High", check: true}]
  ngOnInit() {
    this.MetadataDetails = this.dataForEdit;
    console.log(this.MetadataDetails);
    // if(this.radios[0][0] == this.dataForEdit.Production) this.radios[0][0] = true;
    // else this.radios[0][1] = true;
    // console.log(this.radios);
  }

  onSubmit(form) {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember") {
      alert('Only admins and superusers are allowed.');
    } else {
      this.service.updateMetadata(this.MetadataDetails).subscribe(data => {
        alert(data);
        this.dialogRef.close();
        this.service.filter('Register click');
      });
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function EditMetadataComponent_Factory(t) {
    return new (t || EditMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EditMetadataComponent,
    selectors: [["app-edit-metadata"]],
    decls: 81,
    vars: 19,
    consts: [["mat-dialog-title", ""], ["autocomplete", "off", 1, "form1", 3, "ngSubmit"], ["form", "ngForm"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Producer_Abbrev", "name", "Producer_Abbrev", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Producer", "name", "Producer", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Vineyard", "name", "Vineyard", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "id", "Vintage", "name", "Vintage", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Region", "name", "Region", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Cost", "name", "Cost", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Uses", "name", "Uses", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Closure", "name", "Closure", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Harvest", "name", "Harvest", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Yield", "name", "Yield", 3, "ngModel", "ngModelChange"], ["aria-label", "Select an option", "id", "Production", "name", "Production", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Viticulture", "name", "Viticulture", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Quality", "name", "Quality", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Layer_ID", "name", "Layer_ID", 3, "ngModel", "ngModelChange"], ["matInput", "", "minlength", "2", "type", "text", "id", "Layer_ID1", "name", "Layer_ID1", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "color", "warn", 1, "close", 3, "click"], [3, "value"]],
    template: function EditMetadataComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "mat-dialog-content")(4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditMetadataComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "td")(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Producer abbrev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.MetadataDetails.Producer_Abbrev = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Producer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.MetadataDetails.Producer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Vineyard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_24_listener($event) {
          return ctx.MetadataDetails.Vineyard = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field")(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Vintage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_select_ngModelChange_28_listener($event) {
          return ctx.MetadataDetails.Vintage = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EditMetadataComponent_option_29_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field")(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_33_listener($event) {
          return ctx.MetadataDetails.Region = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field")(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_37_listener($event) {
          return ctx.MetadataDetails.Cost = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field")(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_41_listener($event) {
          return ctx.MetadataDetails.Uses = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field")(43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_45_listener($event) {
          return ctx.MetadataDetails.Closure = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-form-field")(47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Harvest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_49_listener($event) {
          return ctx.MetadataDetails.Harvest = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field")(51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Yield");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_53_listener($event) {
          return ctx.MetadataDetails.Yield = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-radio-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_mat_radio_group_ngModelChange_54_listener($event) {
          return ctx.MetadataDetails.Production = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-label")(56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EditMetadataComponent_mat_radio_button_58_Template, 2, 2, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-form-field")(60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Viticulture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_62_listener($event) {
          return ctx.MetadataDetails.Viticulture = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-form-field")(64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_66_listener($event) {
          return ctx.MetadataDetails.Quality = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-form-field")(68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Layer_ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_70_listener($event) {
          return ctx.MetadataDetails.Layer_ID = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-form-field")(72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Layer_ID1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_74_listener($event) {
          return ctx.MetadataDetails.Layer_ID1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div")(78, "mat-dialog-content")(79, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditMetadataComponent_Template_button_click_79_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.MetadataDetails.ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Producer_Abbrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Producer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Vineyard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Vintage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Region);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Uses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Closure);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Harvest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Yield);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Production);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.radios);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Viticulture);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Quality);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Layer_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.MetadataDetails.Layer_ID1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel],
    styles: [".form1[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.form1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.close[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWV0YWRhdGEvZWRpdC1tZXRhZGF0YS9lZGl0LW1ldGFkYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtMSA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xvc2V7XG4gICAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9294:
/*!************************************************!*\
  !*** ./src/app/metadata/metadata.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataComponent: () => (/* binding */ MetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _show_metadata_show_metadata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-metadata/show-metadata.component */ 6974);


class MetadataComponent {
  static #_ = this.ɵfac = function MetadataComponent_Factory(t) {
    return new (t || MetadataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MetadataComponent,
    selectors: [["app-metadata"]],
    decls: 1,
    vars: 0,
    template: function MetadataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-show-metadata");
      }
    },
    dependencies: [_show_metadata_show_metadata_component__WEBPACK_IMPORTED_MODULE_0__.ShowMetadataComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6974:
/*!*******************************************************************!*\
  !*** ./src/app/metadata/show-metadata/show-metadata.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowMetadataComponent: () => (/* binding */ ShowMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var src_app_metadata_add_metadata_add_metadata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/metadata/add-metadata/add-metadata.component */ 4493);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _edit_metadata_edit_metadata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-metadata/edit-metadata.component */ 2527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ 3378);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);

















function ShowMetadataComponent_mat_header_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r21.ID);
  }
}
function ShowMetadataComponent_mat_header_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Producer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r22.Producer);
  }
}
function ShowMetadataComponent_mat_header_cell_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Vineyard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r23.Vineyard);
  }
}
function ShowMetadataComponent_mat_header_cell_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r24.Region);
  }
}
function ShowMetadataComponent_mat_header_cell_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Uses");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r25.Uses);
  }
}
function ShowMetadataComponent_mat_header_cell_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Harvest");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r26.Harvest);
  }
}
function ShowMetadataComponent_mat_header_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Yield");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r27.Yield);
  }
}
function ShowMetadataComponent_mat_header_cell_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Viticulture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r28.Viticulture);
  }
}
function ShowMetadataComponent_mat_header_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
  }
}
function ShowMetadataComponent_mat_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
  }
}
function ShowMetadataComponent_mat_header_cell_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowMetadataComponent_mat_cell_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell")(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowMetadataComponent_mat_cell_39_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const row_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.onEdit(row_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowMetadataComponent_mat_cell_39_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const row_r30 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.onDelete(row_r30.ID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function () {
  return [10, 25, 100];
};
class ShowMetadataComponent {
  constructor(service, dialog) {
    this.service = service;
    this.dialog = dialog;
    this.displayedColumns = ['ID', 'Producer', 'Vineyard', 'Region', 'Uses', 'Harvest', 'Yield', 'Viticulture', 'Options'];
    //for refresh screen after  add or edit/delete
    this.service.listen().subscribe(data => {
      this.refeshList();
    });
  }
  ngOnInit() {
    this.refeshList();
  }
  refeshList() {
    this.service.getMetadata().subscribe(data => {
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(data);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "90%";
    dialogConfig.width = "60%";
    this.dialog.open(src_app_metadata_add_metadata_add_metadata_component__WEBPACK_IMPORTED_MODULE_0__.AddMetadataComponent, dialogConfig);
  }
  onEdit(meta) {
    //  console.log(meta.ID);
    //  const dialogConfig = new MatDialogConfig();
    //  dialogConfig.disableClose = true;
    //  dialogConfig.autoFocus = true;
    //  dialogConfig.width = "70%";
    this.dialog.open(_edit_metadata_edit_metadata_component__WEBPACK_IMPORTED_MODULE_1__.EditMetadataComponent, {
      height: '90%',
      width: '60%',
      data: meta
    });
  }
  onDelete(id) {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember") {
      alert('Only admins and superusers are allowed.');
    } else {
      if (confirm('Do you persist in deleting: ' + id + '?')) this.service.deleteMetadata(id).subscribe(data => {
        alert(data);
        this.refeshList();
      });
    }
  }
  static #_ = this.ɵfac = function ShowMetadataComponent_Factory(t) {
    return new (t || ShowMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ShowMetadataComponent,
    selectors: [["app-show-metadata"]],
    viewQuery: function ShowMetadataComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 41,
    vars: 6,
    consts: [["id", "containerChart", 1, "container", 3, "hasBackdrop"], ["containerChart", ""], ["matInput", "", "placeholder", "Keyword search", 3, "keyup"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "ID"], ["mat-sort-header", "", "sortActionDescription", "Sort by name", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Producer"], ["mat-sort-header", "", "sortActionDescription", "Sort by Producer", 4, "matHeaderCellDef"], ["matColumnDef", "Vineyard"], ["mat-sort-header", "", "sortActionDescription", "Sort by Vineyard", 4, "matHeaderCellDef"], ["matColumnDef", "Region"], ["mat-sort-header", "", "sortActionDescription", "Sort by Region", 4, "matHeaderCellDef"], ["matColumnDef", "Uses"], ["mat-sort-header", "", "sortActionDescription", "Sort by Uses", 4, "matHeaderCellDef"], ["matColumnDef", "Harvest"], ["mat-sort-header", "", "sortActionDescription", "Sort by Harvest", 4, "matHeaderCellDef"], ["matColumnDef", "Yield"], ["mat-sort-header", "", "sortActionDescription", "Sort by Yield", 4, "matHeaderCellDef"], ["matColumnDef", "Viticulture"], ["mat-sort-header", "", "sortActionDescription", "Sort by Viticulture", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "Options"], [4, "matHeaderCellDef"], ["aria-label", "select page of users", 3, "pageSizeOptions"], ["mat-sort-header", "", "sortActionDescription", "Sort by name"], ["mat-sort-header", "", "sortActionDescription", "Sort by Producer"], ["mat-sort-header", "", "sortActionDescription", "Sort by Vineyard"], ["mat-sort-header", "", "sortActionDescription", "Sort by Region"], ["mat-sort-header", "", "sortActionDescription", "Sort by Uses"], ["mat-sort-header", "", "sortActionDescription", "Sort by Harvest"], ["mat-sort-header", "", "sortActionDescription", "Sort by Yield"], ["mat-sort-header", "", "sortActionDescription", "Sort by Viticulture"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
    template: function ShowMetadataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-drawer-container", 0, 1)(2, "td")(3, "mat-form-field")(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Filter Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ShowMetadataComponent_Template_input_keyup_6_listener($event) {
          return ctx.applyFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowMetadataComponent_Template_button_click_8_listener() {
          return ctx.onAdd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ShowMetadataComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ShowMetadataComponent_mat_cell_13_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ShowMetadataComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ShowMetadataComponent_mat_cell_16_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ShowMetadataComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ShowMetadataComponent_mat_cell_19_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ShowMetadataComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ShowMetadataComponent_mat_cell_22_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ShowMetadataComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ShowMetadataComponent_mat_cell_25_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ShowMetadataComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ShowMetadataComponent_mat_cell_28_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ShowMetadataComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ShowMetadataComponent_mat_cell_31_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ShowMetadataComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ShowMetadataComponent_mat_cell_34_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ShowMetadataComponent_mat_header_row_35_Template, 1, 0, "mat-header-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ShowMetadataComponent_mat_row_36_Template, 1, 0, "mat-row", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ShowMetadataComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ShowMetadataComponent_mat_cell_39_Template, 7, 0, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "mat-paginator", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
      }
    },
    dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawerContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
    styles: [".container[_ngcontent-%COMP%] {\n    width: 1440px;\n    height: 900px;\n    margin: 12px;\n    border: 1px solid #FFF;\n  }\n  \n  mat-drawer-content[_ngcontent-%COMP%] {\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWV0YWRhdGEvc2hvdy1tZXRhZGF0YS9zaG93LW1ldGFkYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTQ0MHB4O1xuICAgIGhlaWdodDogOTAwcHg7XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIH1cbiAgXG4gIG1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6010:
/*!************************************!*\
  !*** ./src/app/ml/ml.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MlComponent: () => (/* binding */ MlComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5080);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service.service */ 3378);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ 8578);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ 549);















class MlComponent {
  formatLabel(value) {
    return `${value}`;
  }
  constructor(service) {
    this.service = service;
    this.displayedColumns = ['data1', 'data2', 'data3'];
    //dataSource: any = [];
    this.chart1 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.chart2 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.chart3 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.chart4 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.toggle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('toggle');
    this.toggleLabel = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('Show parameters');
    this.slider = {
      Cluster_number: 23.0,
      Cluster_weight: 144.0,
      Shoot_number_more_5mm: 12.0,
      Vine_canopy: 0.5,
      Leaf_Area_per_m: 12000.0,
      Berry_weight: 1.78
    };
  }
  onChange() {
    if (this.toggleLabel.value == 'Show parameters') {
      this.toggleLabel.setValue('Hide parameters');
    } else {
      this.toggleLabel.setValue('Show parameters');
    }
  }
  ngOnInit() {
    this.onSubmit();
  }
  // loading() {
  //   //setTimeout( () => this.loading = true, 5000 );
  //   setTimeout( () => this.onSubmit(), 10000 );
  // }
  // loaded = false;
  onSubmit() {
    //if (!this.loaded) this.loading();
    this.service.classifyAIModel(this.slider).subscribe(dt => {
      //this.loaded = true;
      const data1 = dt.filter(x => x.Yield === "Yield per wine");
      const data2 = dt.filter(x => x.Yield === "Yield per metre");
      const data3 = dt.filter(x => x.Yield === "Yield per square metre");
      const data4 = dt.filter(x => x.Yield === "Yield per square metre");
      console.log(data1);
      const qData1 = data1.map((item, index) => ({
        data: [[item.Quality, item.Value]]
      }));
      const qData2 = data2.map((item, index) => ({
        //name: [item.Yield],
        // color: 'rgba(119, 152, 191, .5)',
        data: [[item.Quality, item.Value]]
      }));
      const qData3 = data3.map((item, index) => ({
        //name: [item.Yield],
        // color: 'Red',
        data: [[item.Quality, item.Value]]
      }));
      const qData4 = data4.map((item, index) => ({
        //name: [item.Yield],
        // color: 'Red',
        data: [[item.Berry_weight_g, item.Value]]
      }));
      this.renderTopLeftChart(qData1);
      this.renderTopRightChart(qData2);
      this.renderBottomLeftChart(qData3);
      this.renderBottomRightChart(qData4);
    });
  }
  renderTopLeftChart(dt) {
    this.chartOption1 = {
      chart: {
        type: 'scatter'
      },
      title: {
        text: 'Based on yield per wine'
      },
      subtitle: {
        text: 'Quality/Value'
      },
      accessibility: {
        announceNewData: {
          enabled: false
        }
      },
      //  series: [
      //   {
      //     //name: 'Quality',
      //     //color: 'rgba(223, 83, 83, .5)',
      //     data: dt1
      //   },
      //   {
      //     //name: 'value2',
      //     //color: 'rgba(119, 152, 191, .5)',
      //     data: dt2
      //   },
      //   {
      //     //name: 'value1',
      //     //color: 'Red',
      //     data: dt3
      //   },
      //  ] 
      // xAxis: { categories:
      //     [
      //       'Yield'
      //     ]},
      // yAxis: { categories:
      //     [
      //       'Value'         
      //     ]},
      series: dt
    };
  }
  renderTopRightChart(dt) {
    this.chartOption2 = {
      chart: {
        type: 'scatter'
      },
      title: {
        text: 'based on yield per metre'
      },
      subtitle: {
        text: 'Quality/Value'
      },
      accessibility: {
        announceNewData: {
          enabled: false
        }
      },
      series: dt
    };
  }
  renderBottomLeftChart(dt) {
    this.chartOption3 = {
      chart: {
        type: 'scatter'
      },
      title: {
        text: 'Based on yield per square metre'
      },
      subtitle: {
        text: 'Quality/Value'
      },
      accessibility: {
        announceNewData: {
          enabled: false
        }
      },
      series: dt
    };
  }
  renderBottomRightChart(dt) {
    this.chartOption4 = {
      chart: {
        type: 'scatter'
      },
      title: {
        text: 'Based on berry weight per square metre'
      },
      subtitle: {
        text: 'Quality/Value'
      },
      accessibility: {
        announceNewData: {
          enabled: false
        }
      },
      series: dt
    };
  }
  static #_ = this.ɵfac = function MlComponent_Factory(t) {
    return new (t || MlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MlComponent,
    selectors: [["app-ml"]],
    viewQuery: function MlComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 52,
    vars: 22,
    consts: [["value", "false", 3, "formControl", "click", "change"], [3, "formControl"], ["id", "containerML", 1, "container", 3, "hasBackdrop"], ["containerML", ""], ["mode", "side", "opened", ""], ["drawer", ""], [3, "ngSubmit"], ["form", "ngForm"], [1, "result-card"], [1, "label-container"], ["min", "1.0", "max", "52.0", "step", "1", "discrete", "", 3, "displayWith"], ["id", "Cluster_number", "name", "Cluster_number", "matSliderThumb", "", "value", "23.0", 3, "ngModel", "ngModelChange"], ["min", "35.0", "max", "253.0", "step", "1", "discrete", "", 3, "displayWith"], ["id", "Cluster_weight", "name", "Cluster_weight", "matSliderThumb", "", "value", "144.0", 3, "ngModel", "ngModelChange"], ["min", "4.0", "max", "30.0", "step", "1", "discrete", "", 3, "displayWith"], ["id", "Shoot_number_more_5mm", "name", "Shoot_number_more_5mm", "matSliderThumb", "", "value", "12.0", 3, "ngModel", "ngModelChange"], ["min", "2800.0", "max", "32000.0", "step", "1", "discrete", "", 3, "displayWith"], ["id", "Leaf_Area_per_m", "name", "Leaf_Area_per_m", "matSliderThumb", "", "value", "12000.0", 3, "ngModel", "ngModelChange"], ["min", "1.0", "max", "2.0", "step", "0.001", "discrete", "", 3, "displayWith"], ["id", "Berry_weight", "name", "Berry_weight", "matSliderThumb", "", "value", "1.78", 3, "ngModel", "ngModelChange"], [1, "center"], ["color", "primary", "mat-raised-button", ""], [1, "container"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"]],
    template: function MlComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-dialog-content")(1, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MlComponent_Template_mat_slide_toggle_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.toggle());
        })("change", function MlComponent_Template_mat_slide_toggle_change_1_listener() {
          return ctx.onChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-drawer-container", 2, 3)(6, "mat-drawer", 4, 5)(8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MlComponent_Template_form_ngSubmit_8_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card", 8)(11, "mat-card-content")(12, "div", 9)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Cluster number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-slider", 10)(16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MlComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.slider.Cluster_number = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cluster weight: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-slider", 12)(21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MlComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.slider.Cluster_weight = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Shoot number more 5mm: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-slider", 14)(26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MlComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.slider.Shoot_number_more_5mm = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Leaf area per metre: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-slider", 16)(31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MlComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.slider.Leaf_Area_per_m = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 9)(33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Berry weight: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-slider", 18)(36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MlComponent_Template_input_ngModelChange_36_listener($event) {
          return ctx.slider.Berry_weight = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "section")(38, "div", 20)(39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Classify!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 22)(42, "tr")(43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "highcharts-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "highcharts-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tr")(48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "highcharts-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "highcharts-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.toggleLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.toggleLabel.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.slider.Cluster_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.slider.Cluster_weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.slider.Shoot_number_more_5mm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.slider.Leaf_Area_per_m);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.slider.Berry_weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Highcharts", ctx.chart1)("options", ctx.chartOption1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Highcharts", ctx.chart2)("options", ctx.chartOption2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Highcharts", ctx.chart3)("options", ctx.chartOption3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Highcharts", ctx.chart4)("options", ctx.chartOption4);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, highcharts_angular__WEBPACK_IMPORTED_MODULE_6__.HighchartsChartComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawerContainer, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSliderThumb],
    styles: [".container[_ngcontent-%COMP%] {\n    width: auto;\n    height: auto;\n    margin: 7px;\n    border: 1px solid #FFF;\n    align-items: center;\n    justify-content: center;\n  }\n\n  mat-drawer-content[_ngcontent-%COMP%] {\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  mat-slider[_ngcontent-%COMP%] {\n    padding: auto;\n    width: 170px;\n    margin: 5px;\n\n  }\n\n  .center[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n    width: 60%;\n    padding: 10px;\n  }\n\n  .label-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin: 10px 10px 0;\n    max-width: 250px;\n  }\n  .result-card[_ngcontent-%COMP%]   .value-label[_ngcontent-%COMP%] {\n    width: 290px;\n    font-weight: 600;\n  }\n \n\n  #loading[_ngcontent-%COMP%]{ \n    position: absolute; \n    left: 50%; \n    top: 50%; \n    z-index: 1; \n    width: 80px; \n    height: 80px; \n    margin: -75px 0 0 -75px; \n    border: 16px solid #f3f3f3; \n    border-radius: 50%; \n    border-top: 16px solid blueviolet; \n    width: 120px; \n    height: 120px; \n    animation: _ngcontent-%COMP%_spin 2s linear infinite; \n    } \n      \n    @keyframes _ngcontent-%COMP%_spin { \n      0% { transform: rotate(0deg); } \n      100% { transform: rotate(360deg); } \n    }\n  \n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWwvbWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXOztFQUViOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0NBQ0QsaUJBQWlCO0VBQ2hCO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDOztJQUVBO01BQ0UsS0FBSyx1QkFBdUIsRUFBRTtNQUM5QixPQUFPLHlCQUF5QixFQUFFO0lBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIG1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIG1hdC1zbGlkZXIge1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubGFiZWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAwO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgLnJlc3VsdC1jYXJkIC52YWx1ZS1sYWJlbCB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuIC8qIGZvciBzcGlubmluZyAqL1xyXG4gICNsb2FkaW5neyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBsZWZ0OiA1MCU7IFxyXG4gICAgdG9wOiA1MCU7IFxyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICB3aWR0aDogODBweDsgXHJcbiAgICBoZWlnaHQ6IDgwcHg7IFxyXG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7IFxyXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgYmx1ZXZpb2xldDsgXHJcbiAgICB3aWR0aDogMTIwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyBcclxuICAgIH0gXHJcbiAgICAgIFxyXG4gICAgQGtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXHJcbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxyXG4gICAgfVxyXG4gIFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8771:
/*!*****************************************************************!*\
  !*** ./src/app/physical/add-physical/add-physical.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPhysicalComponent: () => (/* binding */ AddPhysicalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/service.service */ 3378);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 1333);







class AddPhysicalComponent {
  constructor(service, dialogRef) {
    this.service = service;
    this.dialogRef = dialogRef;
    this.title = "Physical data";
    this.addPhysicalRequest = {
      ID: '',
      TA: 0,
      Total_Sulphur: 0,
      Gluc_Fruc: 0,
      Total_phenolics: 0,
      pH: 0,
      Free_Sulphur: 0,
      Ethanol: 0
    };
  }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form) {
    if (form != null) form.resetForm();
  }
  onSubmit(form) {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember") {
      alert('Only admins and superusers are allowed.');
    } else {
      this.service.addPhysical(this.addPhysicalRequest).subscribe(data => {
        alert(data);
        form.resetForm();
      });
    }
  }
  onCancel() {
    this.dialogRef.close();
    this.service.filter('Register click');
  }
  static #_ = this.ɵfac = function AddPhysicalComponent_Factory(t) {
    return new (t || AddPhysicalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AddPhysicalComponent,
    selectors: [["app-add-physical"]],
    decls: 44,
    vars: 9,
    consts: [["mat-dialog-title", ""], [1, "form1", 3, "ngSubmit"], ["form", "ngForm"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "ID", "name", "ID", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "TA", "name", "TA", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Total_Sulphur", "name", "Total_Sulphur", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Gluc_Fruc", "name", "Gluc_Fruc", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Total_phenolics", "name", "Total_phenolics", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "pH", "name", "pH", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Free_Sulphur", "name", "Free_Sulphur", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Ethanol", "name", "Ethanol", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "color", "warn", 1, "close", 3, "click"]],
    template: function AddPhysicalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "mat-dialog-content")(4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddPhysicalComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.addPhysicalRequest.ID = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "TA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.addPhysicalRequest.TA = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Total_Sulphur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.addPhysicalRequest.Total_Sulphur = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Gluc_Fruc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.addPhysicalRequest.Gluc_Fruc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field")(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Total_phenolics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.addPhysicalRequest.Total_phenolics = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field")(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "pH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_29_listener($event) {
          return ctx.addPhysicalRequest.pH = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field")(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Free_Sulphur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_33_listener($event) {
          return ctx.addPhysicalRequest.Free_Sulphur = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field")(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Ethanol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPhysicalComponent_Template_input_ngModelChange_37_listener($event) {
          return ctx.addPhysicalRequest.Ethanol = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div")(41, "mat-dialog-content")(42, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPhysicalComponent_Template_button_click_42_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.TA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.Total_Sulphur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.Gluc_Fruc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.Total_phenolics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.pH);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.Free_Sulphur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addPhysicalRequest.Ethanol);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel],
    styles: [".form1[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.form1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.close[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGh5c2ljYWwvYWRkLXBoeXNpY2FsL2FkZC1waHlzaWNhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybTEgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNsb3Nle1xuICAgIHdpZHRoOiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 576:
/*!*******************************************************************!*\
  !*** ./src/app/physical/edit-physical/edit-physical.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPhysicalComponent: () => (/* binding */ EditPhysicalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/service.service */ 3378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);









class EditPhysicalComponent {
  constructor(dialogRef, route, service, dataForEdit) {
    this.dialogRef = dialogRef;
    this.route = route;
    this.service = service;
    this.dataForEdit = dataForEdit;
    this.title = 'Details of physical data';
    this.PhysicalDetails = {
      ID: '',
      TA: 0,
      Total_Sulphur: 0,
      Gluc_Fruc: 0,
      Total_phenolics: 0,
      pH: 0,
      Free_Sulphur: 0,
      Ethanol: 0
    };
  }
  showscreen() {
    this.PhysicalDetails = this.dataForEdit;
  }
  ngOnInit() {
    this.showscreen();
  }
  onSubmit(form) {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember") {
      alert('Only admins and superusers are allowed.');
    } else {
      this.service.updatePhysical(this.PhysicalDetails).subscribe(data => {
        alert(data);
        this.dialogRef.close();
        this.service.filter('Register click');
      });
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function EditPhysicalComponent_Factory(t) {
    return new (t || EditPhysicalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EditPhysicalComponent,
    selectors: [["app-edit-physical"]],
    decls: 47,
    vars: 9,
    consts: [["mat-dialog-title", ""], ["autocomplete", "off", 1, "form1", 3, "ngSubmit"], ["form", "ngForm"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "TA", "name", "TA", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Total_Sulphur", "name", "Total_Sulphur", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Gluc_Fruc", "name", "Gluc_Fruc", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Total_phenolics", "name", "Total_phenolics", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "pH", "name", "pH", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Free_Sulphur", "name", "Free_Sulphur", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "minlength", "2", "type", "text", "id", "Ethanol", "name", "Ethanol", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "color", "warn", 1, "close", 3, "click"]],
    template: function EditPhysicalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "mat-dialog-content")(4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditPhysicalComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "td")(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "TA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPhysicalComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.PhysicalDetails.TA = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total_Sulphur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPhysicalComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.PhysicalDetails.Total_Sulphur = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Gluc_Fruc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPhysicalComponent_Template_input_ngModelChange_24_listener($event) {
          return ctx.PhysicalDetails.Gluc_Fruc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field")(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Total_phenolics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPhysicalComponent_Template_input_ngModelChange_28_listener($event) {
          return ctx.PhysicalDetails.Total_phenolics = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field")(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "pH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPhysicalComponent_Template_input_ngModelChange_32_listener($event) {
          return ctx.PhysicalDetails.pH = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field")(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Free_Sulphur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPhysicalComponent_Template_input_ngModelChange_36_listener($event) {
          return ctx.PhysicalDetails.Free_Sulphur = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field")(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Ethanol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPhysicalComponent_Template_input_ngModelChange_40_listener($event) {
          return ctx.PhysicalDetails.Ethanol = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div")(44, "mat-dialog-content")(45, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPhysicalComponent_Template_button_click_45_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.PhysicalDetails.ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.PhysicalDetails.TA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.PhysicalDetails.Total_Sulphur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.PhysicalDetails.Gluc_Fruc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.PhysicalDetails.Total_phenolics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.PhysicalDetails.pH);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.PhysicalDetails.Free_Sulphur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.PhysicalDetails.Ethanol);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel],
    styles: [".form1[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.form1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.close[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGh5c2ljYWwvZWRpdC1waHlzaWNhbC9lZGl0LXBoeXNpY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtMSA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xvc2V7XG4gICAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4050:
/*!************************************************!*\
  !*** ./src/app/physical/physical.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhysicalComponent: () => (/* binding */ PhysicalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _show_physical_show_physical_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-physical/show-physical.component */ 3056);


class PhysicalComponent {
  static #_ = this.ɵfac = function PhysicalComponent_Factory(t) {
    return new (t || PhysicalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PhysicalComponent,
    selectors: [["app-physical"]],
    decls: 1,
    vars: 0,
    template: function PhysicalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-show-physical");
      }
    },
    dependencies: [_show_physical_show_physical_component__WEBPACK_IMPORTED_MODULE_0__.ShowPhysicalComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3056:
/*!*******************************************************************!*\
  !*** ./src/app/physical/show-physical/show-physical.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowPhysicalComponent: () => (/* binding */ ShowPhysicalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _add_physical_add_physical_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-physical/add-physical.component */ 8771);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _edit_physical_edit_physical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-physical/edit-physical.component */ 576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ 3378);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);

















function ShowPhysicalComponent_mat_header_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r21.ID);
  }
}
function ShowPhysicalComponent_mat_header_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "TA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r22.TA);
  }
}
function ShowPhysicalComponent_mat_header_cell_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total_Sulphur");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r23.Total_Sulphur);
  }
}
function ShowPhysicalComponent_mat_header_cell_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gluc_Fruc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r24.Gluc_Fruc);
  }
}
function ShowPhysicalComponent_mat_header_cell_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total_phenolics");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r25.Total_phenolics);
  }
}
function ShowPhysicalComponent_mat_header_cell_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "pH");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r26.pH);
  }
}
function ShowPhysicalComponent_mat_header_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Free_Sulphur");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r27.Free_Sulphur);
  }
}
function ShowPhysicalComponent_mat_header_cell_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ethanol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r28.Ethanol);
  }
}
function ShowPhysicalComponent_mat_header_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
  }
}
function ShowPhysicalComponent_mat_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
  }
}
function ShowPhysicalComponent_mat_header_cell_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ShowPhysicalComponent_mat_cell_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell")(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowPhysicalComponent_mat_cell_39_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const row_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.onEdit(row_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowPhysicalComponent_mat_cell_39_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const row_r30 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.onDelete(row_r30.ID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function () {
  return [10, 25, 100];
};
class ShowPhysicalComponent {
  constructor(service, dialog) {
    this.service = service;
    this.dialog = dialog;
    this.displayedColumns = ['ID', 'TA', 'Total_Sulphur', 'Gluc_Fruc', 'Total_phenolics', 'pH', 'Free_Sulphur', 'Ethanol', 'Options'];
    this.service.listen().subscribe(data => {
      this.refreshList();
    });
  }
  ngOnInit() {
    console.log(localStorage.getItem('session'));
    this.refreshList();
  }
  refreshList() {
    this.service.getPhysicalData().subscribe(data => {
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "90%";
    dialogConfig.width = "60%";
    this.dialog.open(_add_physical_add_physical_component__WEBPACK_IMPORTED_MODULE_0__.AddPhysicalComponent, dialogConfig);
  }
  onEdit(physical) {
    this.dialog.open(_edit_physical_edit_physical_component__WEBPACK_IMPORTED_MODULE_1__.EditPhysicalComponent, {
      height: '90%',
      width: '60%',
      data: physical
    });
  }
  onDelete(id) {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember") {
      alert('Only admins and superusers are allowed.');
    } else {
      if (confirm('Do you persist in deleting: ' + id + '?')) this.service.deletePhysical(id).subscribe(data => {
        alert(data);
        this.refreshList();
      });
    }
  }
  static #_ = this.ɵfac = function ShowPhysicalComponent_Factory(t) {
    return new (t || ShowPhysicalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ShowPhysicalComponent,
    selectors: [["app-show-physical"]],
    viewQuery: function ShowPhysicalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 41,
    vars: 6,
    consts: [["id", "containerChart", 1, "container", 3, "hasBackdrop"], ["containerChart", ""], ["matInput", "", "placeholder", "Keyword search", 3, "keyup"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "ID"], ["mat-sort-header", "", "sortActionDescription", "Sort by name", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "TA"], ["mat-sort-header", "", "sortActionDescription", "Sort by TA", 4, "matHeaderCellDef"], ["matColumnDef", "Total_Sulphur"], ["mat-sort-header", "", "sortActionDescription", "Sort by number", 4, "matHeaderCellDef"], ["matColumnDef", "Gluc_Fruc"], ["matColumnDef", "Total_phenolics"], ["matColumnDef", "pH"], ["matColumnDef", "Free_Sulphur"], ["matColumnDef", "Ethanol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "Options"], [4, "matHeaderCellDef"], ["aria-label", "select page of users", 3, "pageSizeOptions"], ["mat-sort-header", "", "sortActionDescription", "Sort by name"], ["mat-sort-header", "", "sortActionDescription", "Sort by TA"], ["mat-sort-header", "", "sortActionDescription", "Sort by number"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
    template: function ShowPhysicalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-drawer-container", 0, 1)(2, "td")(3, "mat-form-field")(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Filter table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ShowPhysicalComponent_Template_input_keyup_6_listener($event) {
          return ctx.applyFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowPhysicalComponent_Template_button_click_8_listener() {
          return ctx.onAdd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ShowPhysicalComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ShowPhysicalComponent_mat_cell_13_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ShowPhysicalComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ShowPhysicalComponent_mat_cell_16_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ShowPhysicalComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ShowPhysicalComponent_mat_cell_19_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ShowPhysicalComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ShowPhysicalComponent_mat_cell_22_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ShowPhysicalComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ShowPhysicalComponent_mat_cell_25_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ShowPhysicalComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ShowPhysicalComponent_mat_cell_28_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](29, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ShowPhysicalComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ShowPhysicalComponent_mat_cell_31_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](32, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ShowPhysicalComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ShowPhysicalComponent_mat_cell_34_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ShowPhysicalComponent_mat_header_row_35_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ShowPhysicalComponent_mat_row_36_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ShowPhysicalComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ShowPhysicalComponent_mat_cell_39_Template, 7, 0, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
      }
    },
    dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawerContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
    styles: [".container[_ngcontent-%COMP%] {\n    width: 1440px;\n    height: 900px;\n    margin: 12px;\n    border: 1px solid #FFF;\n  }\n  \n  mat-drawer-content[_ngcontent-%COMP%] {\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGh5c2ljYWwvc2hvdy1waHlzaWNhbC9zaG93LXBoeXNpY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTQ0MHB4O1xuICAgIGhlaWdodDogOTAwcHg7XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIH1cbiAgXG4gIG1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3378:
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceService: () => (/* binding */ ServiceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class ServiceService {
  constructor(http) {
    this.http = http;
    //production = true;
    //readonly APIUrl = "http://localhost:5277/api/Pinot/";
    //readonly APIUrl = "https://pinotnz.azurewebsites.net/api/Pinot/";
    this.APIUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIUrl;
    this.APIUrlFlask = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIUrlFlask;
    //#endregion
    //#region action when closing button
    this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  //get ML model result
  getAIModel() {
    return this.http.get(this.APIUrlFlask + "getModel");
  }
  // getAIModel(){
  //   return this.http.get(this.APIUrlFlask+"getModel");
  // }
  classifyAIModel(classifyParameter) {
    return this.http.post(this.APIUrlFlask + "ModelClassify", classifyParameter);
  }
  //#region for test
  getUser() {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('content-type', 'application/json')
    //.set('Access-Control-Allow-Credentials','true')
    .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept').set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    return this.http.get(this.APIUrl + 'GetUserPWD', {
      headers: headers,
      withCredentials: true
    });
  }
  //#region for Metadata
  getMetadata() {
    return this.http.get(this.APIUrl + 'GetMetadata');
  }
  addMetadata(addMetadataRequest) {
    return this.http.post(this.APIUrl + 'AddMetadata', addMetadataRequest);
  }
  updateMetadata(updateMetadataRequest) {
    return this.http.put(this.APIUrl + 'UpdateMetadata', updateMetadataRequest);
  }
  deleteMetadata(deletedID) {
    return this.http.delete(this.APIUrl + 'DeleteMetadata?condition=' + deletedID);
  }
  getForGraph(cd) {
    return this.http.get(this.APIUrl + 'GetMetadata_graph?condition=' + cd);
  }
  getColorList(cd) {
    return this.http.get(this.APIUrl + 'GetMetadata_graphColor?condition=' + cd);
  }
  gerMetadataBProduction(cd) {
    return this.http.get(this.APIUrl + 'GetMetadata_production?condition=' + cd);
  }
  //#endregion
  //#region for Physical data
  getPhysicalData() {
    return this.http.get(this.APIUrl + 'GetPhysicaldata');
  }
  addPhysical(addPhysicalRequest) {
    return this.http.post(this.APIUrl + 'AddPhysical', addPhysicalRequest);
  }
  updatePhysical(updatePhysicalRequest) {
    return this.http.put(this.APIUrl + 'UpdatePhysical', updatePhysicalRequest);
  }
  deletePhysical(deletedID) {
    return this.http.delete(this.APIUrl + 'DeletePhysical?condition=' + deletedID);
  }
  //#endregion
  //#region for downloading
  //Matadata get from the metadata and physical methods, as defined
  getAromaLincoln() {
    return this.http.get(this.APIUrl + 'GetAromaLincoln');
  }
  getBerry_OD() {
    return this.http.get(this.APIUrl + 'GetBerry_OD');
  }
  getColor_Lincoln() {
    return this.http.get(this.APIUrl + 'GetColor_Lincoln');
  }
  getComp_Kea_Berry_Vs_AWRI() {
    return this.http.get(this.APIUrl + 'GetComp_Kea_Berry_Vs_AWRI');
  }
  getOenological_analysis_PFR() {
    return this.http.get(this.APIUrl + 'GetOenological_analysis_PFR');
  }
  listen() {
    return this._listeners.asObservable();
  }
  filter(filterby) {
    this._listeners.next(filterby);
  }
  static #_ = this.ɵfac = function ServiceService_Factory(t) {
    return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ServiceService,
    factory: ServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  APIUrl: "http://localhost:3000/api/",
  APIUrlFlask: "http://127.0.0.1:5000/"
  //APIUrl: "http://localhost:5277/api/Pinot/"
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map