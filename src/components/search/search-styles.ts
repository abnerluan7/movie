import { DebounceInput } from 'react-debounce-input'

import styled from 'styled-components'
type Props = {
  active: boolean
}

export const Content = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchInput = styled<typeof DebounceInput>(DebounceInput)`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }: Props) => (active ? '10px' : '0')};
  padding: ${({ active }: Props) => (active ? '0 10px' : '0')};
  opacity: ${({ active }: Props) => (active ? '1' : '0')};
  width: ${({ active }: Props) => (active ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`
