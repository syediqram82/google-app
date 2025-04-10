import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {BASE_COLORS} from 'theme/elements';
import SpeakerIcon from '@/assets/svg/speaker.svg';

type DictionaryCardProps = {
  title: string;
};

export const DictionaryCard = ({title}: DictionaryCardProps) => {
  return (
    <Box>
      <Text color="textPrimary" fontSize={18} fontFamily="medium">
        Dictionary
      </Text>
      <Text color="textSecondary" fontSize={12} marginTop="xs">
        Definitions from Oxford Languages
      </Text>

      <Box
        marginTop="lg"
        paddingY="md"
        paddingX="lg"
        borderWidth={1}
        borderColor="rgba(255,255,255,0.2)"
        borderRadius="lg">
        <Text color="textPrimary" fontSize={16}>
          English
        </Text>
      </Box>

      <Box marginTop="lg" flexDirection="row" alignItems="center">
        <Box
          width={60}
          height={60}
          borderRadius={30}
          backgroundColor={BASE_COLORS.accentBlueLight}
          justifyContent="center"
          alignItems="center">
          <SpeakerIcon color={BASE_COLORS.textPrimary} />
        </Box>
        <Box marginLeft="md">
          <Text color="textPrimary" fontSize={24} fontFamily="bold">
            {title}¹
          </Text>
          <Text color="textSecondary" fontSize={16}>
            /{title}/
          </Text>
        </Box>
      </Box>

      <Text color="textSecondary" fontSize={18} marginTop="lg">
        noun
      </Text>

      <Box marginTop="md">
        <Text color="textPrimary" fontSize={18}>
          1. this is just a dummy text I put here to create this dummy
          dictionary
        </Text>
      </Box>
    </Box>
  );
};
