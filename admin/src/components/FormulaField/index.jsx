import { Box, Button, Stack, TextInput } from '@strapi/design-system';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { func, shape, string } from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import api from '../../api';
import { useFieldInfo } from '../../hooks';

const parseValue = (value) => (value ? JSON.parse(value) : null);

const FormulaField = ({ name, onChange, value, attribute }) => {
  const { formula, result } = useMemo(() => parseValue(value) || {}, [value]);
  const editViewData = useCMEditViewDataManager();
  const [, fieldNamespaceData] = useFieldInfo(name, editViewData);

  const handleFormulaChange = useCallback(
    (e) => {
      onChange({
        target: { name, value: JSON.stringify({ formula: e.target.value }), type: attribute.type }
      });
    },
    [attribute.type, name, onChange]
  );

  const calculateFormula = useCallback(async () => {
    try {
      const calculationResult = api.mathjs.calculateFormula(formula, fieldNamespaceData);
      onChange({
        target: {
          name,
          value: JSON.stringify({ formula, result: calculationResult }),
          type: attribute.type
        }
      });
    } catch (e) {
      throw new Error(`Failed to calculate formula: ${e.message}`);
    }
  }, [attribute.type, fieldNamespaceData, formula, name, onChange]);

  return (
    <Stack spacing={1}>
      <TextInput
        label="Formula"
        name="formula"
        placeholder="Please write a formula"
        value={formula}
        onChange={handleFormulaChange}
      />
      <Box>{result}</Box>
      <Button onClick={calculateFormula}>Calculate</Button>
    </Stack>
  );
};

FormulaField.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  value: shape({
    formula: string,
    result: string
  }),
  attribute: shape({
    type: string.isRequired
  }).isRequired
};

FormulaField.defaultProps = {
  value: null
};

export default FormulaField;
