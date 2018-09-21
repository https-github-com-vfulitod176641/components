import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import {
  BcBitcoin,
  BcBitcoinCash,
  BcBlocks,
  BcEthereum,
  BcTransactions,
} from '.'

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 8);
  height: 150px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
`
const IconName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
`

storiesOf('Atoms/Icons/custom', module).add('custom', () => (
  <Layout>
    <IconContainer>
      <BcBitcoin size="40px" />
      <IconName>Bitcoin</IconName>
    </IconContainer>
    <IconContainer>
      <BcBitcoinCash size="40px" />
      <IconName>BitcoinCash</IconName>
    </IconContainer>
    <IconContainer>
      <BcBlocks size="40px" />
      <IconName>Blocks</IconName>
    </IconContainer>
    <IconContainer>
      <BcEthereum size="40px" />
      <IconName>Ethereum</IconName>
    </IconContainer>
    <IconContainer>
      <BcTransactions size="40px" />
      <IconName>Transactions</IconName>
    </IconContainer>
  </Layout>
))