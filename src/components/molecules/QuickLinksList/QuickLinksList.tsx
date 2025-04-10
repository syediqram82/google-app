import {
  QuickLinkItem,
  QuickLinkItemProps,
} from '@/components/atoms/QuickLinkItem';
import TranslateIcon from '@/assets/svg/translate.svg';
import ImageSearchIcon from '@/assets/svg/image-search.svg';
import HomeworkIcon from '@/assets/svg/homework.svg';
import MusicNoteIcon from '@/assets/svg/music-note.svg';
import {ThemedScrollView} from '@/components/styled/ScrollView';

const QuickLinksItemData: QuickLinkItemProps[] = [
  {
    id: 1,
    icon: <ImageSearchIcon width={28} height={28} fill={'#fcd563'} />,
    bgColor: 'googleYellow',
    onPress: () => console.log('Mic pressed'),
  },
  {
    id: 2,
    icon: <TranslateIcon width={28} height={28} fill={'#a4c3f5'} />,
    bgColor: 'googleBlue',
    onPress: () => console.log('Lens pressed'),
  },
  {
    id: 3,
    icon: <HomeworkIcon width={28} height={28} fill={'#67c984'} />,
    bgColor: 'googleGreen',
    onPress: () => console.log('Camera pressed'),
  },
  {
    id: 4,
    icon: <MusicNoteIcon width={28} height={28} fill={'#e5aeab'} />,
    bgColor: 'googleRed',
    onPress: () => console.log('Gallery pressed'),
  },
];

export const QuickLinksList = () => {
  return (
    <ThemedScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 5, paddingHorizontal: 10}}
      marginTop={20}>
      {QuickLinksItemData.map(item => (
        <QuickLinkItem
          key={item.id}
          onPress={item.onPress}
          icon={item.icon}
          bgColor={item.bgColor}
        />
      ))}
    </ThemedScrollView>
  );
};
