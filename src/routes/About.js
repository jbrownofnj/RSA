import React from 'react'
import styled from "styled-components"

const StyledDiv=styled.div`
height:100%;
`
const StyledHeader=styled.header`
font-size:40px;
align-self:center;
`
const StyledP=styled.p`
font-size:25px;
float:left;
text-indent:50px;
text-align:left;
`



function About() {
  return (
    <StyledDiv>
    <StyledHeader>RSA encription</StyledHeader>
    <StyledP>
    In 1976 the formulation of the first asymetric (public) encrption was made by 
    Witfield Diffie and Martin Hellman. They also introduced digital signatures and attempted to apply number theory. 
    Their formulation used a shared-secret-key created from exponentiation of some number, modulo a prime number. 
    However, they left open the problem of realizing a one-way function, possibly because the difficulty of factoring 
    was not well-studied at the time. Ron Rivest, Adi Shamir, and Leonard Adleman at the Massachusetts Institute of 
    Technology made several attempts over the course of a year to create a one-way function that was hard to invert. 
    Rivest and Shamir, as computer scientists, proposed many potential functions, while Adleman, as a mathematician, 
    was responsible for finding their weaknesses. They tried many approaches, including "knapsack-based" and "permutation 
    polynomials". For a time, they thought what they wanted to achieve was impossible due to contradictory requirements.
    In April 1977, they spent Passover at the house of a student and drank a good deal of Manischewitz wine before returning to their 
    homes at around midnight. Rivest, unable to sleep, lay on the couch with a math textbook and started thinking about their 
    one-way function. He spent the rest of the night formalizing his idea, and he had much of the paper ready by daybreak. 
    The algorithm is now known as RSA, the initials of their surnames in same order as their paper.
    Clifford Cocks, an English mathematician working for the British intelligence agency Government Communications Headquarters (GCHQ), described an equivalent system in an internal document in 1973.[8] However, given the relatively expensive computers needed to implement it at the time, it was considered to be mostly a curiosity and, as far as is publicly known, was never deployed. His discovery, however, was not revealed until 1997 due to its top-secret classification.
    </StyledP>
    </StyledDiv>
  )
}

export default About