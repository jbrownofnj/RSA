import React from 'react'
import styled from "styled-components"

const StyledDiv=styled.div`
height:100%;
word-break: break-all;
`
const StyledHeader=styled.header`
font-size:40px;
align-self:center;
`
const StyledP=styled.p`
font-size:25px;
float:block;
text-indent:50px;
text-align:center;
font-family:Arial,sans-serif;
display:block;
`
const StyledOl=styled.ol`
 font-size:25px;
font-family: Arial,sans-serif;
text-align:left;
`

function Explanation() {
  return (
    <StyledDiv>
    <StyledHeader>RSA Process</StyledHeader>
    <StyledP>
      <pre>
        The RSA algorithm involves four steps: key generation, key distribution, encryption, and decryption.<br/>
        A basic principle behind RSA is the observation that it is practical to find three very large positive <br/>
        integers e, d, and n, such that with modular exponentiation for all integers m &#40; with 0 &le; m &lt; n &#41;<br/>
      </pre>
    </StyledP>
    <StyledP>
      <pre>
      <br/>
      &#40;m<sup>e</sup>&#41;<sup>d</sup>≡&#40;mod n&#41;
      </pre>
    </StyledP>
    <StyledP>
      <pre>
        and that knowing e and n, or even m, it can be extremely difficult to find d. The triple bar &#40;≡&#41; here denotes<br/> 
        modular congruence. &#40;In simple terms, modular congruence means that when you divide &#40;m<sup>e</sup>&#41;d by n and divide <br/> 
        m by n, each has the same remainder.&#41;In addition, for some operations it is convenient that the order of the two <br/> 
        exponentiations can be changed and that this relation 
        also implies
      </pre>
      </StyledP>
      <StyledP>
        <pre>
        <br/>
        &#40;m<sup>d</sup>&#41;<sup>e</sup>≡&#40;mod n&#41;
        </pre>
    </StyledP>
    <StyledHeader>Key Generation</StyledHeader>
    <StyledP>
    The keys for the RSA algorithm are generated in the following way:
    </StyledP>
      <StyledOl>
        
        <li>Choose two distinct prime numbers p and q<br/><br/>
          <ul>
            <li>
            For security purposes, the integers p and q should be chosen at random and should be similar in magnitude but differ in <br/>
            length by a few digits to make factoring harder.Prime integers can be efficiently found using a primality test.
            </li>
            <br/>
            <li>
             p and q are kept secret. 
             </li>
          </ul>
        </li>
        <li>Compute n = pq.<br/><br/>
          <ul>
            <li>
            n is used as the modulus for both the public and private keys. Its length, usually expressed in bits, is the key length.
            </li>
            <br/>
            <li>
            n is released as part of the public key.
             </li> <br/>
          </ul>
        </li>
        <li>Compute λ(n), where λ is Carmichael's totient function. Since n = pq, λ(n) = lcm(λ(p), λ(q)), and since p and q are<br/> prime, λ(p) = φ(p) = p − 1, and likewise λ(q) = q − 1. Hence λ(n) = lcm(p − 1, q − 1).<br/><br/>
          <ul>
            <li>
            λ(n) is kept secret.
            </li>
            <br/>
            <li>
            The lcm may be calculated through the Euclidean algorithm, since lcm(a, b) = |ab|/gcd(a, b).
             </li>
          </ul>
        </li>
        <li>Choose an integer e such that 1 &lt; e &lt; λ(n) and gcd(e, λ(n)) = 1; that is, e and λ(n) are coprime.<br/><br/>
          <ul>
            <li>
            e having a short bit-length and small Hamming weight results in more efficient encryption – the most commonly chosen value<br/> 
            for e is 216 + 1 = 65537. The smallest (and fastest) possible value for e is 3, but such a small value for e has been shown <br/>
            to be less secure in some settings.
            </li>
            <br/>
            <li>
            e is released as part of the public key.
             </li>
          </ul>
        </li>
        <li>Determine d as d ≡ e−1 (mod λ(n)); that is, d is the modular multiplicative inverse of e modulo λ(n).
          <ul>
            <li>
            This means: solve for d the equation d⋅e ≡ 1 (mod λ(n)); d can be computed efficiently by using the extended 
            Euclidean algorithm, since, thanks to e and λ(n) being coprime, said equation is a form of Bézout's identity, 
            where d is one of the coefficients.
            </li>
            <br/>
            <li>
            d is kept secret as the private key exponent.
             </li>
          </ul>
        </li>
      </StyledOl>
      <StyledP>
        The encriplition is applied by taking the message and raising it to the power e. From there it is modulated by n.<br/>
        Once this is done it cannot be decripted in any resonable time without d. To decript a message you need only raise<br/>
        the encripted number to the power d and modulate it by n. On the following page you can experiment with RSA encription<br/>
        by subbmitting a 4 letter or less word and saving it encryption. These submissions are only readable if you supply the<br/>
        secret d value (1882283633)
      </StyledP>
      
    </StyledDiv>
  )
}

export default Explanation