import topStoriesReducer from '../../reducers/top-stories-reducer';
import * as c from './../../actions/ActionTypes';


describe('topStoriesReducer', () => {

  let action;

  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        topStoriesReducer(initialState, { type: null });
      }
    ).toThrowError("There is no action matching null.");
  });


  test('successfully getting top stories should change isLoaded to true and update topStories', () => {
    const topStories = "An article"; // Note that we've created a constant called topStories which is storing a string. Our reducer doesn't care what the payload will look like — for the purposes of our test, we just want to make sure our new action will update the topStories property correctly.

    //Our test will verify that when the GET_TOP_STORIES_SUCCESS action is triggered, isLoaded will be set to true and the topStories property will be updated to the payload (in this case, a string).
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: "An article",
      error: null
    });
  });

  test('failing to get topStories should change isLoaded to true and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_TOP_STORIES_FAILURE,
      error
    }; // We create an error constant that holds a string. The action itself looks very similar to GET_TOP_STORIES_SUCCESS — the only difference is the payload. We'll expect the new state to have isLoaded set to true and error set to "An error". Meanwhile, topStories will remain an empty array since it won't change if we don't get a successful payload.

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: [],
      error: "An error"
    });
  });
});