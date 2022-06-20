import React from 'react'
import styled from "styled-components"

const StyledA=styled.a`
font-size:19px;
color:#1CFEBA;
`

function Links() {
  return (<>
  <br/>
    <StyledA target="_blank" href="https://www.dcode.fr/modular-inverse">Modulalar Multiplicative Inverse Calculator</StyledA><br /><br/>
    <StyledA target="_blank" href="https://www.dcode.fr/rsa-cipher">RSA value Calculator</StyledA><br /><br/>
    <StyledA target="_blank" href="https://www.di-mgt.com.au/rsa_alg.html">Maths of RSA</StyledA><br /><br/>
    <StyledA target="_blank" href="https://www.invent.org/inductees/leonard-adleman#:~:text=Introduced%20in%201977%20by%20MIT,Martin%20Hellman%2C%20and%20Ralph%20Merkle.">RSA History</StyledA><br />
    </>
  )
}

export default Links