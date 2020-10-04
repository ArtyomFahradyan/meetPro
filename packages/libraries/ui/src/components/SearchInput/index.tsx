import React, { ChangeEvent } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Search } from './styles';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};
function SearchInput({ placeholder, value, onChange }: Props) {
  return (
    <Search
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      suffix={<SearchOutlined />}
    />
  );
}

export default SearchInput;
