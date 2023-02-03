const initialState = {
  pdf: '',
};

const pdfReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'pdf/setPdf':
      return {
        pdf: action.payload,
      };
    default:
      return state;
  }
};

export default pdfReducer;
