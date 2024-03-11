import { useState } from 'react';
import { css } from '@emotion/css';
import { Button, Input } from 'components';

interface SearchFormProps {
  onSubmit: (searchTerm: string) => void;
  searchTerm: string;
}

function SearchForm({ onSubmit }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(searchTerm);
      }}
      className={css`
        display: flex;
        gap: 6px;
      `}
    >
      <Input
        size="small"
        placeholder="고해상도 이미지 검색"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Button type="submit" variant="secondary" size="small">
        검색
      </Button>
    </form>
  );
}
export default SearchForm;
