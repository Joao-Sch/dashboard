import { Box, Flex, Link, Icon } from "@chakra-ui/react";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";

export function SideBar() {
    return(
          
        <Box 
        w="250px" 
        h="100vh" 
        bg="gray.800" 
        color="white" 
        p="5"
        position="fixed"
      >
        <Flex direction="column" gap="6">
          <SidebarItem icon={FiHome} label="Dashboard" />
          <SidebarItem icon={FiUser} label="Perfil" />
          <SidebarItem icon={FiSettings} label="Configurações" />
        </Flex>
      </Box>
    );
  };
  
  const SidebarItem = ({ icon, label }) => (
    <Flex align="center" gap="3" p="3" _hover={{ bg: "gray.700", borderRadius: "md" }}>
      <Icon as={icon} />
      <Link>{label}</Link>
    </Flex>
    )
}