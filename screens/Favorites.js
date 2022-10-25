import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";

import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, HomeHeader } from "../components";
import NFTCard from "../components/NFTCard";
import FavoritesHeader from "../components/FavoritesHeader";

const Favorites = () => {
  const [nftData, setNftData] = useState(NFTData);
  function handleSearch(value) {
    if (!value.length) return setNftData(NFTData);
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<FavoritesHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
