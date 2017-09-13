import { IModuleExtOptions } from '../main'

export class HomeComponent
{
    constructor($scope : any)
    {
        $scope.value = 'Hello!';
    }
}

export const component = {
    options: {
        name: 'HomeController',
        path: '/',
        templateUrl: './home.component.html',
        styleUrls: [ './home.component.css' ]
    } as IModuleExtOptions,
    class: HomeComponent
}
