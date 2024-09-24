import { css } from "styled-components";
export const mobile = (style) => {
    return css`
        @media screen and (max-width: 490px) {
            ${style}
        }
    `
}