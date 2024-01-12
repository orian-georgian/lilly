import { Flex, Text } from "@mantine/core";
import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { useAuth } from "react-oidc-context";

interface AuthProps {
  children: ReactNode;
}

const Auth: FunctionComponent<AuthProps> = ({ children }) => {
  const auth = useAuth();

  console.log(auth);

  const {
    isLoading,
    isAuthenticated,
    activeNavigator,
    signinRedirect,
    signinSilent,
  } = auth;

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      signinSilent()
        .then((re) => {
          if (!re) {
            return signinRedirect();
          }
        })
        .catch((_) => signinRedirect());
    }
  }, [isLoading, isAuthenticated]);

  if (activeNavigator === "signinSilent") {
    return (
      <Flex className="w-screen h-screen" align="center" justify="center">
        <Text>Authenticating...</Text>
      </Flex>
    );
  }

  if (activeNavigator === "signinRedirect") {
    return (
      <Flex className="w-screen h-screen" align="center" justify="center">
        <Text>Redirecting to Sign In...</Text>
      </Flex>
    );
  }

  if (activeNavigator === "signoutRedirect") {
    return (
      <Flex className="w-screen h-screen" align="center" justify="center">
        <Text>Signing you out...</Text>
      </Flex>
    );
  }

  if (!isAuthenticated || isLoading) {
    return (
      <Flex className="w-screen h-screen" align="center" justify="center">
        <Text>Loading...</Text>
      </Flex>
    );
  }

  return children;
};

export default Auth;
