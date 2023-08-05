import axiosInstance from '../utils/axiosInstance';

const mathjs = {
  calculateFormula: async (formula, scope) => {
    const response = await axiosInstance.post(`/field-formula/calculate`, {
      formula,
      scope
    });

    return response.data;
  }
};

export default mathjs;
