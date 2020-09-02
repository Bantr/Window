import styled, { css } from 'styled-components';

export interface IIconProps {
  rotate?: number;
  pointer?: boolean;
  fill?: string;
  scale?: number;
  outline?: boolean;
  onClick?: (any?: any) => void;
  className?: string;
  stroke?: string;
  highlight?: boolean;
}

export const defaultProps: IIconProps = {
  outline: true,
  pointer: undefined,
  rotate: undefined,
  scale: 1,
  stroke: undefined,
  onClick: () => { },
  className: null,
  highlight: false
};

export const Icon = styled.svg<IIconProps>`
  transition: 0.2s fill ease-in-out, transform 0.5s ease-in-out;
  width: 24px;
  height: 24px;
  fill: ${({ theme, fill }): string => fill ? fill : theme.icon};
  transform: ${({ rotate }): string => (rotate ? `rotate(${rotate}deg) ` : null)} ${({ scale }) => `scale(${scale})`};
  cursor: ${({ pointer }): string => (pointer ? 'pointer' : 'auto')};
  stroke: ${({ stroke }): string => stroke ? stroke : 'none'};

  &.faceit {
    margin-left: -5px;
  }
`;

/* must be under need to target Icon on hover */
export const IconContainer = styled.div.attrs<any, any>(() => ({
  className: 'icon'
}))`
  position: relative;
  width: 24px;
  height: 24px;

  /* Although not really necessary, in case the container does not scale correctly this should keep the icon centered. */
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ highlight }) => highlight && css`
      &::before{
        position: absolute;
        content: '';
        width: 175%;
        height: 175%;
        border-radius: 50%;
        margin: 0 auto;
        top: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        transform: translateX(-21%) translateY(-21%);
        transition: background-color 0.2s ease-in-out;
    }

    &:hover {

      &::before {
        background-color: ${({ theme }): string => theme.p}25;
      }
   ${Icon}{
      transition: fill 0s linear;
      fill: ${({ theme }) => theme.p};
    }
  }
  `}
`;
