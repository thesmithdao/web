import { Flex, Stack } from '@chakra-ui/react'
import { Page } from 'components/Layout/Page'

import { useAsset } from '../Asset'
import { StakingVaults } from '../AssetCards/StakingVaults/StakingVaults'
import { AssetHeader } from './AssetHeader/AssetHeader'
import { AssetHistory } from './AssetHistory'

export const AssetDetails = () => {
  const { asset, marketData } = useAsset()
  const isLoaded = !!marketData
  return (
    <Page style={{ width: '100%' }}>
      <Flex flexGrow={1} zIndex={2} flexDir={{ base: 'column', lg: 'row' }}>
        <Stack
          spacing='1.5rem'
          maxWidth={{ base: 'auto', lg: '50rem' }}
          flexBasis='50rem'
          p={{ base: 0, lg: 4 }}
          mx={{ base: 0, lg: 'auto' }}
        >
          <AssetHeader isLoaded={isLoaded} />
          <StakingVaults tokenId={asset.tokenId} isLoaded={isLoaded} />
          <AssetHistory />
        </Stack>
      </Flex>
    </Page>
  )
}
