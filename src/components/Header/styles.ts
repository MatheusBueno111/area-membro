import { ComponentProps } from 'react'
import { styled } from 'styled-components'

interface SearchBarProps extends ComponentProps<'div'> {
  showsearchbar?: boolean
}

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.4rem 2.4rem 0;
  align-items: center;
  position: relative;

  img {
    width: 8rem;
    height: 3.8rem;
  }

  .search-bar {
    display: none;
  }
  @media (min-width: 768px) {
    .sandwich-icon {
      display: none;
    }

    .search-bar {
      display: flex;
      width: 56.6rem;
    }

    img {
      order: -1;
    }
  }
`

export const SearchBar = styled.div<SearchBarProps>`
  display: ${({ showsearchbar }) => (showsearchbar ? 'flex' : 'none')};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .user-icon {
    display: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .gallery-icon {
      height: 4.8rem;
      width: 4.8rem;
      order: 0;
      background-color: none;
      background: rgba(237, 237, 237, 0.2);
      border-radius: 9999px;
      align-items: center;
      justify-content: center;
    }
    .carroussel-icon {
      height: 4.8rem;
      width: 4.8rem;
      order: 0;
      background-color: none;
      background: rgba(237, 237, 237, 0.2);
      border-radius: 9999px;
      align-items: center;
      justify-content: center;
      cursor:pointer;
    }
    .search-icon {
      height: 4.8rem;
      width: 4.8rem;
      order: 0;
      background-color: none;
      background: rgba(237, 237, 237, 0.2);
      border-radius: 9999px;
      align-items: center;
      justify-content: center;
    }

    .user-icon {
      display: flex;
      height: 4.8rem;
      width: 4.8rem;
      order: 1;
      background-color: none;
      background: rgba(237, 237, 237, 0.2);
      border-radius: 9999px;
      cursor: pointer;
    }
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 999;
  display: flex;
  background-color: red;
  border: 1px solid red;
`
