import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    /* props로 넣어준 값을 직접 이용가능 */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;

    /* 반응형 디자인 */
    @media (max-width: 1024px){
        width: 768px;
    }
    @media (max-width: 768px){
        width: 100%;
    }
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display:flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* 문자를 사용하여 Sass처럼 self 선택가능 */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* inverted값이 true일 때 스타일 부여 */
    ${props => props.inverted && css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
            background: white;
            color: black;
        }
    `};

    $+button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
)

export default StyledComponent;