import Module from './test.module';

const Template = '<ngbs-test></ngbs-test>';

describe('test component', () => {
  let element;
  let scope;

  beforeEach(() => {
    angular.mock.module(Module);

    inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      element = $compile(angular.element(Template))(scope);
      scope.$digest();
    });
  });

  it('should include test text', () => {
    const title = element.find('p');
    expect(title.html().trim()).to.equal('ng1bs4 is working!');
  });

});
