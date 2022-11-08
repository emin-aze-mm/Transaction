import React, { useState } from 'react'
import axios  from 'axios';
import { Alert, AlertDescription, AlertIcon, Box, Button, CloseButton, Input, Text, useDisclosure } from '@chakra-ui/react'
import styles from '../Post/styles.module.css';

function Post() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState('');

  const fetchPost = async (from,to,amount)=>{
    if(from && to && amount){
      const response = await axios.post("https://acb-api.algoritmika.org/api/transaction",
      {
        from:from,
        to:to,
        amount:amount,
      }
      )
      console.log(response)
    }
    setFrom("");  
    setTo("");
    setAmount("");
    onOpen() 
  }
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  return (
    <div className={styles.all}>
      <Text fontSize="20">Post Transaction</Text>
      <div className={styles.center}>
        <div className="div">
        <Input type="text" placeholder="From" onChange={(e) => setFrom(e.target.value)} value={from} required className="input" />
        </div>
        <div className="div">
        <Input type="text" placeholder="To" onChange={(e) => setTo(e.target.value)} value={to} required className="input" />
        </div>
        <div className="div">
        <Input type="text" placeholder="Amount" onChange={(e) => setAmount(e.target.value.trim())} value={amount} required className="input" />
        </div>
      </div>
      {
      isVisible ? 
      (
      <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertDescription>
          Transaction updates succesfully!
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
      ):
        (
          <div className={styles.btn}>
          <Button  colorScheme="orange" onClick={()=>fetchPost(from,to,amount)} >Send</Button>
          </div>
        )
      }
    </div>
  )
}

export default Post