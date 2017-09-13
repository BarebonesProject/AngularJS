import * as angular from 'angular'
import * as angularRoute from 'angular-route'

export interface IModuleExtOptions
{
    name : string
    templateUrl : string
    path : string
    styleUrls ?: string[]
}
export interface IModuleExt
{
    localController(options : IModuleExtOptions, onInit : angular.Injectable<angular.IControllerConstructor>) : angular.IModule & IModuleExt
}

export const app : angular.IModule & IModuleExt = angular.module('app', [ 'ngRoute', 'angularCSS' ]) as any;

app.config(function($locationProvider : angular.ILocationProvider) {
    $locationProvider.html5Mode(true);
})

app.localController = function(options, fn)
{
    app.controller(options.name, fn);
    
    app.config(function($routeProvider : angular.route.IRouteProvider)
    {
        $routeProvider.when(options.path, {
            controller: options.name,
            css: options.styleUrls,
            templateUrl: options.templateUrl
        } as any)
    })

    return app;
}

import { component as home } from './home/home.component'
app.localController(home.options, home.class);

import { component as feature } from './feature/feature.component'
app.localController(feature.options, feature.class);
