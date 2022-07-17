import {
  chakra,
  Container,
  Grid,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiSettingsLine, RiWallet3Line } from "react-icons/ri";
import Image from "next/image";

const Sidebar = () => {
  return (
    <Stack
      h="calc(100vh - 4rem)"
      w="200px"
      spacing={0}
      borderRight="0.5px solid rgb(0 0 0 / 15%)"
      position="fixed"
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        border="0.5px solid rgb(0 0 0 / 15%)"
        borderTop="none"
        borderLeft="none"
        borderBottomRightRadius="30px"
        pl={4}
        pt={4}
        pb={8}
      >
        <Image src="/dots-logo.svg" alt="Logo" width="32px" height="32px" />
        <Heading letterSpacing="-1px" fontSize="2xl" fontWeight="700">
          dots
        </Heading>
      </Stack>

      <Stack
        flex="1"
        border="0.5px solid rgb(0 0 0 / 15%)"
        borderLeft="none"
        borderTopRightRadius="30px"
        borderBottomRightRadius="30px"
        pl={4}
        pt={10}
        spacing={5}
      >
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <chakra.div
            boxSize="11px"
            border="1.5px solid rgb(0 0 0 / 100%)"
            bg="brand.500"
            rounded="full"
          />

          <Link
            href="/"
            fontWeight="700"
            color="rgb(0 0 0 / 70%)"
            _hover={{ textDecoration: "none", fontWeight: "700" }}
          >
            Dashboard
          </Link>
        </Stack>

        {["trade", "liquidity", "farms", "marketplace"].map((key) => (
          <Stack key={key} direction="row" alignItems="center" spacing={2.5}>
            <chakra.div
              boxSize="11px"
              border="1.5px solid rgb(0 0 0 / 100%)"
              rounded="full"
            />

            <Link
              textTransform="capitalize"
              color="rgb(0 0 0 / 70%)"
              transition="all 0.2s"
              _hover={{ textDecoration: "none", fontWeight: "700" }}
            >
              {key}
            </Link>
          </Stack>
        ))}
      </Stack>

      <Stack
        border="0.5px solid rgb(0 0 0 / 15%)"
        borderLeft="none"
        borderBottom="none"
        borderTopRightRadius="30px"
        pl={4}
        pt={8}
        pb={4}
        spacing={3}
      >
        <Stack
          as={Link}
          direction="row"
          alignItems="center"
          spacing={2.5}
          transition="all 0.2s"
          _hover={{ textDecoration: "none", fontWeight: "600" }}
        >
          <Icon boxSize={5} as={RiSettingsLine} />

          <Text as="span" color="rgb(0 0 0 / 70%)">
            Settings
          </Text>
        </Stack>

        <Stack
          as={Link}
          direction="row"
          alignItems="center"
          spacing={2.5}
          transform="all 0.2s"
          _hover={{ textDecoration: "none", fontWeight: "600" }}
        >
          <Icon boxSize={5} as={RiWallet3Line} />

          <Text as="span" color="rgb(0 0 0 / 70%)">
            0xb6...406A
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = (props: LayoutProps) => {
  return (
    <Container maxW="95%" py={8}>
      <Grid
        templateColumns="200px 1fr"
        templateRows="100px 1fr"
        templateAreas={{
          base: `"topbar topbar" "main main"`,
          md: `"sidebar main "
          "sidebar main "`,
        }}
        minH="calc(100vh - 4rem)"
      >
        <chakra.aside gridArea="sidebar" position="relative">
          <Sidebar />
        </chakra.aside>

        <chakra.main>{props.children}</chakra.main>
      </Grid>
    </Container>
  );
};

export default Layout;
