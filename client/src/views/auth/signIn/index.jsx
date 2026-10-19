import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

// Custom components
// Assets

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { postApi } from "services/api";
import { loginSchema } from "schema";
import { toast } from "react-toastify";
import Spinner from "components/spinner/Spinner";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/localSlice";
import RealtorOneMark from "components/brand/RealtorOneMark";

function SignIn() {
  const [isLoding, setIsLoding] = React.useState(false);
  const [checkBox, setCheckBox] = React.useState(true);

  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const showPass = () => setShow(!show);

  const initialValues = {
    username: "",
    password: "",
  };
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      login();
    },
  });
  const navigate = useNavigate();

  const login = async () => {
    try {
      setIsLoding(true);
      let response = await postApi("api/user/login", values, checkBox);
      if (response && response?.status === 200) {
        navigate("/superAdmin");
        toast.success("Login Successfully!");
        resetForm();
        dispatch(setUser(response?.data?.user))
      } else {
        toast.error(response?.response?.data?.error);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoding(false);
    }
  };

  const fieldProps = {
    fontSize: "sm",
    fontWeight: "500",
    size: "lg",
    bg: "#1C1C1C",
    color: "#ECECE9",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    _placeholder: { color: "#8C8C88" },
    _hover: { borderColor: "rgba(209,207,192,0.35)" },
    _focus: {
      borderColor: "#D1CFC0",
      boxShadow: "0 0 0 3px rgba(209,207,192,0.15)",
    },
  };

  return (
    <Flex
      className="ro-auth"
      minH="100vh"
      align="center"
      justify="center"
      px="16px"
      py="32px"
      bg="#141414"
      backgroundImage="radial-gradient(circle at 100% 0%, rgba(209,207,192,0.14) 0%, transparent 42%), radial-gradient(circle at 0% 100%, rgba(196,163,90,0.08) 0%, transparent 38%)"
    >
      <Flex direction="column" align="center" w="450px" maxW="100%">
        <Box
          w="100%"
          bg="#1C1C1C"
          border="1px solid rgba(255,255,255,0.06)"
          borderRadius="40px"
          px={{ base: "24px", md: "44px" }}
          py={{ base: "32px", md: "48px" }}
          boxShadow="0 40px 100px rgba(0,0,0,0.45)"
        >
          <Flex direction="column" align="center" mb="28px">
            <RealtorOneMark h="72px" />
            <Heading
              mt="14px"
              color="#ECECE9"
              fontSize="36px"
              fontFamily="Outfit, Inter, sans-serif"
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              Realtor
              <Text as="span" color="#D1CFC0">
                One
              </Text>
            </Heading>
            <Text
              mt="6px"
              color="#8C8C88"
              fontSize="11px"
              fontWeight="700"
              letterSpacing="0.22em"
              textTransform="uppercase"
            >
              CRM
            </Text>
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors?.username && touched?.username}>
              <FormLabel
                display="flex"
                fontSize="11px"
                fontWeight="700"
                color="#C3C3BF"
                letterSpacing="0.14em"
                textTransform="uppercase"
                mb="8px"
              >
                Email
              </FormLabel>
              <Input
                {...fieldProps}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.username}
                name="username"
                type="email"
                placeholder="you@realtoronehub.com"
                mb={errors?.username && touched?.username ? undefined : "22px"}
                borderColor={
                  errors?.username && touched?.username ? "red.300" : "rgba(255,255,255,0.08)"
                }
              />
              {errors?.username && touched?.username && (
                <FormErrorMessage mb="24px">
                  {" "}
                  {errors?.username}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={errors?.password && touched?.password}
              mb="24px"
            >
              <FormLabel
                fontSize="11px"
                fontWeight="700"
                color="#C3C3BF"
                letterSpacing="0.14em"
                textTransform="uppercase"
                display="flex"
              >
                Password
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  {...fieldProps}
                  isRequired={true}
                  placeholder="Enter your password"
                  name="password"
                  mb={errors?.password && touched?.password ? undefined : "22px"}
                  value={values?.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={show ? "text" : "password"}
                  borderColor={
                    errors?.password && touched?.password
                      ? "red.300"
                      : "rgba(255,255,255,0.08)"
                  }
                  pr="48px"
                />
                <InputRightElement h="48px" display="flex" alignItems="center">
                  <Icon
                    color="#8C8C88"
                    _hover={{ cursor: "pointer", color: "#ECECE9" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={showPass}
                  />
                </InputRightElement>
              </InputGroup>
              {errors?.password && touched?.password && (
                <FormErrorMessage mb="24px">
                  {" "}
                  {errors?.password}
                </FormErrorMessage>
              )}
              <Flex justifyContent="space-between" align="center" mb="24px">
                <FormControl display="flex" alignItems="center">
                  <Checkbox
                    onChange={(e) => setCheckBox(e?.target?.checked)}
                    id="remember-login"
                    value={checkBox}
                    defaultChecked
                    colorScheme="brandScheme"
                    me="10px"
                  />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="0"
                    fontWeight="normal"
                    color="#C3C3BF"
                    fontSize="sm"
                  >
                    Keep me logged in
                  </FormLabel>
                </FormControl>
              </Flex>

              <Button
                fontSize="13px"
                fontWeight="700"
                letterSpacing="0.12em"
                textTransform="uppercase"
                w="100%"
                h="48px"
                type="submit"
                bg="#D1CFC0"
                color="#141414"
                borderRadius="12px"
                _hover={{ bg: "#E2E1D7" }}
                _active={{ bg: "#B8B6A8" }}
                disabled={isLoding ? true : false}
              >
                {isLoding ? <Spinner /> : "Sign in"}
              </Button>
            </FormControl>
          </form>
        </Box>
        <Text mt="18px" color="#8C8C88" fontSize="sm">
          Realtor One desk
        </Text>
      </Flex>
    </Flex>
  );
}

export default SignIn;
