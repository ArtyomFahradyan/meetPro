import styled from 'styled-components';
import { Form } from 'antd';
import { motion } from 'framer-motion';

export const FormItem = styled(Form.Item)`
  margin-bottom: 8px;
`;

export const CheckboxError = styled(motion.div)`
  color: ${({ theme }) => theme.errorColor};
`;
