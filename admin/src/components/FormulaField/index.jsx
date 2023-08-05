import {
  Box,
  Button,
  Field,
  FieldInput,
  FieldLabel,
  Flex,
  JSONInput,
  Stack,
  Typography
} from '@strapi/design-system';
import { func, shape, string } from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import api from '../../api';

const parseValue = (value) => (value ? JSON.parse(value) : null);

const FormulaField = ({ name, onChange, value, attribute }) => {
  const { formula, scope, result } = useMemo(() => parseValue(value) || {}, [value]);

  const handleFormulaChange = useCallback(
    (e) => {
      onChange({
        target: {
          name,
          value: JSON.stringify({ formula: e.target.value, scope }),
          type: attribute.type
        }
      });
    },
    [attribute.type, name, onChange, scope]
  );

  const handleScopeChange = useCallback(
    (e) => {
      onChange({
        target: {
          name,
          value: JSON.stringify({ formula, scope: e }),
          type: attribute.type
        }
      });
    },
    [attribute.type, formula, name, onChange]
  );

  const calculateFormula = useCallback(async () => {
    try {
      const calculationResult = await api.mathjs.calculateFormula(formula, parseValue(scope) || {});
      onChange({
        target: {
          name,
          value: JSON.stringify({ formula, scope, result: calculationResult }),
          type: attribute.type
        }
      });
    } catch (e) {
      throw new Error(`Failed to calculate formula: ${e.message}`);
    }
  }, [attribute.type, formula, name, onChange, scope]);

  return (
    <Stack spacing={1}>
      <Flex alignItems="center" direction="row" gap={2}>
        <Field name="formula" required={false}>
          <Flex alignItems="flex-start" direction="column" gap={1}>
            <FieldLabel>{name}: Formula</FieldLabel>
            <FieldInput
              placeholder="Please write a formula"
              type="text"
              value={formula}
              onChange={handleFormulaChange}
            />
          </Flex>
        </Field>
        <Box>
          <Typography fontWeight="semiBold" variant="omega">
            =
          </Typography>
        </Box>
        <Field name="result" required={false}>
          <Flex alignItems="flex-start" direction="column" gap={1}>
            <FieldLabel>{name}: Result</FieldLabel>
            <FieldInput disabled placeholder="Formula result" type="text" value={result} />
          </Flex>
        </Field>
      </Flex>
      <JSONInput editable label={`${name}: Scope`} value={scope} onChange={handleScopeChange} />
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
