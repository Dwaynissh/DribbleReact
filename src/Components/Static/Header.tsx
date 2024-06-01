import styled from 'styled-components'
import { BsSearch } from "react-icons/bs"
import assets from "../../Assets/modern-bookstore-logo-design-illustration-vector-removebg-preview.png"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <MainHeader>
        <HeaderWrapper>
          <Logo>
            <img src={assets} alt="" height= "90" width="250"/>
          </Logo>
          <BtnHolder>
            <BsSearch/>
            <NavLink to = "/upload-book" style={{ textDecoration: "none"}}>
              <HeaderButton>
                Upload Books
              </HeaderButton>
            </NavLink>
          </BtnHolder>
        </HeaderWrapper>
      </MainHeader>
    </div>
  )
}

export default Header

const HeaderButton = styled.button`
  background-color: rgb(234,76,137);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const BtnHolder = styled.div`
  height: 80px;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 600;
  color: grey;
  cursor: pointer;
`;
const Logo = styled.div`
  height: 80px;
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const HeaderWrapper = styled.div`
  height: 90px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MainHeader = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
