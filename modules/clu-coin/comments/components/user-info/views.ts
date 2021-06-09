import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 35px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.2s ease-in-out 0s;
  padding-bottom: 20px;
  margin-top: 10px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Text = styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 10px;
`;
export const Rating = styled.span`
  font-size: 15px;
  margin-left: 10px;
  letter-spacing: 1px;
`;

export const Star = styled.img`
  width: 25px;
  height: 25px;
`;
