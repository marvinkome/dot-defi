import Layout from "components/layout";
import {
  Avatar,
  Button,
  Center,
  chakra,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDimensions,
  useToken,
} from "@chakra-ui/react";
import {
  FiMessageCircle,
  FiBriefcase,
  FiArrowRight,
  FiSearch,
} from "react-icons/fi";
import {
  RiSearchLine,
  RiArrowLeftDownLine,
  RiArrowRightLine,
  RiArrowLeftUpLine,
} from "react-icons/ri";
import { GiCrystalBall } from "react-icons/gi";
import { HiOutlineChartBar } from "react-icons/hi";
import { CgMore } from "react-icons/cg";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";
import { useRef } from "react";

const TopBar = () => {
  return (
    <Stack direction="row" justify="space-between" alignItems="center">
      <Heading fontSize="3xl">Welcome to back 🤘🏽</Heading>

      <Stack alignItems="center" direction="row" spacing={2}>
        <IconButton
          variant="ghost"
          aria-label="Search"
          as={RiSearchLine}
          size="md"
          py={2}
          cursor="pointer"
          rounded="full"
        />

        <chakra.div position="relative">
          <IconButton
            variant="ghost"
            aria-label="Notifications"
            as={FiMessageCircle}
            size="md"
            py={2}
            cursor="pointer"
            rounded="full"
          />
          <chakra.div
            boxSize="10px"
            position="absolute"
            bg="brand.500"
            border="2px solid rgb(0 0 0)"
            rounded="full"
            top={2}
            right={2}
          />
        </chakra.div>

        <Avatar
          ml="4 !important"
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Stack>
    </Stack>
  );
};

const Chart = () => {
  const data = [
    { year: "", month: "Jan", amount: 400 },
    { year: "2020", month: "Apr", amount: 600 },
    { year: "", month: "Jul", amount: 200 },
    { year: "", month: "Oct", amount: 100 },
    { year: "2021", month: "Jan", amount: 50 },
    { year: "", month: "Apr", amount: 900 },
    { year: "", month: "Jul", amount: 500 },
    { year: "", month: "Oct", amount: 600 },
    { year: "2022", month: "Jan", amount: 250 },
    { year: "", month: "Apr", amount: 300 },
  ];

  const rootRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useDimensions(rootRef);

  const [lineColor, gridColor] = useToken("colors", ["brand.500", "gray.100"]);

  return (
    <chakra.div ref={rootRef}>
      <LineChart width={dimensions?.borderBox.width} height={300} data={data}>
        <Line type="monotone" dataKey="amount" dot={false} stroke={lineColor} />
        <CartesianGrid stroke={gridColor} horizontal={false} />
        <XAxis
          dataKey="year"
          type="category"
          axisLine={false}
          tickLine={false}
          tick={({ x, y, stroke, payload }) => {
            return (
              <g transform={`translate(${x},${y})`}>
                <Text
                  x="0"
                  y={0}
                  dy={24}
                  textAnchor="middle"
                  as="text"
                  fontSize="sm"
                  fill="rgb(0 0 0 / 60%)"
                >
                  {payload.value}
                </Text>
              </g>
            );
          }}
        />

        <Tooltip
          content={({ active, payload, label }) => {
            if (!active || !payload || !payload.length) return null;

            return (
              <chakra.div bg="#000" rounded="lg" color="#fff" py={2} px={3}>
                <Text mb={1} fontWeight="700" fontSize="sm">
                  ${payload[0].value}
                </Text>
                <Text fontSize="xs" color="rgb(255 255 255 / 70%)">
                  13 Jun, 12:35
                </Text>
              </chakra.div>
            );
          }}
        />
      </LineChart>
    </chakra.div>
  );
};

