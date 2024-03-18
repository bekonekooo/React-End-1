const initialState = {
    blogs: [],
  };
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BLOG':
        return {
          ...state,
          blogs: [...state.blogs, action.payload],
        };
      case 'DELETE_BLOG':
        return {
          ...state,
          blogs: state.blogs.filter(blog => blog.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default blogReducer;