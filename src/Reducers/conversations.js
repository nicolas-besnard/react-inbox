const conversations = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CONVERSATIONS_SUCCESS':
      return Object.values(action.response).map(conv => ({
        id: conv.id
      }));
    default:
      return state;
  }
};

export default conversations;
