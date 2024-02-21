import { StyleSheet } from "react-native";
export const Fillotp = StyleSheet.create({
  codeFieldRoot: { 
    margin: 20, 
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 10,
    padding: 5
  },
  focusCell: {
    borderColor: '#000',
  },
});