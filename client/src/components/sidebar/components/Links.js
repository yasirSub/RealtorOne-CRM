/* eslint-disable */
import { NavLink, useLocation } from "react-router-dom";
// chakra imports
import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("#2A2824", "#F4F1E8");
  let inactiveColor = useColorModeValue("#5C584E", "#A39E92");
  let activeIcon = useColorModeValue("#7C7865", "#D1CFC0");
  let textColor = useColorModeValue("#5C584E", "#C3C3BF");
  let brandColor = useColorModeValue("#7C7865", "#D1CFC0");
  let sidebarBgColor = useColorModeValue(
    "rgba(124, 120, 101, 0.12)",
    "rgba(209, 207, 192, 0.12)",
  );
  let separatorBg = useColorModeValue("#FAF9F5", "#141414");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = JSON.parse(localStorage.getItem("user"));

  const { routes, setOpenSidebar, openSidebar } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location?.pathname === routeName;
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes) => {
    return routes?.map((route, index) => {
      if (route?.category) {
        return (
          <>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt="18px"
              pb="10px"
              key={index}
            >
              {route?.name}
            </Text>
            {createLinks(route?.items)}
          </>
        );
      } else if (
        !route?.under &&
        user?.role &&
        route?.layout?.includes(`/${user?.role}`)
      ) {
        return (
          <NavLink key={index} to={route?.path}>
            {route?.separator && (
              <Box position="relative" margin="20px 0">
                <Divider />
                <AbsoluteCenter
                  textTransform={"capitalize"}
                  bg={separatorBg}
                  color={inactiveColor}
                  width={"max-content"}
                  padding="0 10px"
                  textAlign={"center"}
                >
                  {route?.separator}
                </AbsoluteCenter>
              </Box>
            )}
            {route.icon ? (
              <Box
                mx="12px"
                mb="2px"
                borderRadius="8px"
                backgroundColor={
                  activeRoute(route?.path?.toLowerCase()) ? sidebarBgColor : ""
                }
                boxShadow={
                  activeRoute(route?.path?.toLowerCase())
                    ? "inset 3px 0 0 #D1CFC0"
                    : "none"
                }
                ps={"14px"}
                pb={"4px"}
                pt={"4px"}
                _hover={{ bg: "rgba(209,207,192,0.06)" }}
              >
                <HStack
                  spacing={
                    activeRoute(route?.path?.toLowerCase()) ? "22px" : "26px"
                  }
                  py="5px"
                >
                  {openSidebar === true ? (
                    <Flex
                      w="100%"
                      alignItems="center"
                      justifyContent="center"
                      // onClick={() => setOpenSidebar(!openSidebar)}
                    >
                      <Box
                        color={
                          activeRoute(route?.path?.toLowerCase())
                            ? activeIcon
                            : textColor
                        }
                        me="18px"
                      >
                        {route?.icon}
                      </Box>
                      <Text
                        me="auto"
                        pb={"3px"}
                        textOverflow={"ellipsis"}
                        textTransform={"capitalize"}
                        overflowX="hidden"
                        whiteSpace="nowrap"
                        width="190px"
                        color={
                          activeRoute(route?.path?.toLowerCase())
                            ? activeColor
                            : textColor
                        }
                        fontWeight={
                          activeRoute(route?.path?.toLowerCase())
                            ? "bold"
                            : "normal"
                        }
                      >
                        <Tooltip hasArrow label={route?.name}>
                          {route?.name}
                        </Tooltip>
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      w="100%"
                      alignItems="center"
                      justifyContent="center"
                      //  onClick={() => setOpenSidebar(!openSidebar)}
                    >
                      <Box
                        color={
                          activeRoute(route?.path?.toLowerCase())
                            ? activeIcon
                            : textColor
                        }
                        me="18px"
                      >
                        {route?.icon}
                      </Box>
                    </Flex>
                  )}
                  <Box
                    w="4px"
                    bg={
                      activeRoute(route?.path?.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius="5px"
                  />
                </HStack>
              </Box>
            ) : (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route?.path?.toLowerCase()) ? "22px" : "26px"
                  }
                  py="5px"
                  ps="10px"
                >
                  <Text
                    me="auto"
                    color={
                      activeRoute(route?.path?.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(route?.path?.toLowerCase())
                        ? "bold"
                        : "normal"
                    }
                  >
                    {route?.name}
                  </Text>
                  <Box
                    h="36px"
                    w="4px"
                    bg={
                      activeRoute(route?.path?.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius="5px"
                  />
                </HStack>
              </Box>
            )}
          </NavLink>
        );
      }
    });
  };
  //  BRAND
  return createLinks(routes);
}

export default SidebarLinks;
