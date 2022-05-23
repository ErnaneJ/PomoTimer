import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeIn, fadeInUp, bounceInDown, shake } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const shakeAnimation = keyframes`${shake}`;

export const DivFadeInDownContent = styled.div`
  animation: 1s ${fadeInDownAnimation};
`;

export const DivFadeInContent = styled.div`
  animation: 2s ${fadeInAnimation};
`;

export const MainFadeInDownContent = styled.main`
  animation: 1s ${bounceInDownAnimation};
`;

export const DivFadeInUpContent = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;

export const InputShakeAnimation = styled.input`
  animation: 1s ${shakeAnimation};
`;