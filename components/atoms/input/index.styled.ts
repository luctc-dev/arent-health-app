import tailwindConfig from '@/tailwind.config'
import styled from 'styled-components'

export const StyledInput = styled.div`
  input {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: block;
    width: 100%;
    padding: 15px 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    border: 2px solid;
    border-color: ${tailwindConfig.theme.extend.colors['gray-400']};
    background-color: transparent;
    color: ${tailwindConfig.theme.extend.colors['dark-500']};
    background-color: ${tailwindConfig.theme.extend.colors.light};
    outline: none;
  }

  .toggle-password {
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    position: absolute;

    & + input {
      padding-right: 40px;
    }
  }
`