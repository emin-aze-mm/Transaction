import { Alert, AlertDescription, AlertIcon, Box, Button, CloseButton, Input, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import styles from '../Delete/styles.module.css';



function Delete() {
  const link  = "https://acb-api.algoritmika.org/api/transaction"
  const [id,setId]=useState("");


  const fetchDelete = async(id)=>{
    const del = await axios.delete(`${link}/${id}` )
    setId("")
    onOpen()
    console.log(del)
  }

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })
  
  
  return (
    <div className={styles.all}>
      <Text fontSize="20">Delete Transaction</Text>
      <div className={styles.center}>
        <div className="div">
        <Input type="number" min-value="0" placeholder="Id" value={id} onChange={(e) => setId(e.target.value.trim())}  required className="input" />
        </div>
      </div>
      {
      isVisible ? (
          <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertDescription>
          Transaction deleted succesfully!
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-70}
        top={0}
        onClick={onClose}
      />
    </Alert>
         ):(
      <div className={styles.btn}>
      <Button  colorScheme="red" onClick={()=>fetchDelete(id)}>Delete</Button>
      </div>
         )
      }
      
    </div>
  )
}

export default Delete