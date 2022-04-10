import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`bg-gray-900 text-gray-500 text-center py-8 text-xs`}

  span {
    ${tw`text-red-700`}
  }

  a {
    ${tw`text-blue-400 hover:text-blue-600`}
  }
`
