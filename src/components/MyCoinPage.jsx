import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import MyCoinsContext from './context/my-coins-context';

const columns = [
  {
    field: 'symbol',
    headerName: 'Symbol',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'currentPrice',
    headerName: 'Current price',
    type: 'number',
    width: 110,
    editable: true,
  },
];


const MyCoinPage = () => {
  const { myCoins } = useContext(MyCoinsContext);
  console.log(myCoins)

  return (
    <Container>
      <h2>My coins</h2>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={myCoins}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

    </Container>

  )
};

export default MyCoinPage;
