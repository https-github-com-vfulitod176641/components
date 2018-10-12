import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none"><circle cx="16" cy="16" r="16" fill="#F70000"/><path fill="#FFF" d="M15.947 13.347L5 24.89 15.996 7 27 25 15.947 13.347zm1.588 4.585h-3.422l1.76-1.936 1.662 1.953v-.017zm-6.6 3.177v-.024l1.941-1.987v-.009l5.92-.025 1.998 2.045h-9.858z"/></g>
  </>
)

export const CryptoArk = withStyle(InnerSvg, 32, 32, 'CryptoArk', true)