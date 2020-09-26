import styled, { css } from "styled-components";
import { ColorType } from "../Theme/colors";

type TextProps = {
  color?: ColorType;
  bold?: boolean;
  align?: "center" | "left" | "right";
};

const CommonText = css<TextProps>`
  ${({ theme, color, align }) => css`
    color: ${color ? theme.colors[color] : "inherit"};
    text-align: ${align && align};
  `}
`;

const Header = css<TextProps>`
  ${({ bold = true }) => css`
    ${CommonText}
    font-weight: ${bold && "bold"};
  `}
`;

const Content = css<TextProps>`
  ${({ bold = false }) => css`
    ${CommonText}
    font-weight: ${bold ? "bold" : "normal"};
  `}
`;

const H1 = css<TextProps>`
  ${Header}
  font-size: 32px;
  line-height: 48px;
`;

const H2 = css<TextProps>`
  ${Header}
  font-size: 24px;
  line-height: 40px;
`;

const H3 = css<TextProps>`
  ${Header}
  font-size: 18px;
  line-height: 32px;
`;

const H4 = css<TextProps>`
  ${Header}
  font-size: 16px;
  line-height: 24px;
`;

const Body = css<TextProps>`
  ${Content}
  font-size: 16px;
  line-height: 24px;
`;

const Small = css<TextProps>`
  ${Content}
  font-size: 12px;
  line-height: 20px;
`;

const Label = css<TextProps>`
  ${Small}
  text-transform: upppercase;
`;

const Text = {
  h1: styled.h1`
    ${H1}
  `,
  h2: styled.h2`
    ${H2}
  `,
  h3: styled.h3`
    ${H3}
  `,
  h4: styled.h4`
    ${H4}
  `,
  p: styled.p`
    ${Body}
  `,
  small: styled.small`
    ${Small}
  `,
  label: styled.span`
    ${Label}
  `,
};

export default Text;
