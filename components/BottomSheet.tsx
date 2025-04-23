import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const GenericBottomSheet = ({
  isVisible,
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  onPrimaryPress,
  onSecondaryPress,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onSecondaryPress}
      style={styles.modal}
    >
      <View style={styles.container}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

        {primaryLabel && (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={onPrimaryPress}
          >
            <Text style={styles.primaryText}>{primaryLabel}</Text>
          </TouchableOpacity>
        )}

        {secondaryLabel && (
          <TouchableOpacity onPress={onSecondaryPress}>
            <Text style={styles.secondaryText}>{secondaryLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "white",
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  primaryText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryText: {
    color: Colors.light.tint,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default GenericBottomSheet;
