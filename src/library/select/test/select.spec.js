import Module from '../select.module';
import Template from './select.spec.html';
import Data from './select.spec.data';

describe('test component', () => {

  let element;
  let scope;

  beforeEach(() => {
    angular.mock.module(Module);

    inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      scope.data = Data;
      element = $compile(angular.element(Template))(scope);
      scope.$digest();
    });
  });

  it('should include placeholder text', () => {
    const string = element.find('.placeholder');
    // scope.data.placeholder = '123';
    // scope.$digest();
    expect(string.html()).to.equal('Choose a life');
  });

});
