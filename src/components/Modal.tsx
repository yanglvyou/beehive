import React, { useEffect, useState, useRef } from 'react';
import {
  Modal,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  View,
  Easing,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

function BasicModal(props) {
  const {
    visible = false,
    // Wrapper
    style = {},
    // Body
    bodyStyle = {},
    // Mask
    maskStyle,
    onBodyLayout,
    onClose,
  } = props;

  const [animatedVisible, setAnimatedVisible] = useState(visible);
  // ========================= Anim =========================
  const animRef = useRef({
    backgroundOpacityValue: new Animated.Value(0),
    transformYValue: new Animated.Value(0),
  });

  const updateAnimValue = val => {
    animRef.current.backgroundOpacityValue.setValue(val);
    animRef.current.transformYValue.setValue(val);
  };

  const showAnimating = () => {
    updateAnimValue(0);

    Animated.parallel([
      Animated.timing(animRef.current.backgroundOpacityValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.easeIn,
        useNativeDriver: true,
      }),
      Animated.spring(animRef.current.transformYValue, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    setAnimatedVisible(true);
  };

  const hideAnimating = () => {
    Animated.parallel([
      Animated.timing(animRef.current.backgroundOpacityValue, {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),

      Animated.spring(animRef.current.transformYValue, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      setAnimatedVisible(false);
    }, 200);
  };
  // ========================= Effect =========================

  useEffect(() => {
    if (visible) {
      showAnimating();
    } else {
      hideAnimating();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  // ========================= Event =========================
  //   const handleClose = _.debounce(
  //     () => {
  //       hideAnimating();

  //       onClose?.();
  //     },
  //     100,
  //     true,
  //   );

  const handleClose = () => {
    hideAnimating();

    onClose?.();
  };

  // ========================= render =========================
  const renderBackground = () => {
    const bgOpacityAnim = animRef.current.backgroundOpacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.8],
    });

    return (
      <TouchableWithoutFeedback onPress={handleClose}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            opacity: bgOpacityAnim,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#333333',
            ...maskStyle,
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  const renderPanelContent = () => {
    const transformYValue = animRef.current.transformYValue.interpolate({
      inputRange: [0, 1],
      outputRange: [screenHeight, 0],
    });
    console.log(transformYValue, 'transformYValue');
    const contentStyle = {
      ...style,
    };

    return (
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          transform: [
            {
              translateY: transformYValue,
            },
          ],
          position: 'absolute',
          bottom: 300,
          left: 16,
          right: 16,
          flex: 1,
        }}>
        <Animated.View style={contentStyle}>
          {/* Body */}
          <View style={bodyStyle}>{props.children}</View>
        </Animated.View>
      </Animated.View>
    );
  };

  const renderPanel = () => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ flex: 1 }}>
        {renderBackground()}
        {renderPanelContent()}
      </View>
    );
  };

  return (
    <Modal
      visible={animatedVisible}
      animationType={'none'}
      transparent={true}
      presentationStyle={'overFullScreen'}
      onRequestClose={handleClose}
      hardwareAccelerated={true}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute' }}
        onLayout={onBodyLayout}
      />
      {renderPanel()}
    </Modal>
  );
}

export default BasicModal;