const TokensTable = () => {
  return (
    <Stack py={6} spacing={5}>
      <Grid templateColumns="repeat(9, 1fr)" gap={6} alignItems="center">
        <GridItem pb={2} w="100%" colSpan={4}>
          <Text fontSize="sm" color="rgb(0 0 0 / 50%)">
            Name
          </Text>
        </GridItem>

        <GridItem w="100%" colSpan={2}>
          <Text fontSize="sm" color="rgb(0 0 0 / 50%)">
            Balance
          </Text>
        </GridItem>

        <GridItem w="100%" colSpan={2}>
          <Text fontSize="sm" color="rgb(0 0 0 / 50%)">
            Total Value
          </Text>
        </GridItem>

        <GridItem w="100%" colSpan={1} />
      </Grid>

      {Array.from({ length: 2 }).map((_, idx) => (
        <Grid
          key={idx}
          templateColumns="repeat(9, 1fr)"
          gap={6}
          alignItems="center"
        >
          <GridItem w="100%" colSpan={4}>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Avatar size="sm" name="Ethereum" src="/eth-logo.png" />

              <Text fontSize="sm" fontWeight="600">
                Ethereum
                <Text ml="2" as="span" color="rgb(0 0 0 / 50%)">
                  ETH
                </Text>
              </Text>
            </Stack>
          </GridItem>

          <GridItem w="100%" colSpan={2}>
            <Text fontSize="sm">41.345209</Text>
          </GridItem>

          <GridItem w="100%" colSpan={2}>
            <Text fontSize="sm" fontWeight="700">
              $3,160.28
            </Text>
          </GridItem>

          <GridItem w="100%" colSpan={1}>
            <IconButton
              variant="unstyled"
              size="xs"
              rounded="full"
              aria-label="More options"
              as={CgMore}
            />
          </GridItem>
        </Grid>
      ))}
    </Stack>
  );
};

