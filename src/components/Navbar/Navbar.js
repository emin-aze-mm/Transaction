import styles from "./styles.module.css"
import React from 'react'
import {Link} from "react-router-dom"
import { Button} from '@chakra-ui/react'


function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                Transaction
            </div>
        </div>
        <div className={styles.right}>
            <div className="get"><Link to="/"><Button className={styles.bt} colorScheme="green">Get</Button></Link>
            </div>
            <div className="post"><Link to="/Post"><Button  className={styles.bt} colorScheme="orange">Post</Button></Link>
            </div>
            <div className="put"><Link to="/Update"><Button className={styles.bt} colorScheme="blue">Update</Button></Link>
            </div>
            <div className="delete"><Link to="/Delete"><Button className={styles.bt} colorScheme="red">Delete</Button></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar