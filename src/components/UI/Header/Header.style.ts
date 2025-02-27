import styled from "styled-components";

export const SCHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: calc(1vw + 6.4px) calc(12vw - 35px); //? 1920 - 195 | 375 - 10
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: black;
  box-shadow: 0 0 10px white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  &__logo {
    flex: 0 1 auto; //? 360 + 30 отступа

    a {
      &:is(:hover, :focus-visible) {
        outline: 0;

        #tehnikum-logo {
          fill: #a497f9;
          filter: drop-shadow(0 0 5px #a497f9);
          scale: 1.1;
        }
      }
    }
  }

  #tehnikum-logo {
    width: 190px;
    transition: 200ms;
  }

  input {
    padding-left: 63px;
  }


@media (max-width: 1480px) {
  .Header {
    &__logo {
      flex: 0 1 250px;
    }

    #tehnikum-logo {
      width: 150px;
    }
  }
}

.input-wrapper {
  flex: 1 1 auto;
  position: relative;

  input {
    width: 100%;
    max-width: 360px;

    &::placeholder {
      color: ${(props)=> props.theme.color.placeholderColor};
    }
  }

  .icon {
    width: 18px;
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    fill: ${(props)=> props.theme.color.placeholderColor};
  }

  &:has(input:is(:hover, :focus)) {
    .icon {
      fill: ${(props)=> props.theme.color.primeColor};
    }
  }
}

.profile-wrapper {
  flex: 0 1 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .icon-bell {
    padding: calc(0.8vw + 3.9px);
    box-sizing: content-box;

    flex: 0 0 23px;
    cursor: pointer;
    width: 23px;
    height: 23px;
    fill: var(--gray);

    margin-right: calc(1.3vw + 5.8px);
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 200ms;

    &:hover {
      fill: ${(props)=> props.theme.color.primeColor};
      border-color:${(props)=> props.theme.color.lightGray};
      background-color:${(props)=> props.theme.color.bgc};
    }

    &:active {
      transition: 100ms;
      fill: white;
      background-color: ${(props)=> props.theme.color.primeColor};
    }
  }

  img {
    cursor: pointer;
    margin-right: 15px;
    transition: 200ms;

    width: calc(0.8vw + 34px);
    height: calc(0.8vw + 34px);
    border-radius: 50%;
    object-fit: cover;

    &:hover {
      scale: 1.3;
    }

    &:active {
      scale: 0.9;
      transition: 100ms;
    }
  }

  .icon-arrow {
    padding: 20px;
    box-sizing: content-box;

    cursor: pointer;
    fill: ${(props)=> props.theme.color.gray};
    width: 12px;
    transition: 200ms;

    &:hover {
      scale: 1.4;
    }

    &._active {
      transform: rotate(-180deg);
      fill: ${(props)=> props.theme.color.primeColor};
    }
  }
}

`