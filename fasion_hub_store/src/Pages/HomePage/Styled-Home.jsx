import styled from "styled-components";

let Main = styled.main`
  padding: 40px 3.2vw;
  #homepage {
    display: grid;
    margin: 5px 3.8vw;
    
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    background-color: #f9f9f9;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
    div {
      &:nth-of-type(1) {
        padding: 50px;
        @media (max-width: 600px) {
          padding: 50px 20px;
        }
        h1 {
          font-size: 35px;
          line-height: 145%;
          letter-spacing: 2px;
          @media (max-width: 600px) {
            letter-spacing: 1px;
            font-size: 23px;
          }
        }
        p {
          background-color: #fff;
          padding: 2.5vh 1.5vw;
          width: fit-content;
          border-radius: 7px;
          margin: 25px 0;
          border: 1px solid #dedede;
        }
        button {
          display: flex;
          align-items: center;
          padding: 1.8vh 1.6vw;
          color: #fff;
          background-color: #f43397;
          border: none;
          border-radius: 5px;
          span {
            margin-left: 5px;
            font-weight: bold;
          }
          img {
            margin-right: 12px;
          }
        }
      }
      &:nth-of-type(2) {
        img {
          width: 100%;
          height:350px;
        }
      }
    }
  }
  #h1-line {
    display: flex;
    align-items: center;
    margin: 55px 3.4vw;
    hr {
      flex-grow: 1;
      border: none;
      border-top: 1px solid #f43397;
    }
    h1 {
      margin: 0 3vw;
    }
  }
//   #image-container {
//     text-align: center;
//     margin: 5px 3.4vw 10px;
//     img {
//       width: 100%;
//       height: 95vh;
//       margin-bottom: 6.5vh;
//       border-radius: 10px;
//       @media (max-width: 700px) {
//         height: 400px;
//       }
//       &:nth-of-type(4) {
//         height: 350px;
//         @media (max-width: 1100px) {
//           height: 200px;
//         }
//       }
//     }
  }
  #h1-line2 {
    display: flex;
    align-items: center;
    margin-bottom: 65px;
    hr {
      flex-grow: 1;
      border: none;
      border-top: 1px solid #f43397;
    }
    h1 {
      margin: 0 3vw;
    }
  }
  
`

export { Main };