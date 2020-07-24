import * as React from 'react';
import { COMPONENTSIZE } from 'lib/enums';
import { v4 as uuid } from 'uuid';
import { ISearchResultProps, EmptySearchResult, SearchResult } from './SearchResult';
import styled from 'styled-components';
import { Search as SearchIcon } from 'lib/icons';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }): string => theme.t};
  background-color: ${({ theme }): string => theme.sb};
  padding: 10px 20px 10px 40px;
`;

const SearchResultContainer = styled.div`
  background-color: orange;
  height: auto;
  width: 100%;
`;

export interface ISearchProps extends IStrictSearchProps {
  [key: string]: any;
}

interface IStrictSearchProps {
  aligned?: 'left' | 'right';
  className?: string;
  minCharacters?: string;
  showResults?: boolean;
  isLoading?: boolean;
  size?: COMPONENTSIZE;
  results?: ISearchResultProps[];
  value?: string;

  onFocus?: (event: React.FocusEvent<HTMLInputElement>, data: ISearchProps) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>, data: ISearchProps) => void;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
export const Search: React.FC<ISearchProps> = ({ value, isLoading, onSearchChange, results }) => {
  function setIcon(): React.ReactNode {
    if (isLoading) {
      return <div>loading...</div>;
    } else {
      return <SearchIcon />;
    }
  }

  function setResults(): React.ReactNode | React.ReactNode[] {
    if (!results) {
      return;
    }
    if (!results.length) {
      return <EmptySearchResult />;
    } else {
      return results.map((searchResultProps) => <SearchResult key={uuid()} {...searchResultProps} />);
    }
  }

  return (
    < Container className="search-container">
      {setIcon()}
      <Input className="search-input" onChange={onSearchChange} value={value} />
      <SearchResultContainer>
        {setResults()}
      </SearchResultContainer>
    </Container >
  );
};
