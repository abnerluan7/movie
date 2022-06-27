import { useState } from 'react'
import { FaSearchengin } from 'react-icons/fa'

import { useMovies } from '@/hooks/useMovies'

import { Content, SearchIcon, SearchInput } from './search-styles'

export const Search = () => {
  const { setSearch } = useMovies()
  const [searchActive, setSearchActive] = useState<boolean>(false)

  return (
    <Content>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <FaSearchengin size={32} />
      </SearchIcon>
      <SearchInput
        active={searchActive}
        placeholder='search here...'
        minLength={3}
        debounceTimeout={500}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
    </Content>
  )
}
