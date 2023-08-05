const mathjs = {
  calculateFormula: async (formula, scope) => {
    const response = await fetch(`/formula-field/mathjs-calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formula,
        scope
      })
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return response;
  }
};

export default mathjs;
