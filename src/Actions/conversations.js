const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchConversations = () => (dispatch) => {
  dispatch({type: 'FETCH_CONVERSATIONS'});

  delay(1000).then(() => {
    dispatch({
      type: 'FETCH_CONVERSATIONS_SUCCESS',
      response: [{
        id: 5
      }, {
        id: 6
      }]
    })
  });
};

export const getConversations = (state) => {
  return Object.values(state.conversations);
};
