import React from 'react'
import { fetchList } from "../../api";
import {useQuery} from "react-query"
import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

function Get() {
  const { data  } = useQuery("getlist" , fetchList)


  //It is not important now!
  // useEffect(()=>{
  //   fetchList()
  // },[])

  return (
  <TableContainer p={4}>
  <Table  variant='striped' colorScheme='teal'>
    <TableCaption>Transaction Table </TableCaption>
    <Thead>
      <Tr>
        <Th>From</Th>
        <Th>To</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data && data.map((item)=>(
          <Tr key={item.id}>
            <Td>{item.from}</Td>
            <Td>{item.to}</Td>
            <Td isNumeric>{item.amount}</Td>
          </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
    
  )
}

export default Get