import styled from 'styled-components';

 const Hero = styled.h1`
  font-size: 2.8125rem;
  font-family: Roboto;
  font-weight: 700;
  color: ${props => (props.secondary ? '#FFCE6D' : '#FFFCCC'  )};
`;

 const MainHeading = styled.h1`
  font-size: 2.25rem;
  font-family: Dancing Script;
  font-weight: 800;
  color: ${props => (props.secondary ? '#FFCE6D' : '#FFFCCC'  )};
  line-height: 117.3%;
  letter-spacing: 0.225rem;
`;

 const Subheading = styled.h2`
  font-size: 1.875rem;
  font-family: Roboto;
  font-weight: 700;
  line-height: 117.3%;
  color: ${props => (props.secondary ? '#FFCE6D' : '#FFFCCC'  )};
`;

 const Title = styled.h3`
  font-size: 1.375rem;
  font-family: Roboto;
  font-weight: 700;
  color: ${props => (props.secondary ? '#FFCE6D' : '#FFFCCC'  )};
`;

 const Subtitle = styled.h4`
  font-size: 1.125rem;
  font-family: Roboto;
  font-weight: 700;
  color: ${props => (props.secondary ? '#FFCE6D' : '#FFFCCC'  )};
`;

 const BodyText = styled.p`
  font-size: 1rem;
  font-family: Roboto;
  color: ${props => (props.secondary ? '#FFCE6D' : '#FFFCCC'  )};
`;

 const XXL = styled.h1`
  font-size: 3rem;
  font-family: Roboto;
  font-weight: 700;
  line-height: 117.3%;
  color: ${props => (props.primary ? '#FFFCCC' : '#FFCE6D')};
`;

 const XL = styled.h2`
  font-size: 2rem;
  font-family: Roboto;
  font-weight: 800;
  letter-spacing: 0.04rem;
  color: ${props => (props.primary ? '#FFFCCC' : '#FFCE6D')};
`;

 const L = styled.h3`
  font-size: 1.5rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  line-height: 117.3%;
  color: ${props => (props.primary ? '#FFFCCC' : '#FFCE6D')};
`;

 const SmallText = styled.span`
  font-size: 0.875rem;
  font-family: Roboto;
  color: ${props => (props.primary ? '#FFFCCC' : '#FFCE6D')};
`;


export {
    Hero,
    MainHeading,
    Subheading,
    Title,
    Subtitle,
    BodyText,
    XXL,
    XL,
    L,
    SmallText,
  };
