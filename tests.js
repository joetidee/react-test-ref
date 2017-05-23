/**
 * To test for number of child components in a parent component.
 */
describe('(non-empty)', () => {

    beforeEach('Mount <SurveyList />', () => {
        let newStore = { ...testStoreState, surveys: { ...testStoreState.surveys, data: testData}};
        const store = mockStore(newStore);
        wrapper = mount(<Provider store={store}><ConnectedSurveyList /></Provider>);
    });

    it('contains the same no. items as in the test store', () => {
        let len = testData.length;
        expect(wrapper.find('ul.list .surveyListItem')).to.have.length(len);
    });
});