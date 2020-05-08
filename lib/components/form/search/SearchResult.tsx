import * as React from 'react';

export interface ISearchResultProps {
  /* unique identifier*/
  id?: number | string;

  /* Display title */
  title?: string;

  /* Description*/
  description?: string;

  /* Image */
  image?: string;

  /* Click events */
  onClick?: (event: React.MouseEvent<HTMLDivElement>, data: ISearchResultProps) => void;
  renderer?: (props: ISearchResultProps) => React.ReactElement<any>[];
}

export const SearchResult: React.FC<ISearchResultProps> = () => (
  <div>search result</div>
);

export const EmptySearchResult: React.FC<{}> = () => (
  <div>no search result found</div>
);
