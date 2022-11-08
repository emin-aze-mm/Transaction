import { Alert, AlertDescription, AlertIcon, Box, Button, CloseButton, Input, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import styles from "../Update/styles.module.css"

function Update() {

  const [id,setId]=useState('');
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState('');

  const link="https://acb-api.algoritmika.org/api/transaction"
  const fetchUpdate = async (id,from,to,amount)=>{
    if (id && from && to && amount){
      const upd = await axios.put(`${link}/${id}`,{
        from:from,
        amount:amount,
        to:to
      })
      setId('')
      setFrom("")
      setTo("")
      setAmount('')
    }
    onOpen() 
  }
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })
  return (
    <div className={styles.all}>
      <Text fontSize="20">Update Transaction</Text>
      <div className={styles.center}>
        <div className="div">
        <Input type="number" placeholder="Id" onChange={(e) => setId(e.target.value)} value={id} required className="input" />
        </div>
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
      <Alert status='info'>
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
           <Button  colorScheme="blue" onClick={()=>fetchUpdate(id,from,to,amount)}>Update</Button>
           </div>
        )
      }
    </div>
  )
}

export default Update