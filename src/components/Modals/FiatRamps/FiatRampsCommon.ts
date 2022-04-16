import { BigNumber } from 'lib/bignumber/bignumber'

export enum FiatRampsRoutes {
  Select = '/fiat-ramp/select',
  Manager = '/fiat-ramp/manager',
}

export enum FiatRampAction {
  Buy = 'buy',
  Sell = 'sell',
}

export type FiatRampCurrency = {
  name: string
  assetId: string
  symbol: string
  imageUrl?: string
  disabled?: boolean
}

export type FiatRampCurrencyWithBalances = FiatRampCurrency & {
  cryptoBalance: BigNumber
  fiatBalance: BigNumber
}

export type FiatRampCurrencyBase = FiatRampCurrency | FiatRampCurrencyWithBalances
