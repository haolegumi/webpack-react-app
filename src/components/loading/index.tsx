import styled from 'styled-components'

const Loading = () => {
  const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: calc(100vh - 80px);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  `

  return (
    <LoadingContainer>
      <span>Loading</span>
    </LoadingContainer>
  )
}

export default Loading
