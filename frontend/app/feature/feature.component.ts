import { IModuleExtOptions } from '../main'

export class FeatureComponent
{
    constructor($scope : any)
    {
        $scope.value = 'Hello Feature!';
    }
}

export const component = {
    options: {
        name: 'FeatureController',
        path: '/feature',
        templateUrl: './feature.component.html',
        styleUrls: [ './feature.component.css' ]
    } as IModuleExtOptions,
    class: FeatureComponent
}
