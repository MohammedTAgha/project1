import styled from "styled-components";

const Hero = styled.h1`
  width: fit-content;
  font-size: 2.8125rem;
  font-family: Roboto;
  font-weight: ${(props) => props.fontWeight || 700};
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const MainHeading = styled.h1`
  width: fit-content;
  font-size: 2.25rem;
  font-family: Dancing Script;
  font-weight: ${(props) => props.fontWeight || 800};
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
  line-height: 117.3%;
  letter-spacing: 0.225rem;
`;

const Subheading = styled.h2`
  width: fit-content;
  font-size: 1.875rem;
  font-family: Roboto;
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: 117.3%;
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const Title = styled.h3`
  width: fit-content;
  font-size: 1.375rem;
  font-family: Roboto;
  font-weight: ${(props) => props.fontWeight || 700};
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const Subtitle = styled.h4`
  width: fit-content;
  font-size: 1.125rem;
  font-family: Roboto;
  font-weight: ${(props) => props.fontWeight || 700};
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const BodyText = styled.p`
  width: fit-content;
  font-size: 1rem;
  font-family: Roboto;
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const XXL = styled.h1`
  width: fit-content;
  font-size: 3rem;
  font-family: Roboto;
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: 117.3%;
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const XL = styled.h2`
  width: fit-content;
  font-size: 2rem;
  font-family: Roboto;
  font-weight: ${(props) => props.fontWeight || 800};
  letter-spacing: 0.04rem;
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const L = styled.h3`
  width: fit-content;
  font-size: 1.5rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: 117.3%;
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
`;

const SmallText = styled.span`
  width: fit-content;
  font-size: 0.875rem;
  font-family: Roboto;
  color: ${(props) => (props.secondary ? "#FFCE6D" : props.color || "#FFFCCC")};
  font-weight: ${(props) => props.fontWeight};
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
