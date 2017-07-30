import Module from './test.module';

describe('test component', () => {
  beforeEach(() => {
    angular.mock.module(Module);
  });

  it('should include test text', inject(($rootScope, $compile) => {
    const element = $compile('<ngbs-test></ngbs-test>')($rootScope);
    $rootScope.$digest();
    const title = element.find('p');
    expect(title.html().trim()).to.equal('ng1bs4 is working!');
  }));

});
