import { Box, Flex, Text } from "@chakra-ui/react";
import Footer from "components/footer/FooterAuth";
import RealtorOneMark from "components/brand/RealtorOneMark";

function AuthIllustration(props) {
  const { children } = props;
  return (
    <Flex h="max-content" bg="#FAF9F5">
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w="100%"
        maxW={{ md: "66%", lg: "1313px" }}
        mx="auto"
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent="center"
        direction="column"
      >
        {children}
        <Box
          display={{ base: "none", md: "flex" }}
          h="100%"
          minH="100vh"
          w={{ lg: "50vw", "2xl": "44vw" }}
          borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}
          justifyContent="center"
          position="absolute"
          flexDirection="column"
          alignItems="center"
          bg="#141414"
          overflow="hidden"
          right="0px"
          px="48px"
        >
          <RealtorOneMark h="148px" />
          <Text
            mt="28px"
            color="#D1CFC0"
            fontFamily="Outfit, Inter, sans-serif"
            fontWeight="600"
            fontSize="13px"
            letterSpacing="0.22em"
            textTransform="uppercase"
          >
            CRM
          </Text>
          <Text
            mt="10px"
            color="#A39E92"
            fontSize="sm"
            textAlign="center"
            maxW="280px"
          >
            Leads, properties, and follow-ups in one place.
          </Text>
        </Box>
        <Footer />
      </Flex>
    </Flex>
  );
}
// PROPS

// AuthIllustration.propTypes = {
//   illustrationBackground: PropTypes.string,
//   image: PropTypes.any,
// };

export default AuthIllustration;