const Page = () => {
  return (
    <Container py={4} maxW="container.lg">
      {/* topbar */}
      <TopBar />

      {/* stats and action */}
      <Stack mt={12} direction="row" alignItems="center" spacing={6}>
        {/* stats */}
        <Stack direction="row" w="full" flex="3">
          <Stack direction="row" spacing={4} flex="1">
            <Center bg="brand.400" p={3} rounded="md">
              <Icon as={GiCrystalBall} boxSize={8} />
            </Center>

            <chakra.div>
              <Text fontSize="2xl" fontWeight="700">
                $5,462
              </Text>

              <Text color="rgb(0 0 0 / 50%)" fontSize="sm">
                Total assets
              </Text>
            </chakra.div>
          </Stack>

          <Stack direction="row" spacing={4} flex="1">
            <Center bg="yellow.400" p={3} rounded="md">
              <Icon as={FiBriefcase} boxSize={8} />
            </Center>

            <chakra.div>
              <Text fontSize="2xl" fontWeight="700">
                $3,970
              </Text>

              <Text color="rgb(0 0 0 / 50%)" fontSize="sm">
                Total deposits
              </Text>
            </chakra.div>
          </Stack>

          <Stack direction="row" spacing={4} flex="1">
            <Center bg="gray.200" p={3} rounded="md">
              <Icon as={HiOutlineChartBar} boxSize={8} />
            </Center>

            <chakra.div>
              <Text fontSize="2xl" fontWeight="700">
                +15.5%
              </Text>

              <Text color="rgb(0 0 0 / 50%)" fontSize="sm">
                APY
              </Text>
            </chakra.div>
          </Stack>
        </Stack>

        {/* action */}
        <Stack direction="row" spacing={4} flex="1">
          <Button
            w="full"
            py={6}
            variant="outline"
            borderColor="black"
            _hover={{ bg: "blackAlpha.50" }}
          >
            Actions
          </Button>

          <Button
            w="full"
            py={6}
            color="#fff"
            bg="black"
            _hover={{ bg: "blackAlpha.700" }}
          >
            Deposit
          </Button>
        </Stack>
      </Stack>

      <Stack mt={14} direction="row" spacing={20}>
        {/* performance and table */}
        <Stack flex="2" spacing={10}>
          {/* performance */}
          <Stack spacing={6}>
            <Stack direction="row" justify="space-between">
              <Heading fontWeight="600" fontSize="2xl">
                Portfolio performance
              </Heading>

              <Stack direction="row" spacing="2">
                <Button
                  size="sm"
                  variant="link"
                  rounded="none"
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid",
                    borderColor: "brand.500",
                  }}
                >
                  D
                </Button>
                <Button
                  size="sm"
                  variant="link"
                  rounded="none"
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid",
                    borderColor: "brand.500",
                  }}
                >
                  W
                </Button>
                <Button
                  size="sm"
                  variant="link"
                  rounded="none"
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid",
                    borderColor: "brand.500",
                  }}
                >
                  M
                </Button>
                <Button
                  size="sm"
                  variant="link"
                  rounded="none"
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid",
                    borderColor: "brand.500",
                  }}
                >
                  Y
                </Button>
                <Button
                  size="sm"
                  variant="link"
                  rounded="none"
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid",
                    borderColor: "brand.500",
                  }}
                >
                  All
                </Button>
              </Stack>
            </Stack>

            <Chart />
          </Stack>

          {/* tokens */}
          <Tabs variant="unstyled">
            <Stack direction="row" justify="space-between">
              <TabList>
                <Tab
                  color="gray.500"
                  fontWeight={600}
                  px={0}
                  mx={2}
                  _selected={{
                    borderBottom: "2px solid",
                    borderColor: "brand.500",
                    color: "#000",
                  }}
                >
                  Tokens
                </Tab>
                <Tab
                  color="gray.500"
                  fontWeight={600}
                  px={0}
                  mx={2}
                  _selected={{
                    borderBottom: "2px solid",
                    borderColor: "brand.500",
                    color: "#000",
                  }}
                >
                  NFTs
                </Tab>
              </TabList>

              <chakra.div>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="gray.800" />
                  </InputLeftElement>

                  <Input
                    variant="flushed"
                    fontSize="sm"
                    placeholder="Find your asset"
                  />
                </InputGroup>
              </chakra.div>
            </Stack>

            <TabPanels>
              <TabPanel>
                <TokensTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>

        {/* sidebar */}
        <Stack flex="1">
          {/* activity */}
          <Stack spacing={6}>
            <Stack direction="row" justify="space-between" alignItems="center">
              <Heading fontSize="2xl" fontWeight="600">
                Recent activity
              </Heading>

              <Stack
                as="a"
                direction="row"
                alignItems="center"
                spacing={1}
                href="/"
              >
                <Text fontSize="sm" fontWeight={600}>
                  More
                </Text>

                <Icon as={FiArrowRight} boxSize={4} />
              </Stack>
            </Stack>

            <Stack spacing={6}>
              <Stack direction="row">
                <Icon as={RiArrowLeftDownLine} fontSize="xl" />

                <chakra.div>
                  <Text mb={1} fontWeight="600" fontSize="sm" lineHeight="1.2">
                    Deposit
                  </Text>

                  <Text fontSize="xs" color="rgb(0 0 0 / 50%)">
                    5 Mar 22, 18:05
                  </Text>
                </chakra.div>

                <chakra.div ml="auto !important">
                  <Text mb={1} fontWeight="600" fontSize="sm" lineHeight="1.2">
                    0.000045 ONE
                  </Text>

                  <Stack
                    spacing={1}
                    justify="flex-end"
                    alignItems="center"
                    direction="row"
                  >
                    <chakra.div boxSize="6px" bg="gray.400" rounded="full" />

                    <Text fontSize="xs" color="rgb(0 0 0 / 50%)">
                      Checking
                    </Text>
                  </Stack>
                </chakra.div>
              </Stack>

              <Stack direction="row">
                <Icon as={RiArrowRightLine} fontSize="xl" />

                <chakra.div>
                  <Text mb={1} fontWeight="600" fontSize="sm" lineHeight="1.2">
                    Sending
                  </Text>

                  <Text fontSize="xs" color="rgb(0 0 0 / 50%)">
                    5 Mar 22, 05:12
                  </Text>
                </chakra.div>

                <chakra.div ml="auto !important">
                  <Text mb={1} fontWeight="600" fontSize="sm" lineHeight="1.2">
                    0.000045 ONE
                  </Text>

                  <Stack
                    spacing={1}
                    justify="flex-end"
                    alignItems="center"
                    direction="row"
                  >
                    <chakra.div boxSize="6px" bg="brand.500" rounded="full" />

                    <Text fontSize="xs" color="rgb(0 0 0 / 50%)">
                      Completed
                    </Text>
                  </Stack>
                </chakra.div>
              </Stack>

              <Stack direction="row">
                <Icon as={RiArrowLeftUpLine} fontSize="xl" />

                <chakra.div>
                  <Text mb={1} fontWeight="600" fontSize="sm" lineHeight="1.2">
                    Withdraw
                  </Text>

                  <Text fontSize="xs" color="rgb(0 0 0 / 50%)">
                    28 Feb 22, 12:40
                  </Text>
                </chakra.div>

                <chakra.div ml="auto !important">
                  <Text mb={1} fontWeight="600" fontSize="sm" lineHeight="1.2">
                    0.000045 ONE
                  </Text>

                  <Stack
                    spacing={1}
                    justify="flex-end"
                    alignItems="center"
                    direction="row"
                  >
                    <chakra.div boxSize="6px" bg="gray.600" rounded="full" />

                    <Text fontSize="xs" color="rgb(0 0 0 / 50%)">
                      Declined
                    </Text>
                  </Stack>
                </chakra.div>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

Page.Layout = Layout;
export default Page;
