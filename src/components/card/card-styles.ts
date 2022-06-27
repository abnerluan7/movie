import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 56px;
  margin-top: 16px;
  width: 92vw;
  @media (max-width: 1000px) {
    align-items: center;
    width: 100vw;
  }
`

export const CardHeader = styled.div`
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 32px;
  }
`

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin: 0;
  margin-bottom: 24px;
`

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`

export const Entities = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin: 0px;
  }
`

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`

export const Image = styled.img`
  border: 0;
  width: 100%;
  cursor: pointer;
  max-width: 305px;
  height: auto;
  padding: 0;
  margin: 0;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
    display: block;
    z-index: 100;
  }

  @media (max-width: 1000px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`
