// import React, { useEffect, useState, useRef } from 'react';
// import {
//   Modal,
//   Dimensions,
//   Animated,
//   TouchableWithoutFeedback,
//   View,
//   Easing,
//   Platform,
// } from 'react-native';

// const screenHeight = Dimensions.get('screen').height;

// function ScrollList(props) {
//   const {
//     visible = false,
//     // Wrapper
//     style = {},
//     // Body
//     bodyStyle = {},
//     // Mask
//     maskStyle,
//     onBodyLayout,
//     onClose,
//   } = props;

//   // ========================= Anim =========================
//   const animRef = useRef({
//     scrollY: new Animated.Value(0),
//     transformYValue: new Animated.Value(0),
//     translateY: null,
//     translateYListener: null,
//   });

//   // ========================= Effect =========================

//   useEffect(() => {
//     const scrollY = animRef.current.scrollY;
//     let tagHeight = 36;
//     let tagHeightInput = tagHeight;
//     // 根据不同平台，调整动画帧数
//     if (Platform.OS === 'android') {
//       tagHeightInput *= 2;
//     } else {
//       tagHeightInput *= 1.2;
//     }
//     const scrollYClamped = animRef.diffClamp(scrollY, 0, tagHeightInput);

//     const translateY = scrollYClamped.interpolate({
//       inputRange: [0, tagHeightInput], // 修改动画帧数
//       outputRange: [0, -tagHeight],
//     });

//     animRef.current.translateYListener = translateY.addListener(({ value }) => {
//       animRef.current.translateYNumber.setValue(value);
//     });

//     animRef.current.translateY = translateY;

//     return () => {
//       animRef.current.translateY.removeListener(
//         animRef.current.translateYListener,
//       );
//     };
//   }, []);
//   // ========================= Event =========================

//   // ========================= render =========================
//   const tagStyles = {};

//   const listStyles = {
//     flex: 1,
//     zIndex: -1,
//   };
//   // 当列表位置发生偏移的时候，需要增加一个负的 margin 来缩小列表的可视区域，否则会出现遮挡
//   if (animRef.current.translateYNumber) {
//     listStyles.marginBottom = animRef.current.translateYNumber;
//   }
//   tagStyles.transform = [{ translateY: animRef.current.translateY }];
//   listStyles.transform = [{ translateY: animRef.current.translateY }];

//   return (
//     <View style={{ flex: 1 }}>
//       <Animated.View style={tagStyles}>{tags}</Animated.View>
//       <Animated.ScrollView // <-- 使用可动画化的ScrollView组件
//         style={listStyles}
//         scrollEventThrottle={1} // <-- 设为1以确保滚动事件的触发频率足够密集
//         onScroll={Animated.event(
//           [
//             {
//               nativeEvent: {
//                 contentOffset: { y: animRef.current.scrollY },
//               },
//             },
//           ],
//           { useNativeDriver: true }, // <-- 加上这一行
//         )}>
//         {content}
//       </Animated.ScrollView>
//     </View>
//   );
// }

// export default ScrollList;
