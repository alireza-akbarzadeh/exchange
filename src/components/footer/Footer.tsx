import styled from "styled-components";
import tw from "twin.macro";

const Title = styled.h3`
  color: rgb(234, 236, 239);
`;
const List = styled.ul`
  margin-top: 9px;
`;
const ListItem = styled.li`
  margin: 0 0 12px;
  display: flex;
  font-size: 14px;
  color: rgb(132, 142, 156);
`;
const CopyRight = styled.div`
  color: rgb(132, 142, 156);
  border-top: 1px solid rgb(39, 42, 46);
  ${tw`flex items-center mt-5 justify-center pt-5 text-base`}
`;

const SocialLink = styled.ul`
  ${tw`flex justify-between flex-wrap space-x-3 mt-10 items-center `};

  li {
    font-size: 20px;
    color: rgb(132, 142, 156);
  }
`;

export { Title, List, ListItem, CopyRight, SocialLink };
