import styled from 'styled-components';

export const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: 'row'
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
export default ImageWrapper;