import { useAccountsService } from 'components/Trade/hooks/useAccountsService'
import { useAvailableSwappers } from 'components/Trade/hooks/useAvailableSwappers'
import { useFeesService } from 'components/Trade/hooks/useFeesService'
import { useFiatRateService } from 'components/Trade/hooks/useFiatRateService'
import { useReceiveAddress } from 'components/Trade/hooks/useReceiveAddress'
import { useTradeQuoteService } from 'components/Trade/hooks/useTradeQuoteService'

/*
The Swapper Service is responsible for reacting to changes to the Trade form and updating state accordingly.
*/
export const useSwapperService = () => {
  // Initialize child services
  useFiatRateService()
  useTradeQuoteService()
  useFeesService()
  useAccountsService()
  useReceiveAddress()
  useAvailableSwappers()
}
