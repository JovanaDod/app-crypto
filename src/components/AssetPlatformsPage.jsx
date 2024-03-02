import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {Search} from "@mui/icons-material";
import {alpha, InputBase, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import AssetContext from './context/assest-platform-context';

const AssetPlatformsPage = () => {
  const RESULTS_PER_PAGE = 10;


  const [next, setNext] = useState(RESULTS_PER_PAGE);

  const { asset } = useContext(AssetContext);

  const handleOnLoadMore = () => {
    setNext(next + RESULTS_PER_PAGE);
  };

  const isEndOfAssets = next >= asset.length;

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAssets, setFilteredAssets] = useState([]);

  const handleSearchChange = (event) => {
    
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filteredAssets = asset.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  setFilteredAssets(filteredAssets);
    
  };
//treba da se popravi - gledaj od yt \

  return (
    <Container>
      <Search>
        <SearchIconWrapper>
          <SearchIcon/>
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{'aria-label': 'search'}}
            value={searchTerm}
            onChange={handleSearchChange}
        />
       
      </Search>
      {
  searchTerm !== '' ? (
    filteredAssets.map((post) => (
      <div className="post" key={post.id}>
        <h3>Name: {post.name}</h3>
        <h3>Native coin id: {post.native_coin_id}</h3>
        <hr/>
      </div>
    ))
  ) : (
    asset.slice(0, next).map((post) => (
      <div className="post" key={post.id}>
        <h3>Name: {post.name}</h3>
        <h3>Native coin id: {post.native_coin_id}</h3>
        <hr/>
      </div>
    ))
  )
}
     
      {!isEndOfAssets ? (

            <Button variant="contained"onClick={handleOnLoadMore} sx={{ marginTop:3, marginBottom:3 }} >Load More</Button>

        ) : (
          <div>
            <div variant="h6" color="error"><b>Sorry, that's all folks! No more to load.</b></div>
          </div>
        )
      }
    </Container>
  );
};

export default AssetPlatformsPage;
