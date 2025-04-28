import { View, Text } from "react-native";
import React from "react";

interface SearchTagsProps {
  tag: string;
}

const SearchTags = ({ tag }: SearchTagsProps) => {
  return (
    <View className="h-[46] border-2 border-searchTagBorder rounded-full px-4 py-2 justify-center">
      <Text className="font-Sen-Regular text-[16px]">{tag}</Text>
    </View>
  );
};

export default SearchTags;
