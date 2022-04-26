import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export const front = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  background-color:grey;
`;
export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  `;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(16, 45, 120);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(16, 45, 120);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(16, 45, 120);
  background: linear-gradient(
    58deg,
    rgba(16, 45, 120, 1) 20%,
    rgba(1,4,10, 1) 80%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const FieldContainer = styled.div`
width:100%;
display: flex;
flex-direction:column;
`;

export const FieldError=styled.span`
color:#b32e2e;
font-size:11px;
min-height:10px;
`;

export const formSuccess =styled.span`
color:28a828;
font-size:12px;
min-height:20px;
`;