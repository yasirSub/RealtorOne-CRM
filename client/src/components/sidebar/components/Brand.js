import { Flex, Image } from "@chakra-ui/react";
import RealtorOneMark from "components/brand/RealtorOneMark";

export function SidebarBrand(props) {
  const { setOpenSidebar, openSidebar, from, largeLogo } = props;
  const uploaded =
    largeLogo && (largeLogo[0]?.logoLgImg || largeLogo[0]?.logoSmImg);

  return (
    <Flex
      align="center"
      direction="column"
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        background: "#141414",
        zIndex: 2,
      }}
    >
      <Flex py={3} px={openSidebar ? 4 : 2}>
        {uploaded ? (
          <Image
            style={{ width: "100%", height: "52px", objectFit: "contain" }}
            src={
              openSidebar === true
                ? largeLogo[0]?.logoLgImg
                : largeLogo[0]?.logoSmImg
            }
            alt="Realtor One"
            cursor="pointer"
            onClick={() => !from && setOpenSidebar(!openSidebar)}
            userSelect="none"
          />
        ) : (
          <RealtorOneMark
            compact={openSidebar !== true}
            onClick={() => !from && setOpenSidebar(!openSidebar)}
          />
        )}
      </Flex>
    </Flex>
  );
}

export default SidebarBrand;
